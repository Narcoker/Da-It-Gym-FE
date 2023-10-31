import * as S from "./ChatRoom.style";

interface Props {
  userImg: string;
  userName: string;
  resentMessage: string;
  createdAt: Date;
}

function ChatRoom({ userImg, userName, resentMessage, createdAt }: Props) {
  const resentMessageText =
    resentMessage.slice(0, Math.min(15, resentMessage.length)) + "...";
  return (
    <S.FollowUserWrapper>
      <S.FollowUserImg src={userImg} alt={userImg} />
      <S.UserBox>
        <S.UserInfoBox>
          <S.FollowUserName>{userName}</S.FollowUserName>
          <S.ResentMessage>{resentMessageText}</S.ResentMessage>
        </S.UserInfoBox>
        <S.DateBox>
          <S.Date>{createdAt.toLocaleDateString()}</S.Date>
        </S.DateBox>
      </S.UserBox>
    </S.FollowUserWrapper>
  );
}

export default ChatRoom;

//✨ 사용법
{
  /*  <FollowUser
      src="https://images.chosun.com/resizer/lGyzt5Hi0efXfaeVhy5gXwXHilc=/616x0/smart/cloudfront-ap-northeast-1.images.arcpublishing.com/chosun/52PNRX6QMNCRDD3QBAFB6XJJ6M.jpg"
      userName="조재균"
      info="안녕하세요"
      inbodyScore={100}
  /> */
}
