import { useState } from "react";
import ExerciseAccordion from "../ExerciseAccordion/ExerciseAccordion";
import * as S from "./RoutineAccordion.style";

interface Props {
  routineName: string;
}

export default function RoutineAccordion({ routineName }: Props) {
  const [isSpread, setIsSpread] = useState(false);

  const spreadHandler = () => {
    setIsSpread((prev) => !prev);
  };

  return (
    <S.RoutineWrapper>
      <S.RoutineHeader onClick={spreadHandler}>
        <S.Icon />
        {routineName}
      </S.RoutineHeader>
      {isSpread && (
        <ExerciseAccordion exerciseName="벤치프레스" exercisePart="chest" type="record" />
      )}
    </S.RoutineWrapper>
  );
}
