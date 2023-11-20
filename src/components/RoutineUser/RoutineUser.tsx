import * as S from "./RoutineUser.style";
import * as Icon from "../Icon";
import * as COLOR from "../../constants/color";
import HashTagButton from "../HashtagButton/HashtagButton";
import { HashTagButtonProps } from "../HashtagButton/HashtagButton";
import useCounts from "../../hooks/useCounts";
import { useNavigate } from "react-router";
import { useTimeCalculate } from "../../api/useTimeCalculate";
interface Props extends HashTagButtonProps {
  routineId: number;
  src: string;
  userName: string;
  info: string;
  likeCount: number;
  shareCount: number;
  timeAgo: string;
}

function RoutineUser({
  routineId,
  src,
  userName,
  info,
  likeCount,
  shareCount,
  timeAgo,
  label,
}: Props) {
  const infomation = info.slice(0, Math.min(130, info.length));
  const reduceCount = useCounts();

  const navigate = useNavigate();
  const timeCalculator = useTimeCalculate();

  return (
    <S.RoutineUserWrapper
      onClick={() => {
        navigate(`/feed/routine/${routineId}`);
      }}
    >
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
              <S.LikeCount>{reduceCount(likeCount)}</S.LikeCount>
            </S.LikeBox>
            <S.ShareBox>
              <S.ShareIcon>
                <Icon.Share />
              </S.ShareIcon>
              <S.ShareCount>{reduceCount(shareCount)}</S.ShareCount>
            </S.ShareBox>
          </S.LikeShareBox>
        </S.UserBox>
      </S.RoutineTop>
      <S.RoutineBottom>
        <S.BottomBox>
          <S.RoutineDivide>
            <HashTagButton label={label} type="division" />
          </S.RoutineDivide>
          <S.RoutineTime>{timeCalculator(timeAgo)}</S.RoutineTime>
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
      userName="jamesjoe"
      info="안녕하세요 오늘도 저는 열심히안녕하세요 오늘도 저는 열심히안녕하세요 오늘도 저는 열심히안녕하세요 오늘도 저는 열심히안dsdsdsdsdsdsdsds녕하세요 오늘도 저는 열심히안녕하세요 오늘도 저는 열심히안녕하세요 오늘도 저는 열심dsdsdsds히늘도 저는 열심히안녕하세요 오늘도 저는 열심히안녕하세요 오늘도 저는 열심히안녕하세요 오늘도 저는 열심히안dsdsdsdsdsdsdsds녕하세요 오늘도 저는 열심히안녕하세요 오늘도 저는 열심히안녕하세요 오늘도 저는 열심dsdsdsds히"
      likeCount="12.3K "
      shareCount="12.3K"
      timeAgo="5시간 전"
      label="3분할"
  /> */
}
