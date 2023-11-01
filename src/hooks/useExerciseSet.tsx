import { useReducer } from "react";

export interface ExerciseSet {
  id: number | null;
  order: number;
  weights: number;
  counts: number;
  completed: boolean;
}

export type Action =
  | { type: "UPDATE_WEIGHTS"; newWeights: number }
  | { type: "UPDATE_COUNTS"; newCounts: number }
  | { type: "UPDATE_COMPLETED" };

function exerciseSetReducer(exerciseSet: ExerciseSet, action: Action) {
  switch (action.type) {
    case "UPDATE_WEIGHTS": {
      const { newWeights } = action;
      return { ...exerciseSet, weights: newWeights };
    }

    case "UPDATE_COUNTS": {
      const { newCounts } = action;
      return { ...exerciseSet, counts: newCounts };
    }

    case "UPDATE_COMPLETED": {
      return { ...exerciseSet, completed: !exerciseSet.completed };
    }

    default: {
      throw new Error("Unknown action type");
    }
  }
}

export const initExerciseSet: ExerciseSet = {
  id: null,
  order: 1,
  weights: 10,
  counts: 1,
  completed: false,
};

export function useExerciseSet(): [ExerciseSet, React.Dispatch<Action>] {
  const [exercise, dispatch] = useReducer(exerciseSetReducer, initExerciseSet);
  return [exercise, dispatch];
}
