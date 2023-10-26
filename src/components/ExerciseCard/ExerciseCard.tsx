import * as S from "./ExerciseCard.style";

export interface Props {
  exerciseName: string;
  exercisePart: string;
}

export interface ExerciseTypes {
  chest: string;
  back: string;
  shoulders: string;
  legs: string;
  biceps: string;
  triceps: string;
  abs: string;
  cardio: string;
  [key: string]: string;
}
export default function ExerciseCard({ exerciseName, exercisePart }: Props) {
  const partName: ExerciseTypes = {
    chest: "가슴",
    back: "등",
    shoulders: "어깨",
    legs: "하체",
    biceps: "이두",
    triceps: "삼두",
    abs: "복근",
    cardio: "유산소",
  };

  return (
    <S.Card>
      {exerciseName}
      <S.Part>{partName[exercisePart]}</S.Part>
    </S.Card>
  );
}
