import { toast } from "react-toastify";
import { useAxios } from "./useAxios";
import { CommentsDataProps } from "../components/Comments/Comments";
import { feedDetail } from "../pages/FeedDiaryDetail/FeedDiaryDetail";
import { Action } from "../hooks/useDay";
import { replyCommentProps } from "../components/Comments/components/CommentElement";

interface ReplyPostPayload {
  comment: string;
  parentId: number | undefined;
}
export default function useFeedDiaryDetailAPI() {
  const API_URL = import.meta.env.VITE_API_URL;
  const axios = useAxios();
  // GET : 피드 상세보기 피드 데이터 가져오기 (게시물 유저 정보, 사진, 좋아요, 스크랩수)
  const requestFeedDiaryDetail = (
    feedJournalId: number,
    setFeedData: React.Dispatch<React.SetStateAction<feedDetail | undefined>>,
  ) => {
    axios
      .get(`${API_URL}/api/feeds/journal/${feedJournalId}/feed-details`)
      .then((response) => {
        console.log(response.data);
        if (setFeedData && response.data) {
          setFeedData(response.data.data);
        }
      })
      .catch((error) => toast.error(error.message));
  };

  // GET : 피드 상세보기 운동 목록 데이터 가져오기 (운동일지 : 운동 관련)
  const requestFeedDiaryExerciseDetail = (
    journalId: number,
    dayDispatch: React.Dispatch<Action>,
  ) => {
    axios
      .get(`${API_URL}/api/feeds/journal/${journalId}/journal-detail`)
      .then((response) => {
        console.log(response.data);
        if (dayDispatch) {
          dayDispatch({ type: "CREATE_DAY", newDay: response.data.data.journal });
        }
      })
      .catch((error) => toast.error(error.message));
  };

  // DELETE : 피드 운동일지 삭제하기
  const requestDeleteFeedDiary = async (feedJournalId: number) => {
    await axios
      .delete(`${API_URL}/api/feeds/journal/${feedJournalId}`)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => toast.error(error.message));
  };

  // PATCH : 다른사람 일지 내 일지에 추가하기
  const requestPatchFeedDiaryShare = (journalId: number) => {
    axios
      .get(`${API_URL}/api/feeds/journal/${journalId}/scrap`)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => toast.error(error.message));
  };

  // POST : 피드 운동일지 내 보관함으로 스크랩하기
  const requestPostFeedDiaryScrap = async (journalId: number) => {
    await axios
      .post(`${API_URL}/api/feeds/journal/${journalId}/scrap`)
      .then((response) => {
        console.log(response.data);
        // setScrapCount(response.data.data.likeCnt);
      })
      .catch((error) => toast.error(error.message));
  };

  // DELETE : 피드 운동일지 내 보관함에서 스크랩 삭제하기
  const requestDeleteFeedDiaryScrap = async (journalId: number) => {
    await axios
      .delete(`${API_URL}/api/feeds/journal/${journalId}/scrap`)
      .then((response) => {
        console.log(response.data);
        // setScrapCount(response.data.data.likeCnt);
      })
      .catch((error) => toast.error(error.message));
  };

  // POST : 피드 좋아요 보내기
  const requestPostFeedDiaryLike = async (
    feedJournalId: number,
    setLikeCount: React.Dispatch<React.SetStateAction<number>>,
  ) => {
    await axios
      .post(`${API_URL}/api/feed-journals/${feedJournalId}/like`)
      .then((response) => {
        console.log(response.data);
        setLikeCount(response.data.data.likeCnt);
      })
      .catch((error) => toast.error(error.message));
  };
  // DELETE : 피드 좋아요 삭제하기
  const requestDeleteFeedDiaryLike = async (
    feedJournalId: number,
    setLikeCount: React.Dispatch<React.SetStateAction<number>>,
  ) => {
    await axios
      .delete(`${API_URL}/api/feed-journals/${feedJournalId}/like`)
      .then((response) => {
        console.log(response.data);
        setLikeCount(response.data.data.likeCnt);
      })
      .catch((error) => toast.error(error.message));
  };

  // 댓글 대댓글 관련------------------------------------------------------------
  // GET : 피드 댓글 가져오기 🤗
  const requestFeedComments = async (
    feedType: string,
    feedJournalId: number,
    page: number,
    setCommentsData: React.Dispatch<React.SetStateAction<CommentsDataProps>>,
  ) => {
    await axios
      .get(
        `${API_URL}/api/${feedType}/${feedJournalId}/comments?page=${page}&pageSize=${10}`,
      )
      .then((response) => {
        console.log("👋", response.data.data);
        setCommentsData((prevCommentsData) => ({
          ...prevCommentsData,
          comments:
            page !== 0
              ? [
                  ...(prevCommentsData.comments || []),
                  ...(response.data.data.comments || []),
                ]
              : [...(response.data.data.comments || [])],
          // 나머지 상태값도 업데이트해야 합니다.
          authority: response.data.data.authority,
          commentCnt: response.data.data.commentCnt,
          totalPage: response.data.data.totalPage,
          currentPage: response.data.data.currentPage,
        }));
      })
      .catch((error) => toast.error(error.message));
  };

  // GET : 피드 대댓글 가져오기
  const requestFeedCommentsReply = async (
    feedType: string,
    feedJournalId: number,
    commentId: number,
    setReplyData: React.Dispatch<React.SetStateAction<replyCommentProps>>,
  ) => {
    await axios
      .get(
        `${API_URL}/api/${feedType}/${feedJournalId}/comments/${commentId}/child-comment`,
      )
      .then((response) => {
        setReplyData(response.data.data);
      })
      .catch((error) => {
        toast.error(error.message);
        console.log("feedType", error.message);
      });
  };

  // POST : 댓글 + 대댓글 보내기 🤗
  const requestPostFeedComments = async (
    feedType: string,
    feedJournalId: number,
    comment: string,
    parentId?: number,
  ) => {
    const data: ReplyPostPayload = {
      comment: comment,
      parentId: parentId,
    };
    await axios
      .post(`${API_URL}/api/${feedType}/${feedJournalId}/comment`, data)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => toast.error(error.message));
  };
  // DELETE : 대댓글 삭제하기 🤗
  const requestDeleteFeedDiaryComments = (
    feedType: string,
    journalId: number,
    commentId: number,
  ) => {
    axios
      .delete(`${API_URL}/api/${feedType}/${journalId}/comments/${commentId}`)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => toast.error(error.message));
  };

  return {
    requestFeedDiaryDetail,
    requestFeedDiaryExerciseDetail,
    requestDeleteFeedDiary,
    requestPatchFeedDiaryShare,
    requestPostFeedDiaryScrap,
    requestDeleteFeedDiaryScrap,
    requestPostFeedDiaryLike,
    requestDeleteFeedDiaryLike,
    requestFeedComments,
    requestFeedCommentsReply,
    requestPostFeedComments,
    requestDeleteFeedDiaryComments,
  };
}
