import { useEffect, useRef } from "react";
import * as S from "./CountDown.style";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  RestTimer,
  countDownState,
  restStartState,
  restTimeState,
} from "../../../../recoil/timerState";
import { setInterval, clearInterval } from "worker-timers";

export default function CountDown() {
  const countDown = useRecoilValue(countDownState);
  const timerId = useRef(0);
  const [restStart, setRestStart] = useRecoilState(restStartState);
  const [restTime, setRestTime] = useRecoilState(restTimeState);
  useEffect(() => {
    if (restStart) {
      clearInterval(timerId.current);
      timerId.current = setInterval(() => {
        if (restTime.min <= 0 && restTime.sec <= 0) {
          // console.log("d");
          clearInterval(timerId.current);
          setRestStart(false);
          setRestTime({ min: 1, sec: 0 });
        } else {
          setRestTime(() => {
            const tmpSec = Math.floor((countDown + 7000 - Date.now()) / 1000);
            const newSec = tmpSec % 60;
            const tmpMin = Math.floor(tmpSec / 60);
            const newMin = tmpMin % 60;
            const newTime: RestTimer = { min: newMin, sec: newSec };
            return newTime;
          });
        }
      }, 1000);
    }
    // return () => {};
  }, [countDown, restTime, restStart]);

  return (
    <S.TimeWrapper>
      <S.TimeText>휴식 시간</S.TimeText>
      <S.Time>
        {`${restTime.min}:`}
        {restTime.sec < 10 ? `0${restTime.sec}` : `${restTime.sec}`}
      </S.Time>
    </S.TimeWrapper>
  );
}
