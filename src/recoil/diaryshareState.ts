import { atom } from "recoil";

// 분할 정보
export const splitState = atom<string>({
  key: "splitState",
  default: "무분할",
});
// 이미지 리스트 (FormData)
export const fileListState = atom<FormData>({
  key: "fileListState",
  default: new FormData(),
});
