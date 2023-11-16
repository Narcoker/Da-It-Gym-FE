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
  const min = parseInt(localStorage.getItem("min") as string);
  const sec = parseInt(localStorage.getItem("sec") as string);

  useEffect(() => {
    if (restStart) {
      clearInterval(timerId.current);
      // console.log(restTime);
      // console.log(rest);
      const rest = (min * 60 + sec) * 1000 + 2000;
      timerId.current = setInterval(() => {
        if (restTime.min <= 0 && restTime.sec <= 0) {
          // console.log("d");
          clearInterval(timerId.current);
          setRestStart(false);

          setRestTime({ min: min, sec: sec });
        } else {
          setRestTime(() => {
            const tmpSec = Math.floor((countDown + rest - Date.now()) / 1000);
            // const tmpSec = Math.floor(r / 1000);
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
