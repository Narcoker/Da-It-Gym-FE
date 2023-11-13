import { atom } from "recoil";

export const signupState = atom<string>({
  key: "signupState",
  default: "",
});

export const submitNicknameState = atom<string>({
  key: "submitNicknameState",
  default: "",
});

export const regCheckState = atom<boolean>({
  key: "regCheckState",
  default: false,
});
