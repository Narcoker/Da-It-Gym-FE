import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist({
  key: "userInfo", // 고유한 key 값
  storage: localStorage,
});

export const userInfoState = atom({
  key: "uesrInfoState",
  default: {
    nickname: "",
    preferredSplit: "",
    userImg: "",
    introduction: "",
    healthClubName: "",
  },
  effects_UNSTABLE: [persistAtom],
});
