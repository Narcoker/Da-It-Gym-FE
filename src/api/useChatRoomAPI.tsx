import { useAxios } from "./useAxios";
import { toast } from "react-toastify";

export interface ResponseCreateChatRoom {
  id: number;
  roomName: string;
  sender: string;
  redisRoomId: string;
  receiver: string;
  createdAt: Date;
}

export interface RequestCreateChatRoom {
  receiver: string;
}

export interface Room {
  id: number;
  imageUrl: string;
  messageCreatedAt: Date;
  roomName: string;
  sender: string;
  redisRoomId: string;
  receiver: string;
  message: string;
}

function useChatRoomAPI() {
  const axios = useAxios();
  const API_URL = import.meta.env.VITE_API_URL;

  const requestCreateChatRoom = async (
    payload: RequestCreateChatRoom,
  ): Promise<ResponseCreateChatRoom> => {
    const redisRoomId = await axios
      .post(`${API_URL}/api/chat/rooms`, payload)
      .then((response) => response.data.data.redisRoomId)
      .catch(() => {
        toast.error("채팅방을 생성하는데 실패했습니다.");
      });
    return redisRoomId;
  };

  const requestChatRooms = async () => {
    const rooms = await axios
      .get(`${API_URL}/api/chat/rooms`)
      .then((response) => response.data.data)
      .catch(() => {
        toast.error("채팅방 목록을 불러오는 데 실패했습니다.");
      });
    return rooms;
  };

  return { requestCreateChatRoom, requestChatRooms };
}

export default useChatRoomAPI;
