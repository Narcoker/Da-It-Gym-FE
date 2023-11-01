import React, { useReducer } from "react";
import { ExerciseSet, initExerciseSet } from "./useExerciseSet";
import { ExerciseName, ExercisePart, getExcercisePartName } from "../constants/excercise";

export interface Exercise {
  id: number | null;
  order: number;
  name: string;
  part: string;
  restTime: RestTime;
  spread: boolean;
  exerciseSets: ExerciseSet[];
}

export interface RestTime {
  hours: number;
  minutes: number;
  seconds: number;
}

export type Action =
  | { type: "CREATE_EXERCISE_SET" }
  | { type: "DELETE_EXERCISE_SET" }
  | { type: "UPDATE_NAME"; newName: string }
  | { type: "UPDATE_PART"; newPart: string }
  | { type: "UPDATE_REST_TIME"; newRestTime: RestTime }
  | { type: "UPDATE_IS_SPREAD_SETS" }
  | { type: "UPDATE_EXERSIZE_SET_SET_WEIGHTS"; exerciseIndex: number; newWeights: number }
  | { type: "UPDATE_EXERSIZE_SET_SET_COUNTS"; exerciseIndex: number; newCounts: number }
  | { type: "UPDATE_EXERSIZE_SET_SET_COMPLETED"; exerciseIndex: number };

function exerciseReducer(exercise: Exercise, action: Action) {
  const newExercise: Exercise = JSON.parse(JSON.stringify(exercise));

  switch (action.type) {
    case "UPDATE_NAME": {
      const { newName } = action;
      return { ...newExercise, name: newName };
    }

    case "UPDATE_PART": {
      const { newPart } = action;
      return { ...newExercise, part: newPart };
    }

    case "UPDATE_REST_TIME": {
      const { newRestTime } = action;
      return { ...newExercise, restTime: newRestTime };
    }

    case "UPDATE_IS_SPREAD_SETS": {
      return { ...newExercise, spread: !newExercise.spread };
    }

    case "CREATE_EXERCISE_SET": {
      newExercise.exerciseSets.push(initExerciseSet);
      return newExercise;
    }

    case "DELETE_EXERCISE_SET": {
      newExercise.exerciseSets.pop();
      return newExercise;
    }

    case "UPDATE_EXERSIZE_SET_SET_WEIGHTS": {
      const { exerciseIndex, newWeights } = action;
      newExercise.exerciseSets[exerciseIndex].weights = newWeights;
      return newExercise;
    }

    case "UPDATE_EXERSIZE_SET_SET_COUNTS": {
      const { exerciseIndex, newCounts } = action;
      newExercise.exerciseSets[exerciseIndex].counts = newCounts;
      return newExercise;
    }

    default: {
      throw new Error("Unknown action type");
    }
  }
}

export const getNewExercise = (
  order: number,
  exerciseName: ExerciseName,
  exercisePart: ExercisePart,
): Exercise => {
  return {
    ...initExercise,
    order: order,
    name: exerciseName,
    part: getExcercisePartName(exercisePart),
  };
};

export const initExercise: Exercise = {
  id: null,
  order: 1,
  name: "",
  part: "",
  restTime: { hours: 0, minutes: 1, seconds: 0 },
  spread: false,
  exerciseSets: [initExerciseSet],
};

export function useExercise(): [Exercise, React.Dispatch<Action>] {
  const [exercise, dispatch] = useReducer(exerciseReducer, initExercise);
  return [exercise, dispatch];
}
