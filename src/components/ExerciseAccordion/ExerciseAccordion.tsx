import { useState } from "react";
import * as S from "./ExerciseAccordion.style";
import Button from "../Button/Button";
import ExerciseSet from "../ExerciseSet/ExerciseSet";
import * as Icon from "../Icon";

interface Props {
  exerciseName: string;
  exercisePart: string;
  type: "record" | "recorded";
}

interface ExerciseTypes {
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

export interface ExerciseSetType {
  setNum: number;
  weights: number;
  counts: number;
  completed: boolean;
}

// exerciseName에는 운동이름을 exercisePart에는 운동부위 코드를 입력하면됩니다.
// 각각 "벤치프레스" "chest"를 입력하면 벤치프레스 가슴 이라는 타이틀이 나오게 됩니다.
// type 은 record와 recorded로 나뉘는데 record는 현재 작성중인 일지일 때 추가 삭제 버튼이 생기고
// recorded는 추가 삭제 버튼이 없이 기록만 보는데 사용됩니다.
export default function ExerciseAccordion({ exerciseName, exercisePart, type }: Props) {
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

  const [isSpread, setSpread] = useState(false);
  const [exerciseSetList, setExerciseSetList] = useState<ExerciseSetType[]>([
    {
      setNum: 1,
      weights: 120,
      counts: 12,
      completed: true,
    },
  ]);

  const spreadHandler = () => {
    setSpread((prev) => !prev);
  };

  const exerciseSetRemoveHandler = () => {
    if (exerciseSetList.length > 0) {
      setExerciseSetList((prev) => [...prev.slice(0, -1)]);
    }
  };
  const exerciseSetAddHandler = () => {
    if (exerciseSetList.length > 0) {
      const recent = exerciseSetList.slice(-1);
      const tmpSet: ExerciseSetType = {
        setNum: recent[0].setNum + 1,
        weights: recent[0].weights,
        counts: recent[0].counts,
        completed: false,
      };
      setExerciseSetList((prev) => [...prev, tmpSet]);
    } else {
      const tmpSet: ExerciseSetType = {
        setNum: 1,
        weights: 0,
        counts: 0,
        completed: false,
      };
      setExerciseSetList([tmpSet]);
    }
  };

  return (
    <S.Accordion>
      <S.AccordionHeader>
        <S.LeftHeader>
          <S.Icon onClick={spreadHandler} isSpread={isSpread}>
            <Icon.DownArrow size="24" />
          </S.Icon>
          {exerciseName}
          <S.Part>{partName[exercisePart]}</S.Part>
        </S.LeftHeader>
        <S.RightHeader>휴식시간 변경</S.RightHeader>
      </S.AccordionHeader>
      <S.ExerciseSet isSpread={isSpread}>
        {isSpread && (
          <>
            <ExerciseSet type="title" />
            {exerciseSetList.map((exerciseSet, idx) => (
              <ExerciseSet
                type="record"
                key={idx}
                idx={idx}
                exerciseSet={exerciseSet}
                exerciseSetList={exerciseSetList}
                setExerciseSetList={setExerciseSetList}
              />
            ))}
          </>
        )}
      </S.ExerciseSet>
      {isSpread && type === "record" && (
        <S.AccordionFooter>
          <Button
            display="flex"
            type="border"
            size="large"
            onClick={exerciseSetRemoveHandler}
          >
            세트 삭제
          </Button>
          <Button display="flex" type="fill" size="large" onClick={exerciseSetAddHandler}>
            세트 추가
          </Button>
        </S.AccordionFooter>
      )}
    </S.Accordion>
  );
}
