import { useNavigate } from "react-router";
import Button from "../../../../components/Button/Button";
import ExerciseAccordion from "../../../../components/ExerciseAccordion/ExerciseAccordion";
import * as S from "./ExerciseDiarySuccess.style";
import { useSearchParams } from "react-router-dom";
import * as Icon from "../../../../components/Icon";
import * as COLOR from "../../../../constants/color";
import DeleteModal from "../DeleteModal/DeleteModal";
import { useState } from "react";

export default function ExerciseDiarySuccess() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("date");
  const navigate = useNavigate();
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const backHandler = () => {
    navigate("/diary");
  };

  const shareHandler = () => {
    navigate("/feed/diary/share");
  };

  const deleteModalHandler = () => {
    setIsDeleteModalOpen(true);
  };

  return (
    <>
      <S.Wrapper>
        {query ? (
          <>
            <S.Icon onClick={deleteModalHandler}>
              <Icon.Trash color={`${COLOR.Gray2}`} />
            </S.Icon>
            <S.Congratulation>23년 10월 04일</S.Congratulation>
            <S.Congratulation>운동일지</S.Congratulation>
          </>
        ) : (
          <>
            <S.Congratulation>축하합니다!</S.Congratulation>
            <S.Congratulation>오늘의 운동을 완료하셨습니다!</S.Congratulation>
          </>
        )}

        <S.TimeRecord>{`오운완 1:30:58`}</S.TimeRecord>
        <S.Exercises>
          <ExerciseAccordion
            exerciseName="벤치프레스"
            exercisePart="chest"
            type="recorded"
          />
          <ExerciseAccordion
            exerciseName="스미스 머신 벤치프레스"
            exercisePart="chest"
            type="recorded"
          />
        </S.Exercises>
        <S.ButtonBox>
          {query ? (
            <Button display="block" size="large" type="fill" onClick={shareHandler}>
              뒤로가기
            </Button>
          ) : (
            <>
              <Button display="flex" size="large" type="border" onClick={backHandler}>
                내 운동일지로
              </Button>
              <Button display="flex" size="large" type="fill" onClick={shareHandler}>
                일지 공유하기
              </Button>
            </>
          )}
        </S.ButtonBox>
      </S.Wrapper>
      {isDeleteModalOpen && <DeleteModal setIsDeleteModalOpen={setIsDeleteModalOpen} />}
    </>
  );
}
