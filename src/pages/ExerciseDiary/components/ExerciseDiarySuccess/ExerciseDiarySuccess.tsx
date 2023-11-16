import { useNavigate } from "react-router";
import Button from "../../../../components/Button/Button";
import ExerciseAccordion from "../../../../components/ExerciseAccordion/ExerciseAccordion";
import * as S from "./ExerciseDiarySuccess.style";
import { useSearchParams } from "react-router-dom";
import * as Icon from "../../../../components/Icon";
import * as COLOR from "../../../../constants/color";
import DeleteModal from "../DeleteModal/DeleteModal";
import { useState } from "react";
import moment from "moment";
import { Action, Day } from "../../../../hooks/useDay";

interface Props {
  day: Day;
  dayDispatch: React.Dispatch<Action>;
  journalId: number;
}

export default function ExerciseDiarySuccess({ day, dayDispatch, journalId }: Props) {
  const [searchParams] = useSearchParams();
  const date = searchParams.get("date");
  const navigate = useNavigate();
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const {
    // completed,
    dayDate,
    exerciseTime: { hours, minutes, seconds },
    exercises,
    // id,
    // order,
    // spread,
  } = day;
  const backHandler = () => {
    navigate(-1);
  };

  const shareHandler = () => {
    navigate("/feed/diary/share");
  };

  const deleteModalHandler = () => {
    setIsDeleteModalOpen(true);
  };

  const [yy, mm, dd] = String(dayDate)?.split("-") as string[];

  return (
    <>
      <S.Wrapper>
        {date === moment(new Date()).format("YYYY-MM-DD") && (
          <>
            <S.Congratulation>축하합니다!</S.Congratulation>
            <S.Congratulation>오늘의 운동을 완료하셨습니다!</S.Congratulation>
          </>
        )}
        <S.Icon onClick={deleteModalHandler}>
          <Icon.Trash color={`${COLOR.Gray2}`} />
        </S.Icon>
        <S.Congratulation>{`${yy}년 ${mm}월 ${dd}일`}</S.Congratulation>
        <S.Congratulation>운동일지</S.Congratulation>

        <S.TimeRecord>{`오운완 ${hours}:${minutes}:${seconds}`}</S.TimeRecord>
        <S.Exercises>
          <ExerciseAccordion
            exercises={exercises}
            dayIndex={0}
            dispatch={dayDispatch}
            type="recorded"
          />
        </S.Exercises>
        <S.ButtonBox>
          {date === moment(new Date()).format("YYYY-MM-DD") ? (
            <>
              <Button display="flex" size="large" type="border" onClick={backHandler}>
                내 운동일지로
              </Button>
              <Button display="flex" size="large" type="fill" onClick={shareHandler}>
                일지 공유하기
              </Button>
            </>
          ) : (
            <Button display="block" size="medium" type="fill" onClick={backHandler}>
              뒤로
            </Button>
          )}
        </S.ButtonBox>
      </S.Wrapper>
      {isDeleteModalOpen && (
        <DeleteModal setIsDeleteModalOpen={setIsDeleteModalOpen} journalId={journalId} />
      )}
    </>
  );
}
