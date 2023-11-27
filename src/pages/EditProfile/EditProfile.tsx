import { useUserAPI } from "../../api/useUserAPI";
import TrainerEdit from "./components/TrainerEdit/TrainerEdit";
import UserEdit from "./components/UserEdit/UserEdit";
import * as S from "./EditProfile.style";

export default function EditProfile() {
  const REST_API_KEY = import.meta.env.VITE_KAKAO_REST_API;
  const VITE_SITE_URL = import.meta.env.VITE_SITE_URL;
  const LOGOUT_REDIRECT_URI = `${VITE_SITE_URL}/login`;
  const link = `https://kauth.kakao.com/oauth/logout?client_id=${REST_API_KEY}&logout_redirect_uri=${LOGOUT_REDIRECT_URI}`;
  const { requestLogout } = useUserAPI();

  // 로그아웃
  const logoutHandler = async () => {
    await requestLogout("");
    window.location.href = link;
  };

  // 회원탈퇴
  const deleteUserHandler = () => {};

  return (
    <>
      <>
        <UserEdit />
        <TrainerEdit />
      </>
      <S.Footer>
        <S.Button onClick={logoutHandler}>로그아웃</S.Button>
        <S.Span>|</S.Span>
        <S.Button onClick={deleteUserHandler}>회원탈퇴</S.Button>
      </S.Footer>
    </>
  );
}
