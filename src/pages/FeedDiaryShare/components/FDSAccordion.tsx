import { useEffect, useState } from "react";
import * as S from "./FDSAccordion.style";
import * as Icon from "../../../components/Icon";
import { Action, Day } from "../../../hooks/useDay";
import ExerciseAccordion from "../../../components/ExerciseAccordion/ExerciseAccordion";
const tmpDay: Day = {
  id: 21345,
  order: 1, // 순서, dayNum -> order o
  dayDate: new Date(), // 추가 o
  exerciseTime: {
    // 추가, 운동별 운동시간 o
    hours: 0, // 무조건 0
    minutes: 0, // 무조건 0
    seconds: 0, // 무조건 0
  },
  completed: false, // 무조건 false, 추가 o
  spread: false, // 무조건 false, isSpread -> spread o
  exercises: [
    {
      id: 343567,
      order: 0, //exerciseNum -> order o
      name: "벤치 프레스",
      part: "가슴",
      restTime: {
        hours: 0, //무조건 0, 추가 o
        minutes: 1,
        seconds: 0,
      },
      spread: false, // 무조건 false isSpread -> spread o
      exerciseSets: [
        {
          id: 987654,
          order: 1, // setNums -> order o
          weights: 10,
          counts: 1,
          completed: false,
        },
        {
          id: 987654,
          order: 1, // setNums -> order o
          weights: 10,
          counts: 1,
          completed: false,
        },
      ],
    },
    {
      id: 343567,
      order: 0, //exerciseNum -> order o
      name: "데드리프트",
      part: "등",
      restTime: {
        hours: 0, //무조건 0, 추가 o
        minutes: 1,
        seconds: 0,
      },
      spread: false, // 무조건 false isSpread -> spread o
      exerciseSets: [
        {
          id: 987654,
          order: 1, // setNums -> order o
          weights: 10,
          counts: 1,
          completed: false,
        },
        {
          id: 987654,
          order: 1, // setNums -> order o
          weights: 10,
          counts: 1,
          completed: false,
        },
        {
          id: 987654,
          order: 1, // setNums -> order o
          weights: 10,
          counts: 1,
          completed: false,
        },
      ],
    },
  ],
};
interface Props {
  day: Day;
  dayDispatch: React.Dispatch<Action>;
}
function FDSAccordion({ day, dayDispatch }: Props) {
  const [isSpread, setIsSpread] = useState(true);
  const handleSpread = () => {
    setIsSpread((prev) => !prev);
  };
  const handleUpdateDiary = (newDay: Day): void => {
    dayDispatch({ type: "CREATE_DAY", newDay });
  };
  useEffect(() => {
    handleUpdateDiary(tmpDay);
  }, []);
  return (
    <S.FDSAccoWrapper>
      <S.FDSAccoBox>
        <S.IconBox>
          <S.UpIcon isSpread={isSpread} onClick={handleSpread}>
            <Icon.UpArrow size="24" />
          </S.UpIcon>
          {isSpread ? <> 모두 접기 </> : <> 모두 열기 </>}
        </S.IconBox>
        <S.Line />
        {isSpread && (
          <S.ExerciseAccBox>
            <S.ExerciseAcc>
              <ExerciseAccordion
                exercises={day.exercises}
                dayIndex={0}
                dispatch={dayDispatch}
                type="recorded"
              />
            </S.ExerciseAcc>
          </S.ExerciseAccBox>
        )}
      </S.FDSAccoBox>
    </S.FDSAccoWrapper>
  );
}

export default FDSAccordion;
