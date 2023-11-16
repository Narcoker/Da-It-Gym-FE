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

// export const getExcercisePartName = (exercisePart: ExercisePart) => {
//   switch (exercisePart) {
//     case "chest":
//       return "가슴";
//     case "back":
//       return "등";
//     case "shoulders":
//       return "어깨";
//     case "legs":
//       return "하체";
//     case "biceps":
//       return "이두";
//     case "triceps":
//       return "삼두";
//     case "abs":
//       return "복근";
//     case "cardio":
//       return "유산소";
//   }
// };

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
];
