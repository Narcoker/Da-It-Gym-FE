export type ExercisePart =
  | "chest"
  | "back"
  | "shoulders"
  | "legs"
  | "biceps"
  | "triceps"
  | "abs"
  | "cardio";

export type ExerciseName =
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
  name: ExerciseName;
  type: "part" | "exercise";
}

export const getExcercisePartName = (exercisePart: ExercisePart) => {
  switch (exercisePart) {
    case "chest":
      return "가슴";
    case "back":
      return "등";
    case "shoulders":
      return "어깨";
    case "legs":
      return "하체";
    case "biceps":
      return "이두";
    case "triceps":
      return "삼두";
    case "abs":
      return "복근";
    case "cardio":
      return "유산소";
  }
};

export const partLabels: partLabel[] = [
  {
    name: "가슴",
    exercisePart: "chest",
    type: "part",
  },
  {
    name: "등",
    exercisePart: "back",
    type: "part",
  },
  {
    name: "어깨",
    exercisePart: "shoulders",
    type: "part",
  },
  {
    name: "하체",
    exercisePart: "legs",
    type: "part",
  },
  {
    name: "이두",
    exercisePart: "biceps",
    type: "part",
  },
  {
    name: "삼두",
    exercisePart: "triceps",
    type: "part",
  },
  {
    name: "복근",
    exercisePart: "abs",
    type: "part",
  },
  {
    name: "유산소",
    exercisePart: "cardio",
    type: "part",
  },
];

export const exercises = {
  chest: [
    {
      exerciseName: "푸쉬업",
      exercisePart: "chest",
    },
    {
      exerciseName: "벤치 프레스",
      exercisePart: "chest",
    },
    {
      exerciseName: "인클라인 벤치 프레스",
      exercisePart: "chest",
    },
    {
      exerciseName: "딥스",
      exercisePart: "chest",
    },
    {
      exerciseName: "케이블 크로스 오버",
      exercisePart: "chest",
    },
  ],
  back: [
    {
      exerciseName: "풀 업",
      exercisePart: "back",
    },
    {
      exerciseName: "랫 풀 다운",
      exercisePart: "back",
    },
    {
      exerciseName: "덤벨 로우",
      exercisePart: "back",
    },
    {
      exerciseName: "벤트 오버 로우",
      exercisePart: "back",
    },
    {
      exerciseName: "티바 로우",
      exercisePart: "back",
    },
  ],
  shoulders: [
    {
      exerciseName: "사이드 레터럴 레이즈",
      exercisePart: "shoulders",
    },
    {
      exerciseName: "프론트 레이즈",
      exercisePart: "shoulders",
    },
    {
      exerciseName: "밀리터리 프레스",
      exercisePart: "shoulders",
    },
  ],
  legs: [
    {
      exerciseName: "스쿼트",
      exercisePart: "legs",
    },
    {
      exerciseName: "레그 프레스",
      exercisePart: "legs",
    },
    {
      exerciseName: "런지",
      exercisePart: "legs",
    },
    {
      exerciseName: "데드리프트",
      exercisePart: "legs",
    },
  ],
  biceps: [
    {
      exerciseName: "바벨 컬",
      exercisePart: "biceps",
    },
    {
      exerciseName: "덤벨 컬",
      exercisePart: "biceps",
    },
    {
      exerciseName: "해머 컬",
      exercisePart: "biceps",
    },
    {
      exerciseName: "케이블 컬",
      exercisePart: "biceps",
    },
  ],
  triceps: [
    {
      exerciseName: "트라이셉스 푸시 다운",
      exercisePart: "triceps",
    },
    {
      exerciseName: "덤벨 오버헤드 익스텐션",
      exercisePart: "triceps",
    },
    {
      exerciseName: "크로스그립 벤치 프레스",
      exercisePart: "triceps",
    },
    {
      exerciseName: "다이아몬드 푸시 업",
      exercisePart: "triceps",
    },
    {
      exerciseName: "킥백",
      exercisePart: "triceps",
    },
  ],
  abs: [
    {
      exerciseName: "크런치",
      exercisePart: "abs",
    },
    {
      exerciseName: "레그 레이즈",
      exercisePart: "abs",
    },
    {
      exerciseName: "플랭크",
      exercisePart: "abs",
    },
    {
      exerciseName: "러시안 트위스트",
      exercisePart: "abs",
    },
    {
      exerciseName: "마운틴 클라이머",
      exercisePart: "abs",
    },
  ],
  cardio: [
    {
      exerciseName: "러닝",
      exercisePart: "cardio",
    },
  ],
};
