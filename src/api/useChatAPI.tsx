import { Client, IMessage } from "@stomp/stompjs";
import { useState } from "react";
import { useRecoilValue } from "recoil";
import { userInfoState } from "../recoil/userInfoState";
import { toast } from "react-toastify";
import { useAxios } from "./useAxios";

export interface Chat {
  messageType: "TALK" | "ENTER";
  redisRoomId: string;
  message: string;
  sender: string;
  img: string;
  readCount: number;
}

export interface ChatConfig {
  userId: string;
  nickname: string;
  userImg: string;
  brokerURL: string;
  token: string;
  redisRoomId: string;
}

export interface RequestCreateChatRoom {
  receiver: string;
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

function useChatAPI(chatConfig: ChatConfig) {
  const axios = useAxios();
  const API_URL = import.meta.env.VITE_API_URL;
  const [chats, setChats] = useState<Chat[]>([]);
  const user = useRecoilValue(userInfoState);

  // 클라이언트 생성
  const createClient = () => {
    const { redisRoomId, token } = chatConfig;

    const client = new Client({
      brokerURL: "ws://localhost:8080/ws",
      connectHeaders: {
        Authentication: `Bearer ${token}`,
        RedisRoomId: redisRoomId,
      },
      debug: (str) => {
        console.log(str);
      },
    });

    return client;
  };

  // 연결(구독)
  const connect = (client: Client): void => {
    const { redisRoomId, token } = chatConfig;

    client.onConnect = () => {
      client.subscribe(`/sub/chat/room/${redisRoomId}`, subCallback, {
        Authentication: `Bearer ${token}`,
        RedisRoomId: redisRoomId,
      });
    };

    publishEnterUser(client);

    client.activate();
  };

  const subCallback = (response: IMessage): void => {
    const chat = JSON.parse(response.body);
    const isFriendChat = chat.sender !== user.nickName;

    if (isFriendChat && chat.messageType === "ENTER") {
      setChats((prev) => prev.map((chat) => ({ ...chat, readCount: 0 })));
      return;
    }

    setChats((prev) => [...prev, chat]);
  };

  const publishEnterUser = (client: Client) => {
    const { redisRoomId, token } = chatConfig;

    client.publish({
      destination: "/pub/chat/message",
      body: JSON.stringify({
        // chatMessageDto
        messageType: "ENTER",
        redisRoomId: redisRoomId,
        message: "",
        sender: user.nickName,
      }),
      headers: {
        Authentication: `Bearer ${token}`,
      },
    });
  };

  // 연결 해제
  const disConnect = (client: Client | undefined): void => {
    client && client.deactivate();
  };

  // 과거 채팅 내역 불러오기(HTTP)
  // !! response.data -> response.data.data 가 아닌지??
  const requestPastChats = async (client: Client): Promise<Chat[]> => {
    if (client.connected) {
      const { redisRoomId, userId, token } = chatConfig;
      const response = await axios
        .get(`${API_URL}/api/chat/rooms/${redisRoomId}?memberId=${userId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          // setContent(response.data.messages);  // chats[]
          console.log(response);
          return response.data.data;
        })
        .catch(() => {});

      return response;
    }
    // 임시 데이터
    return [
      {
        sender: "조재균",
        img: "https://images.chosun.com/resizer/lGyzt5Hi0efXfaeVhy5gXwXHilc=/616x0/smart/cloudfront-ap-northeast-1.images.arcpublishing.com/chosun/52PNRX6QMNCRDD3QBAFB6XJJ6M.jpg",
        message: "준서 오늘 운동 몇시에 갈거야?",
        messageType: "TALK",
        readCount: 1,
        redisRoomId: "adsf",
      },
      {
        sender: "김준서",
        img: "https://images.chosun.com/resizer/lGyzt5Hi0efXfaeVhy5gXwXHilc=/616x0/smart/cloudfront-ap-northeast-1.images.arcpublishing.com/chosun/52PNRX6QMNCRDD3QBAFB6XJJ6M.jpg",
        message:
          "오늘 학교갔다가 수업 마치고 교수님 호출 있어서 교수님 뵙고 애들이랑 밥먹고 하면 한 9시 쯤 될 것 같은데 같이 갈 수 있어?",
        messageType: "TALK",
        readCount: 1,
        redisRoomId: "asdf",
      },
    ];
  };

  // !!성공/실패 여부 확인할 수 있는지
  const requestChatSumbit = (client: Client, message: string): Chat | null => {
    if (client.connected) {
      const { redisRoomId, nickname, userImg, token } = chatConfig;

      client.publish({
        destination: "/pub/chat/message",
        body: JSON.stringify({
          // chatMessageDto
          messageType: "TALK",
          redisRoomId: redisRoomId,
          message: message,
          sender: nickname,
        }),
        headers: {
          Authentication: `Bearer ${token}`,
        },
      });

      const submittedChat: Chat = {
        sender: nickname,
        img: userImg,
        message: message,
        messageType: "TALK",
        readCount: 0,
        redisRoomId: chatConfig.redisRoomId,
      };

      return submittedChat;
    }
    return null;
  };

  /**
    채팅방 아이디 불러오기
   */
  const requestCreateChatRoom = async (
    payload: RequestCreateChatRoom,
  ): Promise<ResponseCreateChatRoom> => {
    const redisRoomId = await axios
      .post(`http://localhost:8080/api/chat/rooms?memberId=${user.userId}`, payload)
      .then((response) => response.data.data.redisRoomId)
      .catch(() => {
        toast.error("채팅방을 생성하는데 실패했습니다.");
      });
    return redisRoomId;
  };

  return {
    chats,
    setChats,
    createClient,
    connect,
    disConnect,
    requestPastChats,
    requestChatSumbit,
    requestCreateChatRoom,
  };
}

export default useChatAPI;
