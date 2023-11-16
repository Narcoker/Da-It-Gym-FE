import { toast } from "react-toastify";
import { Journal } from "../components/ExerciseCalendar/ExerciseCalendar";
import { Exercise, RestTime } from "../hooks/useExercise";
import { useAxios } from "./useAxios";
import { Action } from "../hooks/useDay";
import { ExerciseSet } from "../hooks/useExerciseSet";
import { SetterOrUpdater } from "recoil";
import { useNavigate } from "react-router";

export default function useExerciseDiaryAPI() {
  const API_URL = import.meta.env.VITE_API_URL;
  const axios = useAxios();
  const navigate = useNavigate();
  // 휴식시간 변경
  const requestPatchRestTime = (exerciseListId: number) => {
    axios
      .patch(`${API_URL}/api/journals/exercise-list/${exerciseListId}/rest-time`)
      .then()
      .catch((err) => toast.error(err.message));
  };

  // 운동일지 조회
  const requestJournals = (setMark: SetterOrUpdater<string[]>) => {
    axios
      .get(`${API_URL}/api/journals`)
      .then((res) => {
        // console.log(res.data.data.journals);
        const journals: Journal[] = res.data.data.journals;
        setMark(journals.map((journal) => journal.journalDate));
      })
      .catch((err) => toast.error(err.message));
  };

  //운동일지 상세조회
  const requestJournalDetail = (
    journalDate: string,
    dayDispatch?: React.Dispatch<Action>,
  ) => {
    axios
      .get(`${API_URL}/api/journals/${journalDate}`)
      .then((res) => {
        if (dayDispatch) {
          dayDispatch({ type: "CREATE_DAY", newDay: res.data.data.journal });
        }
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };

  // 운동 기록 변경
  const requestPatchExerciseHistory = (
    exerciseHistoryId: number,
    payload: ExerciseHistoryPayload,
    journalDate: string,
    dayDispatch?: React.Dispatch<Action>,
  ) => {
    axios
      .patch(`${API_URL}/api/journals/${exerciseHistoryId}`, payload)
      .then(() => {
        if (dayDispatch) {
          requestJournalDetail(journalDate, dayDispatch);
        }
      })
      .catch((err) => toast.error(err.message));
  };

  // 운동목록 삭제
  const requestDeleteExerciseList = (exerciseListId: number) => {
    axios
      .delete(`${API_URL}/api/journals/exercise-list/${exerciseListId}`)
      .then()
      .catch((err) => toast.error(err.message));
  };

  // 운동일지 삭제
  const requestDeleteJournal = (journalId: number) => {
    axios
      .delete(`${API_URL}/api/journals/${journalId}`)
      .then()
      .catch((err) => toast.error(err.message));
  };

  // 운동기록 삭제
  const requestDeleteExerciseHistory = (exerciseHistoryId: number) => {
    axios
      .delete(`${API_URL}/api/journals/exercise-history/${exerciseHistoryId}`)
      .then()
      .catch((err) => toast.error(err.message));
  };

  // 운동일지 생성
  const requestPostJournal = (journalDate: string) => {
    axios
      .post(`${API_URL}/api/journals`, { journalDate })
      .then((res) => console.log(res))
      .catch((err) => toast.error(err.message));
  };

  // 일지에 운동 추가
  const requestPostExerciseList = (payload: Exercise) => {
    axios
      .post(`${API_URL}/api/journals/exercise-list`, payload)
      .then()
      .catch((err) => toast.error(err.message));
  };

  // 운동에 운동기록 추가
  const requestPostExerciseHistory = (payload: PostExerciseHistoryPayload) => {
    axios
      .post(`${API_URL}/api/journals/exercise-history`, payload)
      .then()
      .catch((err) => toast.error(err.message));
  };

  // 운동일지 완료
  const requestDiaryComplete = (journalId: number, payload: DiaryComplete) => {
    axios
      .patch(`${API_URL}/api/journals/${journalId}/complete`, payload)
      .then(() => window.location.reload())
      .catch((err) => toast.error(err.message));
  };

  // 일지에 운동 추가하기
  const requestAddExercise = (payload: AddExercise) => {
    axios
      .post(`${API_URL}/api/journals/exercise-list`, payload)
      .then((res) => console.log(res))
      .catch((err) => toast.error(err.message));
  };

  // 운동에 운동기록 추가하기
  const requestAddHistory = (payload: AddHistory) => {
    axios
      .post(`${API_URL}/api/journals/exercise-history`, payload)
      .then((res) => console.log(res))
      .catch((err) => toast.error(err.message));
  };

  // 운동기록 삭제하기
  const requestDeleteHistory = (exerciseHistoryId: number) => {
    axios
      .delete(`${API_URL}/api/journals/exercise-history/${exerciseHistoryId}`)
      .then(() => navigate(-1))
      .catch((err) => toast.error(err.message));
  };

  // 운동목록 삭제하기
  const requestDeleteExercise = (exerciseListId: number) => {
    axios
      .delete(`${API_URL}/api/journals/exercise-list/${exerciseListId}`)
      .then((res) => console.log(res))
      .catch((err) => toast.error(err.message));
  };

  // 휴식시간 변경
  const requestChangeRestTime = (exerciseListId: number, payload: RestTimePayload) => {
    axios
      .post(`${API_URL}/api/journals/exercise-list/${exerciseListId}/rest-time`, {
        restTime: payload,
      })
      .then((res) => console.log(res))
      .catch((err) => toast.error(err.message));
  };

  // 운동 기록 변경
  const requestChangeHistory = (exerciseHistoryId: number, payload: ChangeHistory) => {
    axios
      .patch(`${API_URL}/api/journals/exercise-history/${exerciseHistoryId}`, payload)
      .then((res) => console.log(res))
      .catch((err) => toast.error(err.message));
  };

  // 내 운동일지에 추가
  const requestJournalReplication = (journalId: string, journalDate: string) => {
    axios
      .post(`${API_URL}/api/journals/${journalId}/replication`, { journalDate })
      .then((res) => console.log(res))
      .catch((err) => toast.error(err.message));
  };

  return {
    requestPatchRestTime,
    requestJournals,
    requestJournalDetail,
    requestPostJournal,
    requestPatchExerciseHistory,
    requestDeleteExerciseList,
    requestDeleteJournal,
    requestDeleteExerciseHistory,
    requestPostExerciseList,
    requestPostExerciseHistory,
    requestDiaryComplete,
    requestAddExercise,
    requestJournalReplication,
    requestAddHistory,
    requestDeleteHistory,
    requestDeleteExercise,
    requestChangeRestTime,
    requestChangeHistory,
  };
}

interface ExerciseHistoryPayload {
  weight: number;
  count: number;
  completed: boolean;
}

interface PostExerciseHistoryPayload {
  exerciseListId: number;
  setNum: number;
  weight: number;
  repetitionCount: number;
}

export interface DiaryComplete {
  completed: true;
  exerciseTime: {
    hours: number;
    minutes: number;
    seconds: number;
  };
}

export interface AddExercise {
  exerciseNum: number;
  id: number | null;
  order: number;
  name: string;
  part: string;
  restTime: RestTime;
  spread: boolean;
  exerciseSets: ExerciseSet[];
}

export interface AddHistory {
  id: number;
  setNum: number;
  weights: number;
  counts: number;
}

interface RestTimePayload {
  minutes: number;
  seconds: number;
}

export interface ChangeHistory {
  weight: number;
  count: number;
  completed: boolean;
}
