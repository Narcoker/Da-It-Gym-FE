import axios from "axios";
import { toast } from "react-toastify";

interface EditProfilePayload {
  userImg: File;
  nickname: string;
  description: string;
  gymName: string;
  split: string;
}

interface EvaluateTrainerPayload {
  certificates: string[];
  certificateImgs: File[];
  awards: string[];
  awardImgs: File[];
}

interface InbodyPayload {
  testDate: string;
  inbodyScore: number;
  muscle: number;
  fatPercent: number;
  weight: number;
  basalMetabolicRate: number;
}

export default function useMyAPI() {
  const API_URL = import.meta.env.API_URL;

  // 프로필 편집
  const requestEditProfile = (userId: number, payload: EditProfilePayload) => {
    axios
      .patch(`${API_URL}/api/profiles/${userId}`, payload)
      .then()
      .catch((err) => toast.error(err.message));
  };

  // 트레이너 심사 신청
  const requestEvaluateTrainer = (payload: EvaluateTrainerPayload) => {
    axios
      .post(`${API_URL}/api/profiles/career/submit`, payload)
      .then()
      .catch((err) => toast.error(err.message));
  };

  // 인바디 등록
  const requestInbody = (payload: InbodyPayload) => {
    axios
      .post(`${API_URL}/api/profiles/inbody`, payload)
      .then()
      .catch((err) => toast.error(err.message));
  };

  // 인바디 조회
  const requestGetInbody = (userId: number) => {
    axios
      .get(`${API_URL}/api/profiles/${userId}/inbody`)
      .then()
      .catch((err) => toast.error(err.message));
  };

  return {
    requestEditProfile,
    requestEvaluateTrainer,
    requestInbody,
    requestGetInbody,
  };
}
