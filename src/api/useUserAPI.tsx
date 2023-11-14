import { useNavigate } from "react-router";
import { useAxios } from "./useAxios";
import { toast } from "react-toastify";
import { useSetRecoilState } from "recoil";
import { userInfoState } from "../recoil/userInfoState";

export function useUserAPI() {
  interface UserInfo {
    nickname: string;
    userImg: string;
    preferredSplit: string;
  }
  const axios = useAxios();
  const API_URL = import.meta.env.VITE_API_URL;
  const navigate = useNavigate();
  const setUserInfo = useSetRecoilState(userInfoState);
  // 카카오 로그인
  const requestKaKaoLogin = async (code: string) => {
    await axios
      .get(`${API_URL}/login/oauth2/callback/kakao?code=${code}`, {
        headers: {
          "Content-Type": "application/json;charset=utf-8",
          "Access-Control-Allow-Origin": "*", // 클라이언트 측에서 설정하지 않아야 함
        },
      })
      .then((response) => {
        console.log(response.data.data.alreadyJoined);
        console.log("ddd", response.data.data.nickname);
        //계속 쓸 정보들( ex: 이름) 등은 localStorage에 저장
        setUserInfo((prev: UserInfo) => ({
          ...prev,
          nickname: response.data.data.nickname,
          preferredSplit: response.data.data.preferredSplit,
          userImg: response.data.data.userProfileImgUrl,
          introduction: response.data.data.introduction,
          healthClubName: response.data.data.healthClubName,
        }));
        localStorage.setItem("accessToken", response.headers.authorization);
        localStorage.setItem("alreadyJoined", response.data.data.alreadyJoined);
        // 처음 로그인 한 사람은 signup
        if (response.data.data.alreadyJoined) {
          navigate(`/profile/${response.data.data.nickname}`);
        } else {
          navigate("/signup");
        }
      })
      .catch((error) => toast.error(error.message));
  };
  // 근근근 로그아웃
  const requestLogout = () => {
    axios
      .post(`${API_URL}/api/users/logout`)
      .then(() => {
        localStorage.clear();
      })
      .catch((error) => toast.error(error));
  };
  // // 카카오 로그아웃
  // const requestKaKaoLogout = () => {
  //   axios
  //     .get(
  //       `https://kauth.kakao.com/oauth/logout?client_id=${REST_API_KEY}&logout_redirect_uri=${REDIRECT_URI}`,
  //     )
  //     .then(() => {})
  //     .catch((error) => toast.error(error));
  // };
  // 회원 탈퇴
  const requestDeleteKaKaoWithdraw = async () => {
    await axios
      .patch(`${API_URL}/api/users/withdraw`)
      .then((response) => {
        console.log(response);
        if (response.data.message === "회원탈퇴 성공") {
          localStorage.removeItem("accessToken");
          navigate("/login");
        }
      })
      .catch((error) => toast.error(error.message));
  };

  // 회원가입시 닉네임 변경
  const requestPatchNickname = async (nickname: string) => {
    await axios
      .patch(`${API_URL}/api/users/nickname`, nickname, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        console.log(response);
        setUserInfo((prev: UserInfo) => ({
          ...prev,
          nickname: response.data.data.nickname,
        }));
      })
      .catch((error) => toast.error(error.message));
  };

  // 닉네임 중복 검증
  const requestDuplicatedNickname = async (
    nickname: string,
    setIsDuplicate: React.Dispatch<React.SetStateAction<string>>,
  ) => {
    await axios
      .get(`${API_URL}/api/users/check-duplication?nickname=${nickname}`)
      .then((response) => {
        console.log(response.data.status.message);
        setIsDuplicate(response.data.status.message);
        //message 사용가능이면 setDuplicatedNicknameMessage("사용가능")
        //중복이면  setDuplicatedNicknameMessage("중복")
      })
      .catch((error) => toast.error(error.message));
  };

  return {
    requestKaKaoLogin,
    requestLogout,
    requestDeleteKaKaoWithdraw,
    requestPatchNickname,
    requestDuplicatedNickname,
  };
}
