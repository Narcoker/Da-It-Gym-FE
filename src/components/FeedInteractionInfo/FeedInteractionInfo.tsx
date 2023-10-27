import * as S from "./FeedInteractionInfo.style";
import * as Icon from "../../components/Icon";
import * as COLOR from "../../constants/color";
interface FeedInteractionInfoProps {
  LikeCnt: string;
  ShareCnt: string;
}

function FeedInteractionInfo({ LikeCnt, ShareCnt }: FeedInteractionInfoProps) {
  return (
    <div>
      <S.CntBox>
        <S.IconDiv>
          <Icon.Heart size="24" color={COLOR.Gray2} />
        </S.IconDiv>
        <S.LikeCnt>{LikeCnt}</S.LikeCnt>
        <S.IconDiv>
          <Icon.Share size="24" color={COLOR.Gray2} />
        </S.IconDiv>
        <S.ShareCnt>{ShareCnt}</S.ShareCnt>
      </S.CntBox>
    </div>
  );
}

export default FeedInteractionInfo;
