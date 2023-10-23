import * as S from "./RoutineUser.style";
import * as Icon from "../Icon";
import * as COLOR from "../../constants/color";
interface Props {
  src: string;
  userName: string;
  info: string;
  likeCount: string;
  shareCount: string;
  timeAgo: string;
}

function RoutineUser({ src, userName, info, likeCount, shareCount, timeAgo }: Props) {
  const infomation = info.slice(0, Math.min(30, info.length));
  return (
    <S.RoutineUserWrapper>
      <S.RoutineTop>
        <S.RoutineUserImg src={src} alt={src} />
        <S.UserBox>
          <S.UserInfoBox>
            <S.RoutineUserName> {userName}</S.RoutineUserName>
            <S.RoutineInfo>{infomation}</S.RoutineInfo>
          </S.UserInfoBox>
          <S.LikeShareBox>
            <S.LikeBox>
              <S.LikeIcon>
                <Icon.HeartFill color={COLOR.Red} />
              </S.LikeIcon>
              <S.LikeCount>{likeCount}</S.LikeCount>
            </S.LikeBox>
            <S.ShareBox>
              <S.ShareIcon>
                <Icon.Share />
              </S.ShareIcon>
              <S.ShareCount>{shareCount}</S.ShareCount>
            </S.ShareBox>
          </S.LikeShareBox>
        </S.UserBox>
      </S.RoutineTop>
      <S.RoutineBottom>
        <S.BottomBox>
          <S.RoutineDivide>3분할</S.RoutineDivide>
          <S.RoutineTime>{timeAgo}</S.RoutineTime>
        </S.BottomBox>
      </S.RoutineBottom>
    </S.RoutineUserWrapper>
  );
}

export default RoutineUser;

//✨ 사용법
{
  /* <RoutineUser
  src="https://images.chosun.com/resizer/lGyzt5Hi0efXfaeVhy5gXwXHilc=/616x0/smart/cloudfront-ap-northeast-1.images.arcpublishing.com/chosun/52PNRX6QMNCRDD3QBAFB6XJJ6M.jpg"
  userName="조재균"
  info="안녕하세요"
  likeCount="1.2K"
  shareCount="2M"
  timeAgo="5시간 전"
/> */
}
