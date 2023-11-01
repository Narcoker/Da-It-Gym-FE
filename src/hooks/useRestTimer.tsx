import { useRecoilState, useSetRecoilState } from "recoil";
import { countDownState, restStartState } from "../recoil/timerState";

export default function useRestTimer() {
  const setCountDown = useSetRecoilState(countDownState);
  const [restStart, setRestStart] = useRecoilState(restStartState);

  // 타이머 관련 함수
  const startTimer = () => {
    setCountDown(Date.now());
    if (!restStart) {
      // console.log("restStart");
      setRestStart(true);
    }
  };

  return { startTimer };
}
