import { toast } from "react-toastify";
import { useAxios } from "./useAxios";
import { Inbody, InbodyRecord } from "../pages/Profile/components/Inbody/Inbody";
import { ProfileData } from "../pages/Profile/Profile";
import { useNavigate } from "react-router";
import { FollowUser } from "../pages/Profile/components/FollowModal/FollowModal";
import {
  Award,
  Cerificate,
} from "../pages/EditProfile/components/TrainerEdit/TrainerEdit";
import { SetterOrUpdater } from "recoil";
import { UserInfo } from "../recoil/userInfoState";
import { RoutineSummary } from "../pages/Profile/components/Routines/Routines";
import { Diary } from "../pages/Profile/components/Diaries/Diaries";

interface EditProfilePayload {
  userProfileImg?: File;
  request: {
    nickname: string;
    introduction: string;
    gymName: string;
    preferredSplit: string;
  };
}

interface EvaluateTrainerPayload {
  request: {
    certifications: Cerificate[];
    awards: Award[];
  };

  certificationImgs: File[];
  awardImgs: File[];
}

export default function useProfileAPI() {
  const API_URL = import.meta.env.VITE_API_URL;
  const axios = useAxios();
  const navigate = useNavigate();
  const requestProfile = (
    nickname: string,
    setProfileData: React.Dispatch<React.SetStateAction<ProfileData>>,
  ) => {
    axios
      .get(`${API_URL}/api/users/${nickname}`)
      .then((res) => {
        console.log(res.data.data);
        setProfileData(res.data.data);
      })
      .catch((err) => toast.error(err.message));
  };

  // 프로필 편집
  const requestEditProfile = (
    nickname: string,
    payload: EditProfilePayload,
    setUserInfo: SetterOrUpdater<UserInfo>,
  ) => {
    const formData = new FormData();
    formData.append("userProfileImg", payload.userProfileImg as File);
    formData.append("request", JSON.stringify(payload.request));

    axios
      .put(`${API_URL}/api/users/${nickname}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        setUserInfo(res.data.data);
        navigate(`/profile/${payload.request.nickname}?section=routines`);
      })
      .catch((err) => toast.error(err.message));
  };

  // 트레이너 심사 신청
  const requestEvaluateTrainer = (payload: EvaluateTrainerPayload) => {
    const formData = new FormData();
    for (const img of payload.certificationImgs) {
      formData.append("certificateImgs", img);
    }

    for (const img of payload.awardImgs) {
      formData.append("awardImgs", img);
    }
    formData.append("request", JSON.stringify(payload.request));
    axios
      .post(`${API_URL}/api/users/career/submit`, formData)
      .then((res) => console.log(res))
      .catch((err) => toast.error(err.message));
  };

  // 인바디 등록
  const requestInbody = (payload: InbodyRecord) => {
    axios
      .post(`${API_URL}/api/users/inbodies`, payload)
      .then()
      .catch((err) => toast.error(err.message));
  };

  // 인바디 조회
  const requestGetInbody = (
    nickname: string,
    setInbodyData: React.Dispatch<React.SetStateAction<Inbody>>,
  ) => {
    axios
      .get(`${API_URL}/api/users/${nickname}/inbodies`)
      .then((res) => {
        const inbodyData: Inbody = res.data.data;

        if (inbodyData.records.length > 0) {
          const data: Inbody = res.data.data;
          const sortedData = {
            ...data,
            records: data.records.sort(
              (a, b) => new Date(a.measureAt).getTime() - new Date(b.measureAt).getTime(),
            ),
          };

          setInbodyData(sortedData);
        } else {
          setInbodyData((prev) => {
            return { ...prev, avg: inbodyData.avg };
          });
        }
      })
      .catch((err) => toast.error(err.message));
  };

  // 팔로워 목록 가져오기
  const requestFollowerList = (
    nickname: string,
    setUsers: React.Dispatch<React.SetStateAction<FollowUser[]>>,
  ) => {
    axios
      .get(`${API_URL}/api/follows/follower-list/${nickname}`)
      .then((res) => setUsers(res.data.data.followList))
      .catch((err) => toast.error(err.message));
  };

  const requestFollowList = (
    nickname: string,
    setUsers: React.Dispatch<React.SetStateAction<FollowUser[]>>,
  ) => {
    axios
      .get(`${API_URL}/api/follows/following-list/${nickname}`)
      .then((res) => setUsers(res.data.data.followList))
      .catch((err) => toast.error(err.message));
  };

  const requestFollow = (nickname: string) => {
    axios
      .post(`${API_URL}/api/follows/${nickname}`)
      .then((res) => console.log(res))
      .catch((err) => toast.error(err.message));
  };
  const requestDeleteFollow = (nickname: string) => {
    axios
      .delete(`${API_URL}/api/follows/${nickname}`)
      .then()
      .catch((err) => toast.error(err.error));
  };

  // 사용자 피드 운동일지 조회 요청
  const requestFeedDiaryList = (
    nickname: string,
    page: number,
    setFeedDiaryData: React.Dispatch<React.SetStateAction<Diary[]>>,
  ) => {
    axios
      .get(`${API_URL}/api/feeds/user/${nickname}?page=${page}`)
      .then((res) => {
        const totalPage = res.data.data.totalPage;
        if (page <= totalPage) {
          setFeedDiaryData(res.data.data.feedExerciseJournalLists);
        }
      })
      .catch((err) => toast.error(err.message));
  };

  // 피드 운동일지 보관함 조회
  const requestFeedDiaryScrap = (
    nickname: string,
    page: number,
    setFeedDiaryData: React.Dispatch<React.SetStateAction<Diary[]>>,
  ) => {
    axios
      .get(`${API_URL}/api/feeds/user/${nickname}/scrap?page=${page}`)
      .then((res) => {
        const totalPage = res.data.data.totalPage;
        if (page <= totalPage) {
          setFeedDiaryData(res.data.data.feedExerciseJournalLists);
        }
      })
      .catch((err) => toast.error(err.message));
  };

  // 피드 루틴 조회
  const requestFeedRoutineList = (
    nickname: string,
    page: number,
    setRoutines: React.Dispatch<React.SetStateAction<RoutineSummary[]>>,
    hasNext: React.MutableRefObject<boolean>,
    // setPage: React.Dispatch<React.SetStateAction<number>>,
  ) => {
    axios
      .get(`${API_URL}/api/routines/${nickname}?page=${page}&size=20`)
      .then((res) => {
        setRoutines((prev) => [...prev, ...res.data.data.routines]);
        hasNext.current = res.data.data.hasNext;
      })
      .catch((err) => toast.error(err.message));
  };

  // 피드 운동일지 보관함 조회
  const requestFeedRoutineScrap = (
    setRoutines: React.Dispatch<React.SetStateAction<RoutineSummary[]>>,
    page: number,
    hasNext: React.MutableRefObject<boolean>,
    // setPage: React.Dispatch<React.SetStateAction<number>>,
  ) => {
    axios
      .get(`${API_URL}/api/routines/scraps?page=${page}&size=20`)
      .then((res) => {
        setRoutines((prev) => [...prev, ...res.data.data.routines]);
        hasNext.current = res.data.data.hasNext;
      })
      .catch((err) => toast.error(err.message));
  };

  return {
    requestEditProfile,
    requestEvaluateTrainer,
    requestInbody,
    requestGetInbody,
    requestProfile,
    requestFollowerList,
    requestFollowList,
    requestFollow,
    requestDeleteFollow,
    requestFeedDiaryList,
    requestFeedDiaryScrap,
    requestFeedRoutineList,
    requestFeedRoutineScrap,
  };
}
