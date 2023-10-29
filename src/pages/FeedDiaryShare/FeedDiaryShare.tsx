import Button from "../../components/Button/Button";
import { useDay } from "../../hooks/useDay";
import FDSAccordion from "./components/FDSAccordion";
import FDSTag from "./components/FDSTag";
import SharePhoto from "./components/SharePhoto";
import * as S from "./FeedDiaryShare.style";

function FeedDiaryShare() {
  const [day, dayDispatch] = useDay();
  const handleCancel = () => {};
  const handleShare = () => {
    console.log("day", day);
  };
  return (
    <div>
      <SharePhoto />
      <FDSAccordion day={day} dayDispatch={dayDispatch} />
      <FDSTag />
      <S.ButtonWrapper>
        <S.ButtonBox>
          <Button
            children="취소"
            display="flex"
            type="border"
            size="large"
            onClick={handleCancel}
          />
        </S.ButtonBox>
        <S.ButtonBox>
          <Button
            children="공유하기"
            display="flex"
            type="fill"
            size="large"
            onClick={handleShare}
          />
        </S.ButtonBox>
      </S.ButtonWrapper>
    </div>
  );
}

export default FeedDiaryShare;
