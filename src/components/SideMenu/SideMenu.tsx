import * as S from "./SideMenu.style";
import * as Icon from "../Icon";
import { useNavigate } from "react-router";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { sideMenuState } from "../../recoil/navState";
import { useUserAPI } from "../../api/useUserAPI";
import { userInfoState } from "../../recoil/userInfoState";
interface Props {
  sideMenu: boolean;
}
function SideMenu({ sideMenu }: Props) {
  const REST_API_KEY = import.meta.env.VITE_KAKAO_REST_API;
  const LOGOUT_REDIRECT_URI = `http://localhost:5173/login`;
  const link = `https://kauth.kakao.com/oauth/logout?client_id=${REST_API_KEY}&logout_redirect_uri=${LOGOUT_REDIRECT_URI}`;
  const { nickname } = useRecoilValue(userInfoState);
  const navigate = useNavigate();
  const setSideMenu = useSetRecoilState(sideMenuState);
  const handleNav = (destination: string) => {
    navigate(destination);
    setSideMenu(false);
  };
  const { requestLogout } = useUserAPI();
  const handleLogout = () => {
    window.location.href = link;
    requestLogout();
  };
  return (
    <S.SideWrapper sideMenu={sideMenu}>
      <S.SideMenuBox onClick={() => handleNav("/feed/search-user")}>
        <S.SearchIcon>
          <Icon.Search />
        </S.SearchIcon>
        <S.SideMenuTitle>유저 찾기</S.SideMenuTitle>
      </S.SideMenuBox>
      <S.Line />
      <S.SideMenuBox onClick={() => handleNav("/feed/routine/new")}>
        <S.SearchIcon>
          <Icon.MyRoutine />
        </S.SearchIcon>
        <S.SideMenuTitle>루틴 작성</S.SideMenuTitle>
      </S.SideMenuBox>
      <S.Line />
      <S.SideMenuBox onClick={() => handleNav("/diary")}>
        <S.SearchIcon>
          <Icon.MyExerciseLog />
        </S.SearchIcon>
        <S.SideMenuTitle>내 운동일지</S.SideMenuTitle>
      </S.SideMenuBox>
      <S.Line />
      <S.SideMenuBox onClick={() => handleNav("/feed/routine")}>
        <S.SearchIcon>
          <Icon.Routines />
        </S.SearchIcon>
        <S.SideMenuTitle>루틴</S.SideMenuTitle>
      </S.SideMenuBox>
      <S.Line />
      <S.SideMenuBox onClick={() => handleNav("/feed/diary?section=total")}>
        <S.SearchIcon>
          <Icon.ExerciseLogs />
        </S.SearchIcon>
        <S.SideMenuTitle>운동일지</S.SideMenuTitle>
      </S.SideMenuBox>
      <S.Line />
      <S.SideMenuBox onClick={() => handleNav(`/profile/${nickname}?section=routines`)}>
        <S.SearchIcon>
          <Icon.My />
        </S.SearchIcon>
        <S.SideMenuTitle>마이</S.SideMenuTitle>
      </S.SideMenuBox>
      <S.Line />
      <S.SideMenuBox onClick={() => handleNav("/")}>
        <S.SearchIcon>
          <Icon.HeadSet />
        </S.SearchIcon>
        <S.SideMenuTitle>고객 센터</S.SideMenuTitle>
      </S.SideMenuBox>
      <S.Line />
      <S.SideMenuBox onClick={handleLogout}>
        <S.SearchIcon>
          <Icon.LogOut />
        </S.SearchIcon>
        <S.SideMenuTitle>로그아웃</S.SideMenuTitle>
      </S.SideMenuBox>
      <S.Line />
    </S.SideWrapper>
  );
}

export default SideMenu;
