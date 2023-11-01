import { ChangeEvent, useRef } from "react";
import Button from "../Button/Button";
import * as S from "./RestTimerSettingModal.style";
import { Action as RoutineAction } from "../../hooks/useRoutine";
import { Action as DayAction } from "../../hooks/useDay";
import { RestTime } from "../../hooks/useExercise";

interface Props {
  dayIndex: number;
  exerciseIndex: number;
  restTime: RestTime;
  dispatch: React.Dispatch<RoutineAction> | React.Dispatch<DayAction>;
  setIsOpenedRestTimerModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function RestTimerSettingModal({
  dayIndex,
  exerciseIndex,
  restTime,
  dispatch,
  setIsOpenedRestTimerModal,
}: Props) {
  const minutesRef = useRef<HTMLInputElement>(null);
  const seconedsRef = useRef<HTMLInputElement>(null);

  const handleIsOpendRestTimerModal = () => {
    setIsOpenedRestTimerModal(false);
  };

  const handleUpdateRestTime = (dayIndex: number, exerciseIndex: number) => {
    const newRestTime: RestTime = {
      hours: 0,
      minutes: parseInt(minutesRef.current?.value as string),
      seconds: parseInt(seconedsRef.current?.value as string),
    };
    dispatch({ type: "UPDATE_EXERCISE_REST_TIME", dayIndex, exerciseIndex, newRestTime });
    setIsOpenedRestTimerModal(false);
  };

  const handleInputText = (e: ChangeEvent<HTMLInputElement>) => {
    const minutesAfterDelete = e.target.value.replace(/^0+/, "");
    e.target.value = minutesAfterDelete;
  };

  return (
    <S.Overlay>
      <S.Wrapper>
        휴식시간
        <S.TimeWrapper>
          <S.TimeInput
            type="number"
            max={5}
            onBlur={handleInputText}
            defaultValue={restTime.minutes}
            ref={minutesRef}
          />
          분
          <S.TimeInput
            type="number"
            max={59}
            onBlur={handleInputText}
            defaultValue={restTime.seconds}
            ref={seconedsRef}
          />
          초
        </S.TimeWrapper>
        <S.ButtonBox>
          <Button
            display="flex"
            size="medium"
            type="border"
            onClick={handleIsOpendRestTimerModal}
          >
            취소
          </Button>
          <Button
            display="flex"
            size="medium"
            type="fill"
            onClick={() => handleUpdateRestTime(dayIndex, exerciseIndex)}
          >
            확인
          </Button>
        </S.ButtonBox>
      </S.Wrapper>
    </S.Overlay>
  );
}
