import { useState } from "react";
import * as S from "./ExerciseAccordion.style";
import Button from "../Button/Button";
import ExerciseSet from "../ExerciseSetComponent/ExerciseSetComponent";
import * as Icon from "../Icon";
import RestTimerSettingModal from "./RestTimerSettingModal";
import { Exercise } from "../../hooks/useExercise";
import { Action as RoutineAction } from "../../hooks/useRoutine";
import { Action as DayAction } from "../../hooks/useDay";
import AddExerciseModal from "./AddExerciseModal";

export interface Props {
  exercises: Exercise[];
  dayIndex: number;
  dispatch: React.Dispatch<RoutineAction> | React.Dispatch<DayAction>;
  type: "record" | "recorded";
}

// exerciseName에는 운동이름을 exercisePart에는 운동부위 코드를 입력하면됩니다.
// 각각 "벤치프레스" "chest"를 입력하면 벤치프레스 가슴 이라는 타이틀이 나오게 됩니다.
// type 은 record와 recorded로 나뉘는데 record는 현재 작성중인 일지일 때 추가 삭제 버튼이 생기고
// recorded는 추가 삭제 버튼이 없이 기록만 보는데 사용됩니다.
export default function ExerciseAccordion({
  exercises,
  dayIndex,
  dispatch,
  type,
}: Props) {
  const [isOpenedRestTimerModal, setIsOpenedRestTimerModal] = useState(false);
  const [isOpendAddExerciseModal, setIsOpenedAddExerciseModal] = useState(false);

  const handleIsOpendRestTimeModal = () => {
    setIsOpenedRestTimerModal(true);
  };

  const handleIsOpendAddExerciseModal = () => {
    setIsOpenedAddExerciseModal(true);
  };

  const handleSpread = (dayIndex: number, exerciseIndex: number): void => {
    dispatch({ type: "UPDATE_EXERCISES_SETS_IS_SPREAD", dayIndex, exerciseIndex });
  };

  const handleDeleteExersizeSet = (dayIndex: number, exerciseIndex: number): void => {
    if (exercises[exerciseIndex].exerciseSets.length > 0) {
      dispatch({ type: "DELETE_EXERSISE_SET", dayIndex, exerciseIndex });
    }
  };

  const handleCreateExersizeSet = (dayIndex: number, exerciseIndex: number): void => {
    dispatch({ type: "CREATE_EXERSISE_SET", dayIndex, exerciseIndex });
  };

  const handleDeleteExercise = (dayIndex: number): void => {
    dispatch({ type: "DELETE_EXERCISE", dayIndex });
  };

  return (
    <>
      {exercises.map((exercise, exerciseIndex) => (
        <S.Accordion key={`Day ${dayIndex}-${exerciseIndex}`}>
          <S.AccordionHeader>
            <S.LeftHeader>
              <S.Icon
                onClick={() => handleSpread(dayIndex, exerciseIndex)}
                spread={exercise.spread}
              >
                <Icon.DownArrow size="24" />
              </S.Icon>
              {exercise.name}
              <S.Part>{exercise.part}</S.Part>
            </S.LeftHeader>
            {type === "record" && (
              <S.RightHeader onClick={handleIsOpendRestTimeModal}>
                휴식시간 변경
              </S.RightHeader>
            )}
          </S.AccordionHeader>
          <S.ExerciseSet spread={exercise.spread}>
            {exercise.spread && (
              <>
                <ExerciseSet type="title" />
                {exercise.exerciseSets.map((exerciseSet, index) => (
                  <ExerciseSet
                    key={index}
                    type={type}
                    exerciseSet={exerciseSet}
                    dayIndex={dayIndex}
                    exerciseIndex={exerciseIndex}
                    exerciseSetIndex={index}
                    dispatch={dispatch}
                  />
                ))}
              </>
            )}
          </S.ExerciseSet>
          {exercise.spread && type === "record" && (
            <S.AccordionFooter>
              <Button
                display="flex"
                type="border"
                size="medium"
                onClick={() => handleDeleteExersizeSet(dayIndex, exerciseIndex)}
              >
                세트 삭제
              </Button>
              <Button
                display="flex"
                type="fill"
                size="medium"
                onClick={() => handleCreateExersizeSet(dayIndex, exerciseIndex)}
              >
                세트 추가
              </Button>
            </S.AccordionFooter>
          )}

          {isOpenedRestTimerModal && (
            <RestTimerSettingModal
              dayIndex={dayIndex}
              exerciseIndex={exerciseIndex}
              restTime={exercise.restTime}
              dispatch={dispatch}
              setIsOpenedRestTimerModal={setIsOpenedRestTimerModal}
            />
          )}
        </S.Accordion>
      ))}
      {type === "record" && (
        <S.FunctionsContainer>
          <Button
            display="flex"
            type="border"
            size="medium"
            onClick={() => handleDeleteExercise(dayIndex)}
          >
            운동 삭제
          </Button>

          <Button
            display="flex"
            type="fill"
            size="medium"
            onClick={handleIsOpendAddExerciseModal}
          >
            운동 추가
          </Button>
        </S.FunctionsContainer>
      )}

      {isOpendAddExerciseModal && (
        <AddExerciseModal
          dayIndex={dayIndex}
          dispatch={dispatch}
          setIsOpenedAddExerciseModal={setIsOpenedAddExerciseModal}
        />
      )}
    </>
  );
}
