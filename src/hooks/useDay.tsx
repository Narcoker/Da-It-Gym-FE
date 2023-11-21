import { useReducer } from "react";
import { Exercise, RestTime, getNewExercise } from "./useExercise";
import { initExerciseSet } from "./useExerciseSet";
import { ExercisePart } from "../constants/excercise";

export interface ExerciseTime {
  hours: number;
  minutes: number;
  seconds: number;
}

export interface Day {
  id: number | null;
  order: number;
  dayDate: Date | null;
  exerciseTime: ExerciseTime;
  completed: boolean;
  spread: boolean;
  exercises: Exercise[];
}

export type Action =
  | { type: "CREATE_DAY"; newDay: Day }
  | { type: "CREATE_EXERCISE"; exerciseName: string; exercisePart: ExercisePart }
  | { type: "DELETE_EXERCISE" }
  | { type: "UPDATE_EXERCISES_IS_SPREAD" }
  | { type: "UPDATE_EXERCISE_NAME"; exerciseIndex: number; newName: string }
  | { type: "UPDATE_EXERCISE_PART"; exerciseIndex: number; newPart: string }
  | { type: "UPDATE_EXERCISE_REST_TIME"; exerciseIndex: number; newRestTime: RestTime }
  | { type: "CREATE_EXERSISE_SET"; exerciseIndex: number }
  | { type: "DELETE_EXERSISE_SET"; exerciseIndex: number }
  | { type: "UPDATE_EXERCISES_SETS_IS_SPREAD"; exerciseIndex: number }
  | {
      type: "UPDATE_EXERSISE_SET_WEIGHTS";
      exerciseIndex: number;
      exerciseSetIndex: number;
      newWeight: number;
    }
  | {
      type: "UPDATE_EXERSISE_SET_COUNTS";
      exerciseIndex: number;
      exerciseSetIndex: number;
      newCounts: number;
    }
  | {
      type: "UPDATE_EXERSISE_SET_COMPLETED";
      exerciseIndex: number;
      exerciseSetIndex: number;
    }
  | {
      type: "UPDATE_EXERSISE_SET";
      exerciseSetId: number;
      exerciseIndex: number;
    }
  | {
      type: "UPDATE_ID";
      dayId: number;
    };

export function dayRecucer(day: Day, action: Action) {
  const newDay: Day = JSON.parse(JSON.stringify(day));

  switch (action.type) {
    case "CREATE_DAY": {
      const { newDay } = action;
      return newDay;
    }

    case "UPDATE_ID": {
      const { dayId } = action;
      newDay.id = dayId;

      return newDay;
    }
    case "CREATE_EXERCISE": {
      const { exerciseName, exercisePart } = action;
      const newExercise = getNewExercise(
        newDay.exercises.length,
        exerciseName,
        exercisePart,
      );
      newDay.exercises.push(newExercise);
      return newDay;
    }

    case "DELETE_EXERCISE": {
      newDay.exercises.pop();
      return newDay;
    }

    case "UPDATE_EXERCISES_IS_SPREAD": {
      return { ...newDay, spread: !newDay.spread };
    }

    case "UPDATE_EXERCISE_NAME": {
      const { exerciseIndex } = action;
      newDay.exercises[exerciseIndex].name = action.newName;
      return newDay;
    }

    case "UPDATE_EXERCISE_PART": {
      const { exerciseIndex, newPart } = action;
      newDay.exercises[exerciseIndex].part = newPart;
      return newDay;
    }

    case "UPDATE_EXERCISE_REST_TIME": {
      const { exerciseIndex, newRestTime } = action;
      console.log(exerciseIndex);
      newDay.exercises[exerciseIndex].restTime = newRestTime;
      return newDay;
    }

    case "CREATE_EXERSISE_SET": {
      const { exerciseIndex } = action;
      const newExersizeSet = { ...initExerciseSet };
      newExersizeSet.order = newDay.exercises[exerciseIndex].exerciseSets.length + 1;
      newDay.exercises[exerciseIndex].exerciseSets.push(newExersizeSet);
      return newDay;
    }

    case "DELETE_EXERSISE_SET": {
      const { exerciseIndex } = action;
      newDay.exercises[exerciseIndex].exerciseSets.pop();
      return newDay;
    }

    case "UPDATE_EXERCISES_SETS_IS_SPREAD": {
      const { exerciseIndex } = action;
      newDay.exercises[exerciseIndex].spread = !newDay.exercises[exerciseIndex].spread;
      return newDay;
    }

    case "UPDATE_EXERSISE_SET_WEIGHTS": {
      const { exerciseIndex, exerciseSetIndex, newWeight } = action;
      newDay.exercises[exerciseIndex].exerciseSets[exerciseSetIndex].weights = newWeight;
      return newDay;
    }
    case "UPDATE_EXERSISE_SET_COUNTS": {
      const { exerciseIndex, exerciseSetIndex, newCounts } = action;
      newDay.exercises[exerciseIndex].exerciseSets[exerciseSetIndex].counts = newCounts;
      return newDay;
    }

    case "UPDATE_EXERSISE_SET_COMPLETED": {
      const { exerciseIndex, exerciseSetIndex } = action;
      newDay.exercises[exerciseIndex].exerciseSets[exerciseSetIndex].completed =
        !newDay.exercises[exerciseIndex].exerciseSets[exerciseSetIndex].completed;
      return newDay;
    }
    case "UPDATE_EXERSISE_SET": {
      const { exerciseIndex, exerciseSetId } = action;
      const newExerciseSet = { ...initExerciseSet, id: exerciseSetId };
      newDay.exercises[exerciseIndex].spread = true;
      newExerciseSet.order = newDay.exercises[exerciseIndex].exerciseSets.length + 1;
      newDay.exercises[exerciseIndex].exerciseSets.push(newExerciseSet);
      console.log(newDay);
      return newDay;
    }
    default: {
      throw new Error("Unknown action type");
    }
  }
}

export const initDay: Day = {
  id: null,
  order: 1,
  dayDate: null,
  exerciseTime: {
    hours: 0,
    minutes: 0,
    seconds: 0,
  },
  completed: false,
  spread: false,
  exercises: [],
};

export function useDay(): [Day, React.Dispatch<Action>] {
  const [day, dispatch] = useReducer(dayRecucer, initDay);
  return [day, dispatch];
}
