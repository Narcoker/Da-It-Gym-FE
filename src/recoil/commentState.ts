import { atom } from "recoil";

// 댓글 대상
export const replyTargetState = atom<string>({
  key: "replyTargetState",
  default: "",
});
// 부모 댓글 Id 상태값
export const commentIdState = atom<number>({
  key: "commentIdState",
  default: -1,
});

export const commentTextState = atom<string>({
  key: "commentTextState",
  default: "",
});
