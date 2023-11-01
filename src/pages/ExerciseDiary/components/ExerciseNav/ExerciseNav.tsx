import { useEffect, useRef } from "react";
import * as S from "./ExerciseNav.style";
import * as Icon from "../../../../components/Icon";
import * as COLOR from "../../../../constants/color";
import { useNavigate } from "react-router";
import CountDown from "./CountDown";
import Timer from "./Timer";
import { useRecoilState, useSetRecoilState } from "recoil";
import {
  Timer as TimerType,
  pauseTimeState,
  playState,
  startTimeState,
  timerState,
} from "../../../../recoil/timerState";
import { setInterval, clearInterval } from "worker-timers";
import { useSearchParams } from "react-router-dom";

export default function ExerciseNav() {
  const navigate = useNavigate();
  const setTimer = useSetRecoilState(timerState);
  const [pauseTime, setPauseTime] = useRecoilState(pauseTimeState);
  const timerId = useRef(0);
  const [play, setPlay] = useRecoilState(playState);
  const [startTime, setStartTime] = useRecoilState(startTimeState);
  const [searchParams] = useSearchParams();
  const date = searchParams.get("date");

  const startTimer = () => {
    // 시작시간이 없는 경우 -> play
    if (play !== "play") {
      setPlay("play");
      if (play === "pause") {
        setPauseTime((prev) => {
          return { ...prev, restTime: prev.restTime + Date.now() - prev.start };
        });
      }
    }

    if (!startTime) {
      setStartTime(() => Date.now());
    }
  };

  const pauseTimer = () => {
    // console.log("pauseTimer 실행");
    if (play === "play") {
      setPlay("pause");
      setPauseTime((prev) => {
        return { ...prev, start: Date.now() };
      });
    }
  };

  const timerPlay = () => {
    timerId.current = setInterval(() => {
      setTimer(() => {
        const restTime = pauseTime.restTime;
        const tmpSec = Math.floor(Number((Date.now() - startTime - restTime) / 1000));
        const newSec = tmpSec % 60;
        const tmpMin = Math.floor(tmpSec / 60);
        const newMin = tmpMin % 60;
        const newHour = Math.floor(tmpMin / 60);
        const newTime: TimerType = { hour: newHour, min: newMin, sec: newSec };
        return newTime;
      });
    }, 1000);
  };

  useEffect(() => {
    switch (play) {
      case "play":
        timerPlay();
        break;
      case "pause":
        console.log("pause");
        clearInterval(timerId.current);
        break;
      case "stop":
        break;
    }
  }, [play]);

  const startHandler = () => {
    startTimer();
  };

  const checkHandler = () => {
    navigate(`/diary?type=success&date=${date}`);
    // 운동시간 초기화
    setStartTime(0);
    setTimer({ hour: 0, min: 0, sec: 0 });
    setPauseTime({ start: 0, end: 0, restTime: 0 });
    if (play === "play") {
      clearInterval(timerId.current);
    }
    setPlay("stop");
    // setPlay("pause");
  };

  return (
    <S.FooterNav>
      <CountDown />
      <Timer />
      <S.ButtonBox>
        <S.Icon onClick={pauseTimer}>
          <Icon.Pause size="24" color={`${COLOR.White}`} />
        </S.Icon>
        <S.StartIcon onClick={startHandler}>
          <Icon.Start size="24" color={`${COLOR.White}`} />
        </S.StartIcon>
        <S.CheckIcon onClick={checkHandler}>
          <Icon.CheckCircle size="24" color={`${COLOR.White}`} />
        </S.CheckIcon>
      </S.ButtonBox>
    </S.FooterNav>
  );
}
