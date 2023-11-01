import { useReducer } from "react";
import { Day, initDay } from "./useDay";
import { RestTime, getNewExercise } from "./useExercise";
import { initExerciseSet } from "./useExerciseSet";
import { ExerciseName, ExercisePart } from "../constants/excercise";

export interface Routine {
  id: number | null;
  days: Day[];
}

export type Action =
  | { type: "UPDATE_ROUTINE"; newRoutine: Routine }
  | { type: "CREATE_DAY" }
  | { type: "DELETE_DAY" }
  | {
      type: "CREATE_EXERCISE";
      dayIndex: number;
      exerciseName: ExerciseName;
      exercisePart: ExercisePart;
    }
  | { type: "DELETE_EXERCISE"; dayIndex: number }
  | { type: "UPDATE_EXERCISES_IS_SPREAD"; dayIndex: number }
  | {
      type: "UPDATE_EXERCISE_NAME";
      dayIndex: number;
      exerciseIndex: number;
      newName: string;
    }
  | {
      type: "UPDATE_EXERCISE_PART";
      dayIndex: number;
      exerciseIndex: number;
      newPart: string;
    }
  | {
      type: "UPDATE_EXERCISE_REST_TIME";
      dayIndex: number;
      exerciseIndex: number;
      newRestTime: RestTime;
    }
  | { type: "CREATE_EXERSISE_SET"; dayIndex: number; exerciseIndex: number }
  | { type: "DELETE_EXERSISE_SET"; dayIndex: number; exerciseIndex: number }
  | { type: "UPDATE_EXERCISES_SETS_IS_SPREAD"; dayIndex: number; exerciseIndex: number }
  | {
      type: "UPDATE_EXERSISE_SET_WEIGHTS";
      dayIndex: number;
      exerciseIndex: number;
      exerciseSetIndex: number;
      newWeight: number;
    }
  | {
      type: "UPDATE_EXERSISE_SET_COUNTS";
      dayIndex: number;
      exerciseIndex: number;
      exerciseSetIndex: number;
      newCounts: number;
    }
  | {
      type: "UPDATE_EXERSISE_SET_COMPLETED";
      dayIndex: number;
      exerciseIndex: number;
      exerciseSetIndex: number;
    };

export function routineReducer(routine: Routine, action: Action) {
  const newRoutine: Routine = JSON.parse(JSON.stringify(routine));

  switch (action.type) {
    case "UPDATE_ROUTINE": {
      return action.newRoutine;
    }

    case "CREATE_DAY": {
      const newDay = { ...initDay };
      newDay.order = newRoutine.days.length + 1;
      newRoutine.days.push(newDay);
      return newRoutine;
    }

    case "DELETE_DAY": {
      newRoutine.days.pop();
      return newRoutine;
    }

    case "CREATE_EXERCISE": {
      const { dayIndex, exerciseName, exercisePart } = action;
      const newExercise = getNewExercise(
        newRoutine.days[dayIndex].exercises.length,
        exerciseName,
        exercisePart,
      );
      newRoutine.days[dayIndex].exercises.push(newExercise);
      return newRoutine;
    }

    case "DELETE_EXERCISE": {
      const { dayIndex } = action;
      newRoutine.days[dayIndex].exercises.pop();
      return newRoutine;
    }

    case "UPDATE_EXERCISES_IS_SPREAD": {
      const { dayIndex } = action;
      newRoutine.days[dayIndex].spread = !newRoutine.days[dayIndex].spread;
      return newRoutine;
    }

    case "UPDATE_EXERCISE_NAME": {
      const { dayIndex, exerciseIndex } = action;
      newRoutine.days[dayIndex].exercises[exerciseIndex].name = action.newName;
      return newRoutine;
    }

    case "UPDATE_EXERCISE_PART": {
      const { dayIndex, exerciseIndex } = action;
      newRoutine.days[dayIndex].exercises[exerciseIndex].part = action.newPart;
      return newRoutine;
    }

    case "UPDATE_EXERCISE_REST_TIME": {
      const { dayIndex, exerciseIndex } = action;
      newRoutine.days[dayIndex].exercises[exerciseIndex].restTime = action.newRestTime;
      return newRoutine;
    }

    case "CREATE_EXERSISE_SET": {
      const { dayIndex, exerciseIndex } = action;
      const newExerciseSet = { ...initExerciseSet };
      newExerciseSet.order =
        newRoutine.days[dayIndex].exercises[exerciseIndex].exerciseSets.length + 1;
      newRoutine.days[dayIndex].exercises[exerciseIndex].exerciseSets.push(
        newExerciseSet,
      );
      return newRoutine;
    }

    case "DELETE_EXERSISE_SET": {
      const { dayIndex, exerciseIndex } = action;
      newRoutine.days[dayIndex].exercises[exerciseIndex].exerciseSets.pop();
      return newRoutine;
    }

    case "UPDATE_EXERCISES_SETS_IS_SPREAD": {
      const { dayIndex, exerciseIndex } = action;
      newRoutine.days[dayIndex].exercises[exerciseIndex].spread =
        !newRoutine.days[dayIndex].exercises[exerciseIndex].spread;
      return newRoutine;
    }

    case "UPDATE_EXERSISE_SET_WEIGHTS": {
      const { dayIndex, exerciseIndex, exerciseSetIndex, newWeight } = action;
      newRoutine.days[dayIndex].exercises[exerciseIndex].exerciseSets[
        exerciseSetIndex
      ].weights = newWeight;
      return newRoutine;
    }

    case "UPDATE_EXERSISE_SET_COUNTS": {
      const { dayIndex, exerciseIndex, exerciseSetIndex, newCounts } = action;
      newRoutine.days[dayIndex].exercises[exerciseIndex].exerciseSets[
        exerciseSetIndex
      ].counts = newCounts;
      return newRoutine;
    }

    case "UPDATE_EXERSISE_SET_COMPLETED": {
      const { dayIndex, exerciseIndex, exerciseSetIndex } = action;
      newRoutine.days[dayIndex].exercises[exerciseIndex].exerciseSets[
        exerciseSetIndex
      ].completed =
        !newRoutine.days[dayIndex].exercises[exerciseIndex].exerciseSets[exerciseSetIndex]
          .completed;
      return newRoutine;
    }

    default: {
      throw new Error("Unknown action type");
    }
  }
}

export const initRoutine: Routine = {
  id: null,
  days: [],
};

export function useRoutine(): [Routine, React.Dispatch<Action>] {
  const [routine, dispatch] = useReducer(routineReducer, initRoutine);
  return [routine, dispatch];
}
