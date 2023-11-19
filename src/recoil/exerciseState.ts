import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist({
  key: "localStorage", // 고유한 key 값
  storage: localStorage,
});
export const isExistState = atom<boolean>({
  key: "isExistState",
  default: false,
});

export const markState = atom<string[]>({
  key: "markState",
  default: [],
  effects_UNSTABLE: [persistAtom],
});
