import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist({
  key: "userInfo", // 고유한 key 값
  storage: localStorage,
});

export interface UserInfo {
  nickname: string;
  userProfileImgUrl: string;
  preferredSplit: string;
  introduction: string;
  healthClubName: string;
  role: "일반" | "관리자" | "트레이너";
  follower?: boolean;
}

export const userInfoState = atom<UserInfo>({
  key: "uesrInfoState",
  default: {
    nickname: "",
    preferredSplit: "",
    userProfileImgUrl: "",
    introduction: "",
    healthClubName: "",
    role: "일반",
    follower: false,
  },
  effects_UNSTABLE: [persistAtom],
});
