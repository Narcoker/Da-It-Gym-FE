import * as S from "./ExerciseCard.style";

export interface Props {
  exerciseName: string;
  exercisePart: string;
}

export default function ExerciseCard({ exerciseName, exercisePart }: Props) {
  return (
    <S.Card>
      {exerciseName}
      <S.Part>{exercisePart}</S.Part>
    </S.Card>
  );
}
