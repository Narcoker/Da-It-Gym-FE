import { useSearchParams } from "react-router-dom";
import ExerciseDiaryDefault from "./components/ExerciseDiaryDefault/ExerciseDiaryDefault";
import ExerciseNav from "./components/ExerciseNav/ExerciseNav";
import ExerciseDiarySuccess from "./components/ExerciseDiarySuccess/ExerciseDiarySuccess";
import Nav from "../../components/Nav/Nav";
import { useEffect } from "react";
import useExerciseDiaryAPI from "../../api/useExerciseDiaryAPI";
import { useDay } from "../../hooks/useDay";
import { useRecoilState, useRecoilValue } from "recoil";
import { isExistState, markState } from "../../recoil/exerciseState";

export default function ExerciseDiary() {
  const [searchParams] = useSearchParams();
  const date = searchParams.get("date");
  const [isExist, setIsExist] = useRecoilState(isExistState);
  const { requestJournalDetail } = useExerciseDiaryAPI();
  const [day, dayDispatch] = useDay();
  const mark = useRecoilValue(markState);
  useEffect(() => {
    if (mark.includes(date as string)) {
      if (date) {
        requestJournalDetail(date as string, dayDispatch, setIsExist);
      }
    }
  }, [date, isExist]);
  return (
    <>
      {date && day.completed ? (
        <>
          <ExerciseDiarySuccess
            day={day}
            dayDispatch={dayDispatch}
            journalId={day.id as number}
          />
          <Nav type="home" />
        </>
      ) : (
        <>
          <ExerciseDiaryDefault day={day} dayDispatch={dayDispatch} />
          <ExerciseNav journalId={day.id as number} />
        </>
      )}
    </>
  );
}
