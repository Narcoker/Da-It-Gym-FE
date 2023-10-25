import { useState } from "react";
import ExerciseAccordion from "../ExerciseAccordion/ExerciseAccordion";
import * as S from "./RoutineAccordion.style";
import * as Icon from "../Icon";

export interface Props {
  routineName: string;
  exerciseName: string;
  exercisePart: string;
  type: "record" | "recorded";
}

export default function RoutineAccordion({
  routineName,
  exerciseName,
  exercisePart,
  type,
}: Props) {
  const [isSpread, setIsSpread] = useState(false);

  const spreadHandler = () => {
    setIsSpread((prev) => !prev);
  };

  return (
    <S.RoutineWrapper>
      <S.RoutineHeader onClick={spreadHandler}>
        <S.Icon isSpread={isSpread}>
          <Icon.DownArrow size="24" />
        </S.Icon>
        {routineName}
      </S.RoutineHeader>
      <S.Exercises>
        {isSpread && (
          <ExerciseAccordion
            exerciseName={exerciseName}
            exercisePart={exercisePart}
            type={type}
          />
        )}
      </S.Exercises>
    </S.RoutineWrapper>
  );
}
