import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

export interface Timer {
  hour: number;
  min: number;
  sec: number;
}

export interface RestTimer {
  min: number;
  sec: number;
}

export interface PauseTimer {
  start: number;
  end: number;
  restTime: number;
}

export type Play = "play" | "pause" | "stop";

const { persistAtom } = recoilPersist({
  key: "localStorage", // 고유한 key 값
  storage: localStorage,
});

export const timerState = atom<Timer>({
  key: "timerState",
  default: {
    hour: 0,
    min: 0,
    sec: 0,
  },
  effects_UNSTABLE: [persistAtom],
});

export const pauseTimeState = atom<PauseTimer>({
  key: "pauseTimeState",
  default: {
    start: 0,
    end: 0,
    restTime: 0,
  },
  effects_UNSTABLE: [persistAtom],
});

export const countDownState = atom<number>({
  key: "countDownState",
  default: 0,
  effects_UNSTABLE: [persistAtom],
});

export const isTimerStartState = atom<boolean>({
  key: "isTimerStartState",
  default: false,
});

export const startTimeState = atom<number>({
  key: "startTimeState",
  default: 0,
  effects_UNSTABLE: [persistAtom],
});

export const playState = atom<Play>({
  key: "playState",
  default: "stop",
  effects_UNSTABLE: [persistAtom],
});

export const restStartState = atom<boolean>({
  key: "restStartState",
  default: false,
  effects_UNSTABLE: [persistAtom],
});

export const restTimeState = atom<RestTimer>({
  key: "restTimeState",
  default: {
    min: 0,
    sec: 0,
  },
  effects_UNSTABLE: [persistAtom],
});
