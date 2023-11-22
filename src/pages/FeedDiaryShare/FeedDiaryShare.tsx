import { useEffect, useState } from "react";
import Button from "../../components/Button/Button";
import { useDay } from "../../hooks/useDay";
import FDSAccordion from "./components/FDSAccordion";
import FDSTag from "./components/FDSTag";
import SharePhoto from "./components/SharePhoto";
import * as S from "./FeedDiaryShare.style";
import useExerciseDiaryAPI from "../../api/useExerciseDiaryAPI";
import moment from "moment";
import { useFeedDiaryShareAPI } from "../../api/useFeedDiaryShareAPI";
import { useRecoilValue } from "recoil";
import { splitState } from "../../recoil/diaryshareState";
import { useNavigate } from "react-router";
import { userInfoState } from "../../recoil/userInfoState";

function FeedDiaryShare() {
  const [day, dayDispatch] = useDay();
  const date = moment(new Date()).format("YYYY-MM-DD");
  const navigate = useNavigate();
  const [journalId, setJournalId] = useState<number>(0);
  const [splitList, setSplitList] = useState<Array<string>>([]);
  const { requestJournalDetail } = useExerciseDiaryAPI();
  const { requestPostFeedShare } = useFeedDiaryShareAPI();
  const [formData, setFormData] = useState(new FormData());
  const [visible, setVisible] = useState(true);
  const { nickname } = useRecoilValue(userInfoState);
  const split = useRecoilValue(splitState);
  const handleCancel = () => {
    setVisible(false);
  };
  const handleVisibleSplitChange = (visible: boolean, split: string) => {
    const jsonVisible = JSON.stringify({ visible, split });
    const blobVisible = new File([jsonVisible], "share", { type: "application/json" });
    formData.append("share", blobVisible);
    setFormData(formData);
  };

  const handleShare = () => {
    handleVisibleSplitChange(visible, split);
    console.log("formData", formData);
    for (const key of formData.keys()) {
      console.log(key, ":", formData.get(key));
    }
    // handleSplitChange(split);

    // 🧐  file share에 뭐들어 있는지 확인
    // const file = formData.get("share");
    // const reader = new FileReader();
    // reader.onload = function (event) {
    //   if (event) {
    //     console.log("asdasds", event.target.result); // 여기에서 파일 내용(JSON 문자열)을 볼 수 있습니다.
    //   }
    // };
    // if (file) {
    //   reader.readAsText(file);
    // }

    requestPostFeedShare(journalId, formData); //🔥 API 요청
    navigate(`/profile/${nickname}?section=diary`);
    // 🧐  formData 에 뭐들어 있는지 확인
    // for (const key of formData.keys()) {
    //   console.log(key, ":", formData.get(key));
    // }
  };
  useEffect(() => {
    requestJournalDetail(date as string, dayDispatch, setJournalId, setSplitList);
  }, [journalId]);

  return (
    <div>
      <SharePhoto formData={formData} setFormData={setFormData} />
      <FDSAccordion day={day} dayDispatch={dayDispatch} />
      <FDSTag splitList={splitList} />
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
