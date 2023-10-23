import * as S from "./FollowUser.style";

interface Props {
  src: string;
  userName: string;
  info: string;
  inbodyScore: number;
}

function FollowUser({ src, userName, info, inbodyScore }: Props) {
  const infomation = info.slice(0, Math.min(30, info.length));
  return (
    <S.FollowUserWrapper>
      <S.FollowUserImg src={src} alt={src} />
      <S.UserBox>
        <S.UserInfoBox>
          <S.FollowUserName> {userName}</S.FollowUserName>
          <S.FollowInfo>{infomation}</S.FollowInfo>
        </S.UserInfoBox>
        <S.InbodyBox>
          <S.InbodyTitle>인바디</S.InbodyTitle>
          <S.InbodyScore>{inbodyScore}</S.InbodyScore>
        </S.InbodyBox>
      </S.UserBox>
    </S.FollowUserWrapper>
  );
}

export default FollowUser;

//✨ 사용법
{
  /*  <FollowUser
      src="https://images.chosun.com/resizer/lGyzt5Hi0efXfaeVhy5gXwXHilc=/616x0/smart/cloudfront-ap-northeast-1.images.arcpublishing.com/chosun/52PNRX6QMNCRDD3QBAFB6XJJ6M.jpg"
      userName="조재균"
      info="안녕하세요"
      inbodyScore={100}
  /> */
}
