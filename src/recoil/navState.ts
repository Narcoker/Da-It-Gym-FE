import { atom } from "recoil";
export const sideMenuState = atom<boolean>({
  key: "sideMenuState",
  default: false,
});
