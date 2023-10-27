import { ChangeEvent, useRef } from "react";
import Button from "../Button/Button";
import * as S from "./RestTimerSettingModal.style";

interface Props {
  setRestTimerModal: React.Dispatch<React.SetStateAction<string>>;
}

export default function RestTimerSettingModal({ setRestTimerModal }: Props) {
  const min = useRef<HTMLInputElement>(null);
  const sec = useRef<HTMLInputElement>(null);
  const cancelHandler = () => {
    setRestTimerModal("");
  };

  const restTimeHandler = () => {
    const restTime = parseInt(min.current!.value) * 60 + parseInt(sec.current!.value);
    localStorage.setItem("countDown", String(restTime));
    setRestTimerModal("");
  };

  const blurHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value.replace(/^0+/, "");
    if (!newValue) {
      e.target.value = "0";
    } else {
      e.target.value = newValue;
    }
  };
  return (
    <S.Overlay>
      <S.Wrapper>
        휴식시간
        <S.TimeWrapper>
          <S.TimeInput
            type="number"
            max={5}
            ref={min}
            onBlur={blurHandler}
            defaultValue={0}
          />
          분
          <S.TimeInput
            type="number"
            max={59}
            ref={sec}
            onBlur={blurHandler}
            defaultValue={0}
          />
          초
        </S.TimeWrapper>
        <S.ButtonBox>
          <Button display="flex" size="medium" type="border" onClick={cancelHandler}>
            취소
          </Button>
          <Button display="flex" size="medium" type="fill" onClick={restTimeHandler}>
            확인
          </Button>
        </S.ButtonBox>
      </S.Wrapper>
    </S.Overlay>
  );
}
