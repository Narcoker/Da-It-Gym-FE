import * as S from "./ChatRoom.style";

interface Props {
  imageUrl: string;
  userName: string;
  resentMessage: string;
  createdAt: Date;
}

function ChatRoom({ imageUrl, userName, resentMessage, createdAt }: Props) {
  const resentMessageText =
    resentMessage.slice(0, Math.min(15, resentMessage.length)) + "...";

  return (
    <S.ChatRoomWrapper>
      <S.UserImg src={imageUrl} alt={imageUrl} />
      <S.UserBox>
        <S.UserInfoBox>
          <S.UserName>{userName}</S.UserName>
          <S.ResentMessage>{resentMessageText}</S.ResentMessage>
        </S.UserInfoBox>
        <S.DateBox>
          <S.Date>{createdAt && new Date(createdAt).toLocaleDateString()}</S.Date>
        </S.DateBox>
      </S.UserBox>
    </S.ChatRoomWrapper>
  );
}

export default ChatRoom;
