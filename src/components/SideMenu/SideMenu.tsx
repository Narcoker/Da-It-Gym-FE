import * as S from "./SideMenu.style";
import * as Icon from "../Icon";
import { useNavigate } from "react-router";
import { useSetRecoilState } from "recoil";
import { sideMenuState } from "../../recoil/navState";
interface Props {
  sideMenu: boolean;
}
function SideMenu({ sideMenu }: Props) {
  const navigate = useNavigate();
  const setSideMenu = useSetRecoilState(sideMenuState);
  const handleNav = (destination: string) => {
    navigate(destination);
    setSideMenu(false);
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
      <S.SideMenuBox onClick={() => handleNav("/my?section=routines")}>
        <S.SearchIcon>
          <Icon.MyRoutine />
        </S.SearchIcon>
        <S.SideMenuTitle>내 루틴</S.SideMenuTitle>
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
      <S.SideMenuBox onClick={() => handleNav("/feed/diary")}>
        <S.SearchIcon>
          <Icon.ExerciseLogs />
        </S.SearchIcon>
        <S.SideMenuTitle>운동일지</S.SideMenuTitle>
      </S.SideMenuBox>
      <S.Line />
      <S.SideMenuBox onClick={() => handleNav("/my")}>
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
      <S.SideMenuBox onClick={() => handleNav("/")}>
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
