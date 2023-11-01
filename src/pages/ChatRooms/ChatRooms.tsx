import Nav from "../../components/Nav/Nav";
import * as S from "./ChatRooms.style";
import * as COLOR from "../../constants/color";
import * as Icon from "../../components/Icon";
import { useEffect, useState } from "react";
import ChatRoom from "./ChatRoom";
import { useNavigate } from "react-router";

export interface Room {
  roomId: number;
  userImg: string;
  userName: string;
  resentMessage: string;
  createdAt: Date;
}

const tempRooms: Room[] = [
  {
    roomId: 1,
    userImg: "",
    userName: "짱군이",
    resentMessage: "문앞에서 껄떡거리지말고 빨리 들어와서 운동해 자식아",
    createdAt: new Date(),
  },
  {
    roomId: 2,
    userImg: "",
    userName: "짱군이",
    resentMessage: "문앞에서 껄떡거리지말고 빨리 들어와서 운동해 자식아",
    createdAt: new Date(),
  },
  {
    roomId: 3,
    userImg: "",
    userName: "짱군이",
    resentMessage: "문앞에서 껄떡거리지말고 빨리 들어와서 운동해 자식아",
    createdAt: new Date(),
  },
  {
    roomId: 4,
    userImg: "",
    userName: "짱군이",
    resentMessage: "문앞에서 껄떡거리지말고 빨리 들어와서 운동해 자식아",
    createdAt: new Date(),
  },
  {
    roomId: 5,
    userImg: "",
    userName: "짱군이",
    resentMessage: "문앞에서 껄떡거리지말고 빨리 들어와서 운동해 자식아",
    createdAt: new Date(),
  },
  {
    roomId: 6,
    userImg: "",
    userName: "짱군이",
    resentMessage: "문앞에서 껄떡거리지말고 빨리 들어와서 운동해 자식아",
    createdAt: new Date(),
  },

  {
    roomId: 7,
    userImg: "",
    userName: "짱군이",
    resentMessage: "문앞에서 껄떡거리지말고 빨리 들어와서 운동해 자식아",
    createdAt: new Date(),
  },
  {
    roomId: 8,
    userImg: "",
    userName: "짱군이",
    resentMessage: "문앞에서 껄떡거리지말고 빨리 들어와서 운동해 자식아",
    createdAt: new Date(),
  },
];

function ChatRooms() {
  const [rooms, setRooms] = useState<Room[]>([]);
  const navigate = useNavigate();

  const handleRedirectChatRoom = (roomId: number): void => {
    navigate(`/chat/${roomId}`);
  };

  useEffect(() => {
    setRooms(tempRooms);
  }, []);

  return (
    <>
      <Nav type="top" />
      <S.Container>
        <S.Title>채팅방</S.Title>
        <S.SearchContainer>
          <S.SearchInput
            type="text"
            placeholder="채팅방을 검색해주세요"
            className="search-input"
          />
          <S.Icon>
            <Icon.Search size="24" color={`${COLOR.Gray2}`} />
          </S.Icon>
        </S.SearchContainer>

        <S.UsersContainer>
          {rooms.map(({ roomId, userImg, userName, resentMessage, createdAt }) => (
            <S.Users
              key={roomId}
              onClick={() => {
                handleRedirectChatRoom(roomId);
              }}
            >
              <ChatRoom
                userImg={userImg}
                userName={userName}
                resentMessage={resentMessage}
                createdAt={createdAt}
              />
            </S.Users>
          ))}
        </S.UsersContainer>
      </S.Container>

      <Nav type="chat" />
    </>
  );
}

export default ChatRooms;
