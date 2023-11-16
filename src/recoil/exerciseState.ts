import { atom } from "recoil";

export const isExistState = atom<boolean>({
  key: "isExistState",
  default: false,
});

export const markState = atom<string[]>({
  key: "markState",
  default: [],
});
