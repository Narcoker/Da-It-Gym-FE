import * as S from "./FeedInteractionInfo.style";
import * as Icon from "../../components/Icon";
import * as COLOR from "../../constants/color";
interface FeedInteractionInfoProps {
  likeCnt: number;
  shareCnt: number;
}

function FeedInteractionInfo({ likeCnt, shareCnt }: FeedInteractionInfoProps) {
  console.log(likeCnt);
  return (
    <div>
      <S.CntBox>
        <S.IconDiv>
          <Icon.HeartFill size="24" color={COLOR.Red} />
        </S.IconDiv>
        <S.LikeCnt>{likeCnt}</S.LikeCnt>
        <S.IconDiv>
          <Icon.Share size="24" color={COLOR.Primary} />
        </S.IconDiv>
        <S.ShareCnt>{shareCnt}</S.ShareCnt>
      </S.CntBox>
    </div>
  );
}

export default FeedInteractionInfo;
