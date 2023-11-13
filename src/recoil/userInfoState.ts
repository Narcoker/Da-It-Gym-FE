import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist({
  key: "localStorage", // 고유한 key 값
  storage: localStorage,
});

export const userInfoState = atom({
  key: "uesrInfoState",
  default: {
    nickname: "",
    userImg: "",
    preferredSplit: "",
  },
  effects_UNSTABLE: [persistAtom],
});
