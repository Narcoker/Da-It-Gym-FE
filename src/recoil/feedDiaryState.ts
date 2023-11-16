import { atom } from "recoil";

export const splitSearchState = atom<string>({
  key: "splitSearchState",
  default: "무분할",
});

export const partListState = atom<Array<string>>({
  key: "bodyState",
  default: [],
});
