import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist({
  key: "userInfo", // 고유한 key 값
  storage: localStorage,
});

export interface UserInfo {
  nickname: string;
  userImg: string;
  preferredSplit: string;
  introduction: string;
  healthClubName: string;
}

export const userInfoState = atom<UserInfo>({
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
