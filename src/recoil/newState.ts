import { atom } from "recoil";
export const testState = atom<boolean>({
  key: "newState",
  default: true,
});
