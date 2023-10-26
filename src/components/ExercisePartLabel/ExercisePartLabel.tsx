import * as S from "./ExercisePartLabel.style";
export interface Props {
  name: string;
  exercisePart: string;
  selectedPart?: string;
  type: "part" | "exercise";
}

// name은 운동의 이름을 나타냅니다
// exercisePart는 등, 가슴, 어깨, 하체, 이두, 삼두, 복근, 유산소 처럼 어느 부위의 운동인지 나타냅니다.
// type은 부위와 운동 태그를 나누는 역할을 합니다. type이 part이면 등, 가슴, 유산소 처럼 선택할 수 있는 태그를 말합니다.
// exercises라면 운동을 선택했을 때 담기는 태그를 의미합니다.
export default function ExercisePartLabel({
  name,
  exercisePart,
  type,
  selectedPart,
}: Props) {
  return (
    <>
      {type === "part" && (
        <S.Label htmlFor={exercisePart}>
          <S.Radio
            type="radio"
            id={exercisePart}
            name="part"
            checked={exercisePart === selectedPart}
          />
          <S.PartLabel>{name}</S.PartLabel>
        </S.Label>
      )}
      {type === "exercise" && <S.ExerciseLabel id={exercisePart}>{name}</S.ExerciseLabel>}
    </>
  );
}
