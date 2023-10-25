import { ChangeEvent } from "react";
import { ExerciseSetType } from "../ExerciseAccordion/ExerciseAccordion";
import * as S from "./ExerciseSet.style";
import * as Icon from "../Icon";
import * as COLOR from "../../constants/color";

interface Props {
  type: "title" | "record" | "recorded";
  exerciseSet?: ExerciseSetType;
  idx?: number;
  exerciseSetList?: ExerciseSetType[];
  setExerciseSetList?: React.Dispatch<React.SetStateAction<ExerciseSetType[]>>;
}

export default function ExerciseSet({
  type,
  exerciseSet,
  idx,
  exerciseSetList,
  setExerciseSetList,
}: Props) {
  //중량이 변하면 list의 값을 업데이트하고 앞에 0이 연속적으로 등장하거나 숫자외의 값이 나오면 입력받지 않는 함
  const weightsCheckHandler = (e: ChangeEvent<HTMLInputElement>) => {
    let newValue = e.target.value;
    // console.log(newValue);
    if (newValue && idx && setExerciseSetList) {
      const newSet: ExerciseSetType = {
        setNum: exerciseSetList!.slice(idx, idx + 1)[0].setNum,
        weights: parseInt(newValue),
        counts: exerciseSetList!.slice(idx, idx + 1)[0].counts,
        completed: exerciseSetList!.slice(idx, idx + 1)[0].completed,
      };

      setExerciseSetList([
        ...exerciseSetList!.slice(0, idx),
        newSet,
        ...exerciseSetList!.slice(idx + 1),
      ]);
    }

    newValue = newValue.replace(/^0+/, "");
    if (!newValue && idx) {
      e.target.value = String(exerciseSetList!.slice(idx, idx + 1)[0].weights);
    } else {
      e.target.value = newValue;
    }
  };

  const countsCheckHandler = (e: ChangeEvent<HTMLInputElement>) => {
    let newValue = e.target.value;
    if (newValue && idx && setExerciseSetList) {
      const newSet: ExerciseSetType = {
        setNum: exerciseSetList!.slice(idx, idx + 1)[0].setNum,
        weights: exerciseSetList!.slice(idx, idx + 1)[0].weights,
        counts: parseInt(newValue),
        completed: exerciseSetList!.slice(idx, idx + 1)[0].completed,
      };

      setExerciseSetList([
        ...exerciseSetList!.slice(0, idx),
        newSet,
        ...exerciseSetList!.slice(idx + 1),
      ]);
    }
    newValue = newValue.replace(/^0+/, "");
    if (!newValue && idx) {
      e.target.value = String(exerciseSetList!.slice(idx, idx + 1)[0].counts);
    } else {
      e.target.value = newValue;
    }
  };

  const completeHandler = () => {
    console.log(exerciseSetList);
    if (setExerciseSetList) {
      const newSet: ExerciseSetType = {
        setNum: exerciseSetList!.slice(idx, idx! + 1)[0].setNum,
        weights: exerciseSetList!.slice(idx, idx! + 1)[0].weights,
        counts: exerciseSetList!.slice(idx, idx! + 1)[0].counts,
        completed: !exerciseSetList!.slice(idx, idx! + 1)[0].completed,
      };
      // console.log(newSet);
      setExerciseSetList([
        ...exerciseSetList!.slice(0, idx),
        newSet,
        ...exerciseSetList!.slice(idx! + 1),
      ]);
    }
    // console.log(exerciseSetList);
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
            <S.Record>{exerciseSet?.setNum}</S.Record>
            <S.Record>
              <S.NumberInput
                type="number"
                defaultValue={exerciseSet?.weights}
                onBlur={weightsCheckHandler}
              />
              kg
            </S.Record>
            <S.Record>
              <S.NumberInput
                type="number"
                defaultValue={exerciseSet?.counts}
                onBlur={countsCheckHandler}
              />
              회
            </S.Record>
          </S.ExerciseLeft>
          <S.ExerciseRight onClick={completeHandler}>
            <S.CheckboxHide type="checkbox" defaultChecked={exerciseSet?.completed} />
            <S.Checkbox>
              <Icon.Check color={COLOR.White} />
            </S.Checkbox>
          </S.ExerciseRight>
        </S.ExerciseWrapper>
      )}
      {type === "recorded" && (
        <S.ExerciseWrapper>
          <S.ExerciseLeft>
            <S.Record>{exerciseSet?.setNum}</S.Record>
            <S.Record>{exerciseSet?.weights} kg</S.Record>
            <S.Record>{exerciseSet?.counts}회</S.Record>
          </S.ExerciseLeft>
          <S.ExerciseRight>
            <S.CheckboxHide type="checkbox" checked={exerciseSet?.completed} />
            <S.Checkbox>
              <Icon.Check color={COLOR.White} />
            </S.Checkbox>
          </S.ExerciseRight>
        </S.ExerciseWrapper>
      )}
    </>
  );
}
