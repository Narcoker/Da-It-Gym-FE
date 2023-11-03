import axios from "axios";
import { toast } from "react-toastify";
import { Routine } from "../hooks/useRoutine";

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

export default function useRoutineAPI() {
  const API_URL = import.meta.env.API_URL;

  // 루틴 좋아요/취소
  const requestLike = (routineId: number) => {
    axios
      .get(`${API_URL}/api/routines/${routineId}/like`)
      .then(() => {})
      .catch((err) => toast.error(err.message));
  };

  // 루틴 댓글/대댓글 작성하기
  const requestCreateComment = (routineId: number, payload: CreateCommentPayload) => {
    axios
      .post(`${API_URL}/api/routines/${routineId}/comment`, payload)
      .then(() => {})
      .catch(() => {});
  };

  // 루틴 댓글/대댓글 수정하기
  const requestUpdateComment = (
    routineId: number,
    commentId: number,
    payload: UpdateCommentPayload,
  ) => {
    axios
      .put(`${API_URL}/api/routines/${routineId}/comments/${commentId}`, payload)
      .then(() => {})
      .catch(() => {});
  };

  // 루틴 댓글/대댓글 삭제하기
  const requestDeleteComment = (routineId: number, commentId: number) => {
    axios
      .delete(`${API_URL}/api/routines/${routineId}/comments/${commentId}`)
      .then(() => {})
      .catch(() => {});
  };

  // 루틴 댓글 가져오기
  const requestComments = (routineId: number, page: number) => {
    const pageSize = 10;
    axios
      .get(
        `${API_URL}/api/routines/${routineId}/comments?page=${page}&pageSize=${pageSize}`,
      )
      .then(() => {})
      .catch(() => {});
  };

  // 루틴 대댓글 가져오기
  const requestRecomments = (routineId: number, commentId: number) => {
    axios
      .get(
        `${API_URL}/api/feed-routines/${routineId}/comments/${commentId}/child-comment`,
      )
      .then(() => {})
      .catch(() => {});
  };

  // 모든 사용자들의 루틴 목록 조회하기
  const requestRoutineAll = (page: number, division: number) => {
    const size = 10;
    axios
      .get(`${API_URL}/api/routines?page=${page}&size=${size}$division=${division}`)
      .then(() => {})
      .catch(() => {});
  };

  // 팔로우한 유저의 루틴 조회하기
  const requestRoutineFollowing = (page: number, division: number) => {
    const size = 10;
    axios
      .get(
        `${API_URL}/api/routines/following?page=${page}&size=${size}$division=${division}`,
      )
      .then(() => {})
      .catch(() => {});
  };

  // 추천 루틴 조회하기
  const requestRoutineRecommend = (page: number, division: number) => {
    const size = 10;
    axios
      .get(
        `${API_URL}/api/routines/recommend?page=${page}&size=${size}$division=${division}`,
      )
      .then(() => {})
      .catch(() => {});
  };

  // 루틴 상세 조회하기
  const requestDetailRoutine = (routineId: number) => {
    axios
      .get(`${API_URL}/api/routines/${routineId}/detail`)
      .then(() => {})
      .catch(() => {});
  };

  // 루틴 작성하기
  const requestCreateRoutine = (payload: CreateRoutinePayload) => {
    axios
      .post(`${API_URL}/api/routines`, payload)
      .then(() => {})
      .catch(() => {});
  };

  // 루틴 삭제하기
  const requestDeleteRoutine = (routineId: number) => {
    axios
      .delete(`${API_URL}/api/routines/${routineId}`)
      .then(() => {})
      .catch(() => {});
  };

  // 루틴 스크랩 하기
  const requestScrapRoutine = (payload: ScrapRoutinePayload) => {
    axios
      .post(`${API_URL}/api/routines/scrap`, payload)
      .then(() => {})
      .catch(() => {});
  };

  // 등록할 수 있는 운동 목록 가져오기

  return {
    requestLike,
    requestCreateComment,
    requestUpdateComment,
    requestDeleteComment,
    requestComments,
    requestRecomments,
    requestRoutineAll,
    requestRoutineFollowing,
    requestRoutineRecommend,
    requestDetailRoutine,
    requestCreateRoutine,
    requestDeleteRoutine,
    requestScrapRoutine,
  };
}
