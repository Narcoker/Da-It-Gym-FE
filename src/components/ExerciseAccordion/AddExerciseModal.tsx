import { useState } from "react";
import * as S from "./AddExerciseModal.style";
import { Action as RoutineAction } from "../../hooks/useRoutine";
import { Action as DayAction } from "../../hooks/useDay";
import ExercisePartLabel from "../ExercisePartLabel/ExercisePartLabel";
import ExerciseCard from "../ExerciseCard/ExerciseCard";
import {
  ExerciseName,
  ExercisePart,
  exercises,
  partLabels,
} from "../../constants/excercise";
import Button from "../Button/Button";

interface Props {
  dayIndex: number;
  dispatch: React.Dispatch<RoutineAction> | React.Dispatch<DayAction>;
  setIsOpenedAddExerciseModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function AddExerciseModal({
  dayIndex,
  dispatch,
  setIsOpenedAddExerciseModal,
}: Props) {
  const [selectedPart, setSelectedPart] = useState<ExercisePart>("chest");

  const handleSelected = (exercisePart: ExercisePart): void => {
    setSelectedPart(exercisePart);
  };

  const handleCreateExercise = (
    exerciseName: ExerciseName,
    exercisePart: ExercisePart,
  ) => {
    dispatch({
      type: "CREATE_EXERCISE",
      dayIndex,
      exerciseName,
      exercisePart,
    });
  };

  const handleCloseModal = () => {
    setIsOpenedAddExerciseModal(false);
  };

  return (
    <S.Overlay>
      <S.Wrapper>
        <S.PartsWrapper>
          {partLabels.map(({ name, exercisePart, type }) => (
            <S.ExercisePartLabelWrapper
              onClick={() => {
                handleSelected(exercisePart);
              }}
            >
              <ExercisePartLabel
                name={name}
                exercisePart={exercisePart}
                type={type}
                selectedPart={selectedPart}
              />
            </S.ExercisePartLabelWrapper>
          ))}
        </S.PartsWrapper>
        <S.ExercisesWrapper>
          {exercises[selectedPart].map(({ exerciseName, exercisePart }) => (
            <S.ExerciseCardWrapper
              onClick={() =>
                handleCreateExercise(
                  exerciseName as ExerciseName,
                  exercisePart as ExercisePart,
                )
              }
            >
              <ExerciseCard exerciseName={exerciseName} exercisePart={exercisePart} />
            </S.ExerciseCardWrapper>
          ))}
        </S.ExercisesWrapper>
        <S.ButtonBox>
          <Button display="flex" size="large" type="border" onClick={handleCloseModal}>
            닫기
          </Button>
        </S.ButtonBox>
      </S.Wrapper>
    </S.Overlay>
  );
}
