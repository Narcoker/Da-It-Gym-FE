import axios from "axios";
import { toast } from "react-toastify";
import { Journals } from "../components/ExerciseCalendar/ExerciseCalendar";
import { Exercise } from "../hooks/useExercise";

export default function useExerciseDiary() {
  const API_URL = import.meta.env.VITE_API_URL;

  // 휴식시간 변경
  const requestPatchRestTime = (exerciseListId: number) => {
    axios
      .patch(`${API_URL}/api/journals/exercise-list/${exerciseListId}/rest-time`)
      .then()
      .catch((err) => toast.error(err.message));
  };

  // 운동일지 조회
  const requestJournals = (
    setJournals: React.Dispatch<React.SetStateAction<Journals[]>>,
  ) => {
    axios
      .get(`${API_URL}/api/journals`)
      .then((res) => {
        console.log(res.data);
        setJournals(res.data);
      })
      .catch((err) => toast.error(err.message));
  };

  //운동일지 상세조회
  const requestJournalDetail = (journalDate: string) => {
    axios
      .get(`${API_URL}/api/journals/${journalDate}`)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => toast.error(err.message));
  };

  // 운동 기록 변경
  const requestPatchExerciseHistory = (
    exerciseHistoryId: number,
    payload: ExerciseHistoryPayload,
  ) => {
    axios
      .patch(`${API_URL}/api/journals/${exerciseHistoryId}`, payload)
      .then()
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
      .then()
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
