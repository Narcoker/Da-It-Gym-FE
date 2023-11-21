import { Client, IFrame, IMessage, Stomp } from "@stomp/stompjs";
import { useRef, useState } from "react";
import { useRecoilValue } from "recoil";
import { userInfoState } from "../recoil/userInfoState";
import { useAxios } from "./useAxios";
import SockJS from "sockjs-client";
import { useNavigate } from "react-router";

export interface Chat {
  chatMessageId: string;
  messageType: "TALK" | "ENTER";
  redisRoomId: string;
  message: string;
  messageCreatedAt: string;
  sender: string;
  imageUrl: string;
  readCount: number;
}

export interface ChatConfig {
  nickname: string;
  userImg: string;
  brokerURL: string;
  token: string;
  redisRoomId: string;
}

export interface ResponseCreateChatRoom {
  id: number;
  roomName: string;
  sender: string;
  redisRoomId: string;
  receiver: string;
  createdAt: Date;
}

export interface ResponseSubscribeCallback {
  body: Chat;
}

export interface ResponsePastChats {
  messages: Chat[];
  receiver: string;
  redisRoomId: string;
  roomName: string;
  sender: string;
}
function useChatAPI(chatConfig: ChatConfig) {
  const axios = useAxios();
  const API_URL = import.meta.env.VITE_API_URL;
  const [chats, setChats] = useState<Chat[]>([]);
  const user = useRecoilValue(userInfoState);
  const navigate = useNavigate();
  const client = useRef<Client | undefined>();
  const resentMessage = useRef<string>("");

  // 클라이언트 생성
  const createClient = () => {
    const socket = new SockJS(`${API_URL}/ws`);
    const newClient = Stomp.over(socket);
    client.current = newClient;
    return newClient;
  };

  // 연결(구독)
  const connect = (): void => {
    const { redisRoomId } = chatConfig;
    client.current!.onConnect = () => {
      client.current!.subscribe(`/sub/chat/room/${redisRoomId}`, subCallback, {
        Authentication: localStorage.getItem("accessToken") as string,
        RedisRoomId: redisRoomId,
      });
      publishEnterUser();
    };

    client.current!.onStompError = (frame: IFrame): void => {
      if (frame.headers["message"] === "UNAUTHORIZED") {
        requestNewAccessToken();
        const newClient = createClient();
        client.current = newClient;
        connect();
        setTimeout(() => {
          console.log("재전송");
          requestChatSumbit(resentMessage.current);
        }, 200);
      }
    };

    client.current!.activate();
  };

  const subCallback = (response: IMessage): void => {
    const chat = JSON.parse(response.body);
    const isFriendChat = chat.sender !== user.nickname;
    if (isFriendChat && chat.messageType === "ENTER") {
      setChats((prev) => prev.map((chat) => ({ ...chat, readCount: 0 })));
      return;
    }

    if (chat.messageType === "TALK") {
      setChats((prev) => [...prev, chat]);
    }
  };

  const publishEnterUser = () => {
    const { redisRoomId } = chatConfig;
    client.current &&
      client.current.publish({
        destination: "/pub/chat/message",
        body: JSON.stringify({
          messageType: "ENTER",
          redisRoomId: redisRoomId,
          message: "",
          sender: user.nickname,
        }),
        headers: {
          Authentication: localStorage.getItem("accessToken") as string,
        },
      });
  };

  // 연결 해제
  const disConnect = (): void => {
    client.current && client.current.deactivate();
  };

  // 과거 채팅 내역 불러오기(HTTP)
  const requestPastChats = async (): Promise<ResponsePastChats> => {
    const { redisRoomId } = chatConfig;
    const response = await axios
      .get(`${API_URL}/api/chat/rooms/${redisRoomId}?nickname=${user.nickname}`)
      .then((response) => {
        return response.data.data;
      })
      .catch(() => {});
    return response;
  };

  // 채팅 보내기
  const requestChatSumbit = (message: string): void => {
    if (client.current && client.current.connected) {
      const { redisRoomId } = chatConfig;
      resentMessage.current = message;
      client.current.publish({
        destination: "/pub/chat/message",
        body: JSON.stringify({
          messageType: "TALK",
          redisRoomId: redisRoomId,
          message: message,
        }),
        headers: {
          Authentication: localStorage.getItem("accessToken") as string,
        },
      });
    }
  };

  // AccessToken 재발급
  const requestNewAccessToken = () => {
    axios
      .post(`${import.meta.env.VITE_API_URL}/api/users/token`)
      .then((response) => {
        const newToken = response.headers.authorization;
        localStorage.setItem("accessToken", newToken);
      })
      .catch((error) => {
        localStorage.removeItem("accessToken");
        navigate("/login");
        return Promise.reject(error);
      });
  };

  return {
    chats,
    setChats,
    createClient,
    connect,
    disConnect,
    requestPastChats,
    requestChatSumbit,
  };
}

export default useChatAPI;
