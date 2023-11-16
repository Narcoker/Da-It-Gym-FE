import * as S from "./ExerciseSetComponent.style";
import * as Icon from "../Icon";
import * as COLOR from "../../constants/color";
import { ExerciseSet } from "../../hooks/useExerciseSet";
import { Action as RoutineAction } from "../../hooks/useRoutine";
import { Action as DayAction } from "../../hooks/useDay";
import { ChangeEvent } from "react";
import useRestTimer from "../../hooks/useRestTimer";
import useExerciseDiaryAPI, { ChangeHistory } from "../../api/useExerciseDiaryAPI";
import { useLocation } from "react-router";
import { useSetRecoilState } from "recoil";
import { restTimeState } from "../../recoil/timerState";
import { RestTime } from "../../hooks/useExercise";

interface Props {
  type: "title" | "record" | "recorded";
  dayIndex?: number;
  exerciseSet?: ExerciseSet;
  exerciseIndex?: number;
  exerciseSetIndex?: number;
  dispatch?: React.Dispatch<RoutineAction> | React.Dispatch<DayAction>;
  exerciseSetId?: number | null;
  restTime?: RestTime;
}

export default function ExerciseSetComponent({
  type,
  dayIndex,
  dispatch,
  exerciseIndex,
  exerciseSet,
  exerciseSetIndex,
  exerciseSetId,
  restTime,
}: Props) {
  const { startTimer } = useRestTimer();
  const location = useLocation();
  const { requestChangeHistory } = useExerciseDiaryAPI();
  const setRestTime = useSetRecoilState(restTimeState);
  const weightsCheckHandler = (
    e: ChangeEvent<HTMLInputElement>,
    dayIndex: number,
    exerciseIndex: number,
    exerciseSetIndex: number,
  ) => {
    let newWeight = e.target.value;

    dispatch!({
      type: "UPDATE_EXERSISE_SET_WEIGHTS",
      dayIndex,
      exerciseIndex,
      exerciseSetIndex,
      newWeight: parseInt(newWeight),
    });

    if (location.pathname === "/diary") {
      const payload: ChangeHistory = {
        weight: parseInt(newWeight),
        count: exerciseSet!.counts,
        completed: exerciseSet!.completed,
      };
      requestChangeHistory(exerciseSetId as number, payload);
    }

    //중량이 변하면 list의 값을 업데이트하고 앞에 0이 연속적으로 등장하거나 숫자외의 값이 나오면 입력받지 않는 함
    newWeight = newWeight.replace(/^0+/, "");
    e.target.value = newWeight;
  };

  const handleUpdateCounts = (
    e: ChangeEvent<HTMLInputElement>,
    dayIndex: number,
    exerciseIndex: number,
    exerciseSetIndex: number,
  ) => {
    let newCounts = e.target.value;
    dispatch!({
      type: "UPDATE_EXERSISE_SET_COUNTS",
      dayIndex,
      exerciseIndex,
      exerciseSetIndex,
      newCounts: parseInt(newCounts),
    });

    if (location.pathname === "/diary") {
      const payload: ChangeHistory = {
        weight: exerciseSet!.weights,
        count: parseInt(newCounts),
        completed: exerciseSet!.completed,
      };
      requestChangeHistory(exerciseSetId as number, payload);
    }

    newCounts = newCounts.replace(/^0+/, "");
    e.target.value = newCounts;
  };

  const completeHandler = (
    dayIndex: number,
    exerciseIndex: number,
    exerciseSetIndex: number,
  ) => {
    if (!exerciseSet?.completed) {
      // console.log(restTime);
      setRestTime({
        min: restTime!.minutes,
        sec: restTime!.seconds,
      });

      startTimer();
    }
    dispatch!({
      type: "UPDATE_EXERSISE_SET_COMPLETED",
      dayIndex,
      exerciseIndex,
      exerciseSetIndex,
    });

    if (location.pathname === "/diary") {
      const payload: ChangeHistory = {
        weight: exerciseSet!.weights,
        count: exerciseSet!.counts,
        completed: !exerciseSet!.completed,
      };
      requestChangeHistory(exerciseSetId as number, payload);
    }
  };

  return (
    <>
      {type === "title" && (
        <S.ExerciseHeaderWrapper>
          <S.ExerciseLeft>
            <S.Title>세트</S.Title>
            <S.Title>무게</S.Title>
            <S.Title>횟수</S.Title>
          </S.ExerciseLeft>
          <S.ExerciseRight>완료</S.ExerciseRight>
        </S.ExerciseHeaderWrapper>
      )}
      {type === "record" && (
        <S.ExerciseWrapper>
          <S.ExerciseLeft>
            <S.Record
              onClick={() => {
                console.log(exerciseSetIndex);
              }}
            >
              {exerciseSet!.order}
            </S.Record>
            <S.Record>
              <S.NumberInput
                type="number"
                defaultValue={exerciseSet!.weights}
                onBlur={(e) =>
                  weightsCheckHandler(e, dayIndex!, exerciseIndex!, exerciseSetIndex!)
                }
              />
              kg
            </S.Record>
            <S.Record>
              <S.NumberInput
                type="number"
                defaultValue={exerciseSet!.counts}
                onBlur={(e) =>
                  handleUpdateCounts(e, dayIndex!, exerciseIndex!, exerciseSetIndex!)
                }
              />
              회
            </S.Record>
          </S.ExerciseLeft>
          <S.ExerciseRight>
            <S.CheckboxHide
              type="checkbox"
              defaultChecked={exerciseSet!.completed}
              onClick={() =>
                completeHandler(dayIndex!, exerciseIndex!, exerciseSetIndex!)
              }
            />
            <S.Checkbox>
              <Icon.Check color={COLOR.White} />
            </S.Checkbox>
          </S.ExerciseRight>
        </S.ExerciseWrapper>
      )}
      {type === "recorded" && (
        <S.ExerciseWrapper>
          <S.ExerciseLeft>
            <S.Record> {exerciseSetIndex! + 1}</S.Record>
            <S.Record>{exerciseSet!.weights} kg</S.Record>
            <S.Record>{exerciseSet!.counts}회</S.Record>
          </S.ExerciseLeft>
          <S.ExerciseRight>
            <S.CheckboxHide type="checkbox" checked={exerciseSet!.completed} />
            <S.Checkbox>
              <Icon.Check color={COLOR.White} />
            </S.Checkbox>
          </S.ExerciseRight>
        </S.ExerciseWrapper>
      )}
    </>
  );
}
