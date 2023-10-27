import * as S from "./Timer.style";
import { useRecoilValue } from "recoil";
import { timerState } from "../../../../recoil/timerState";

export default function Timer() {
  const timer = useRecoilValue(timerState);
  return (
    <S.TimeWrapper>
      <S.TimeText>운동 시간</S.TimeText>
      <S.Time>
        {`${timer.hour}:`}
        {timer.min < 10 ? `0${timer.min}:` : `${timer.min}:`}
        {timer.sec < 10 ? `0${timer.sec}` : `${timer.sec}`}
      </S.Time>
    </S.TimeWrapper>
  );
}
