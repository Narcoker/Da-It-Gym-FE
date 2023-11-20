export type ExercisePart =
  | "가슴"
  | "등"
  | "어깨"
  | "하체"
  | "이두"
  | "삼두"
  | "복근"
  | "유산소";

export interface partLabel {
  exercisePart: ExercisePart;
  type: "part" | "exercise";
}

export const partLabels: partLabel[] = [
  {
    exercisePart: "가슴",
    type: "part",
  },
  {
    exercisePart: "등",
    type: "part",
  },
  {
    exercisePart: "어깨",
    type: "part",
  },
  {
    exercisePart: "이두",
    type: "part",
  },
  {
    exercisePart: "삼두",
    type: "part",
  },
  {
    exercisePart: "복근",
    type: "part",
  },
  {
    exercisePart: "유산소",
    type: "part",
  },
  {
    exercisePart: "하체",
    type: "part",
  },
];
