import { toast } from "react-toastify";
import { Routine } from "../hooks/useRoutine";
import { useAxios } from "./useAxios";
import { ExercisePart } from "../constants/excercise";
import { useNavigate } from "react-router";
import { useQuery } from "@tanstack/react-query";

export interface CreateCommentPayload {
  comment: string;
  parentId?: string;
}

export interface UpdateCommentPayload {
  comment: string;
  parentId?: string;
}

export interface CreateRoutinePayload {
  title: string;
  description: string;
  division: number;
  routine: Routine;
}

export interface ScrapRoutinePayload {
  routineId: number;
}

export interface ResponseDetailRoutine {
  writer: string;
  writerImg: string;
  createdAt: string;
  title: string;
  description: string;
  division: number;
  liked: boolean;
  likeCounts: number;
  scraped: boolean;
  scrapCounts: number;
  routine: Routine;
}

export interface ResponseLike {
  likeCnt: number;
}

export interface ResponseRoutines {
  routines: RoutineInfo[];
  currentPage: number;
  hasNext: boolean;
}

export interface RoutineInfo {
  id: number;
  authorImg: string;
  author: string;
  title: string;
  likeCounts: number;
  scrapCounts: number;
  createdAt: string;
}

export interface ResponseExercise {
  exerciseId: number;
  exerciseName: string;
  exercisePart: ExercisePart;
}

export default function useRoutineAPI() {
  const API_URL = import.meta.env.VITE_API_URL;
  const axios = useAxios();
  const navigate = useNavigate();

  // 루틴 좋아요
  const requestLike = async (routineId: string) => {
    const newLikeCounts = await axios
      .post(`${API_URL}/api/routines/${routineId}/like`)
      .then((response) => response.data.data.likeCnt)
      .catch((err) => toast.error(err.message));
    return newLikeCounts;
  };

  // 루틴 좋아요 취소
  const requestDislike = async (routineId: string) => {
    const newLikeCounts = await axios
      .delete(`${API_URL}/api/routines/${routineId}/like`)
      .then((response) => response.data.data.likeCnt)
      .catch((err) => toast.error(err.message));
    return newLikeCounts;
  };

  // 모든 사용자들의 루틴 목록 조회하기
  const requestRoutineAll = async (
    page: number,
    division: number,
  ): Promise<ResponseRoutines> => {
    const size = 10;
    const response = await axios
      .get(`${API_URL}/api/routines?page=${page}&size=${size}&division=${division}`)
      .then((response) => response.data.data)
      .catch((err) => toast.error(err.message));

    return response;
  };

  // 팔로우한 유저의 루틴 조회하기
  const requestRoutineFollowing = async (
    page: number,
    division: number,
  ): Promise<ResponseRoutines> => {
    const size = 10;
    const response = await axios
      .get(
        `${API_URL}/api/routines/following?page=${page}&size=${size}&division=${division}`,
      )
      .then((response) => response.data.data)
      .catch(() => {});

    return response;
  };

  // 추천 루틴 조회하기
  const requestRoutineRecommend = async (
    page: number,
    division: number,
  ): Promise<ResponseRoutines> => {
    const size = 10;
    const response = await axios
      .get(
        `${API_URL}/api/routines/recommend?page=${page}&size=${size}&division=${division}`,
      )
      .then((response) => response.data.data)
      .catch(() => {});

    return response;
  };

  // 루틴 상세 조회하기
  const requestDetailRoutine = async (
    routineId: number,
  ): Promise<ResponseDetailRoutine> => {
    const response = await axios
      .get(`${API_URL}/api/routines/${routineId}/details`)
      .then((response) => response.data.data)
      .catch((err) => {
        toast.error(err);
      });
    return response;
  };

  // 루틴 작성하기
  const requestCreateRoutine = (payload: CreateRoutinePayload) => {
    if (payload.title === "") {
      toast.error("제목을 입력해주세요");
      return;
    }
    if (payload.description === "") {
      toast.error("내용을 입력해주세요");
      return;
    }

    axios
      .post(`${API_URL}/api/routines`, payload)
      .then(() => {
        toast.success("루틴을 등록했습니다.");
        navigate("/feed/routine");
      })
      .catch(() => {});
  };

  // 루틴 삭제하기
  const requestDeleteRoutine = async (routineId: number) => {
    axios
      .delete(`${API_URL}/api/routines/${routineId}`)
      .then(() => {
        toast.done("루틴이 삭제되었습니다.");
        navigate(`/feed/routine`);
      })
      .catch(() => {
        toast.error("루틴 삭제에 실패했습니다.");
      });
  };

  // 루틴 스크랩 하기
  const requestScrapRoutine = async (routineId: string) => {
    const newScrapCounts = await axios
      .post(`${API_URL}/api/routines/${routineId}/scrap`)
      .then((response) => response.data.data.scrapCnt)
      .catch(() => {
        toast.error("루틴 스크랩에 실패했습니다.");
      });
    return newScrapCounts;
  };

  // 루틴 스크랩 취소 하기
  const requestUnscrapRoutine = async (routineId: string) => {
    const newScrapCounts = await axios
      .delete(`${API_URL}/api/routines/${routineId}/scrap`)
      .then((response) => response.data.data.scrapCnt)
      .catch(() => {
        toast.error("루틴 스크랩 취소에 실패했습니다.");
      });
    return newScrapCounts;
  };

  // 등록할 수 있는 운동 목록 가져오기
  const requestExerciseOfPart = async (
    exercisePart: ExercisePart,
  ): Promise<ResponseExercise[]> => {
    const response = await axios
      .get(`${API_URL}/api/exercises/${encodeURIComponent(exercisePart)}`)
      .then((response) => response.data.data.exercises)
      .catch((error) => {
        toast.error("운동 목록을 불러오는 데 실패했습니다.");
        throw error;
      });
    return response;
  };

 const useExerciseOfPartQuery = ( exercisePart: ExercisePart) => {
  return useQuery({
    queryKey: ["ExerciseOfPart", exercisePart], 
    queryFn: () => requestExerciseOfPart(exercisePart),
    staleTime: Infinity,
    gcTime:Infinity
  });
 };

  return {
    requestLike,
    requestDislike,
    requestRoutineAll,
    requestRoutineFollowing,
    requestRoutineRecommend,
    requestDetailRoutine,
    requestCreateRoutine,
    requestDeleteRoutine,
    requestScrapRoutine,
    requestUnscrapRoutine,
    requestExerciseOfPart,
    useExerciseOfPartQuery,
  };
}
