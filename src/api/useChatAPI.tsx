import { Client, IMessage, Stomp } from "@stomp/stompjs";
import { useState } from "react";
import { useRecoilValue } from "recoil";
import { userInfoState } from "../recoil/userInfoState";
import { useAxios } from "./useAxios";
import SockJS from "sockjs-client";

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

  // 클라이언트 생성
  const createClient = () => {
    const socket = new SockJS(`${API_URL}/ws`);
    const client = Stomp.over(socket);
    return client;
  };

  // 연결(구독)
  const connect = (client: Client): void => {
    const { redisRoomId, token } = chatConfig;
    client.onConnect = () => {
      client.subscribe(`/sub/chat/room/${redisRoomId}`, subCallback, {
        Authentication: token,
        RedisRoomId: redisRoomId,
      });
      publishEnterUser(client);
    };
    client.activate();
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

  const publishEnterUser = (client: Client) => {
    const { redisRoomId, token } = chatConfig;
    client.publish({
      destination: "/pub/chat/message",
      body: JSON.stringify({
        messageType: "ENTER",
        redisRoomId: redisRoomId,
        message: "",
        sender: user.nickname,
      }),
      headers: {
        Authentication: token,
      },
    });
  };

  // 연결 해제
  const disConnect = (client: Client | undefined): void => {
    client && client.deactivate();
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

  const requestChatSumbit = (client: Client, message: string): void => {
    if (client.connected) {
      const { redisRoomId, token } = chatConfig;
      client.publish({
        destination: "/pub/chat/message",
        body: JSON.stringify({
          messageType: "TALK",
          redisRoomId: redisRoomId,
          message: message,
        }),
        headers: {
          Authentication: token,
        },
      });
    }
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
