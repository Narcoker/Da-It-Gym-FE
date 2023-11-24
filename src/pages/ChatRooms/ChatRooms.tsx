import * as S from "./ChatRooms.style";
import * as COLOR from "../../constants/color";
import * as Icon from "../../components/Icon";
import { useEffect, useState } from "react";
import ChatRoom from "./ChatRoom";
import { useNavigate } from "react-router";
import useChatRoomAPI, { Room } from "../../api/useChatRoomAPI";
import { useRecoilValue } from "recoil";
import { userInfoState } from "../../recoil/userInfoState";

function ChatRooms() {
  const [rooms, setRooms] = useState<Room[]>([]);
  const user = useRecoilValue(userInfoState);
  const navigate = useNavigate();
  const { requestChatRooms } = useChatRoomAPI();

  const handleRedirectChatRoom = (roomId: string): void => {
    navigate(`/chat/${roomId}`);
  };

  const handleUpdateChatRoom = async () => {
    const rooms = await requestChatRooms();
    setRooms(rooms);
  };

  useEffect(() => {
    handleUpdateChatRoom();
    setRooms(rooms);
  }, []);

  return (
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
        {rooms.map(
          ({ redisRoomId, imageUrl, receiver, sender, message, messageCreatedAt }) => (
            <S.Users
              key={redisRoomId}
              onClick={() => {
                handleRedirectChatRoom(redisRoomId);
              }}
            >
              <ChatRoom
                imageUrl={imageUrl}
                userName={receiver === user.nickname ? sender : receiver}
                resentMessage={message}
                createdAt={messageCreatedAt}
              />
            </S.Users>
          ),
        )}
      </S.UsersContainer>
    </S.Container>
  );
}

export default ChatRooms;
