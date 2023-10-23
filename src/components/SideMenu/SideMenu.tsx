import * as S from "./SideMenu.style";
import * as Icon from "../Icon";
interface Props {
  sideMenu: boolean;
}
function SideMenu({ sideMenu }: Props) {
  return (
    <S.SideWrapper sideMenu={sideMenu}>
      <S.SideMenuBox>
        <S.SearchIcon>
          <Icon.Search />
        </S.SearchIcon>
        <S.SideMenuTitle>유저 찾기</S.SideMenuTitle>
      </S.SideMenuBox>
      <S.SideMenuBox>
        <S.SearchIcon>
          <Icon.MyRoutine />
        </S.SearchIcon>
        <S.SideMenuTitle>내 루틴</S.SideMenuTitle>
      </S.SideMenuBox>
      <S.SideMenuBox>
        <S.SearchIcon>
          <Icon.MyExerciseLog />
        </S.SearchIcon>
        <S.SideMenuTitle>내 운동일지</S.SideMenuTitle>
      </S.SideMenuBox>
      <S.SideMenuBox>
        <S.SearchIcon>
          <Icon.Routines />
        </S.SearchIcon>
        <S.SideMenuTitle>루틴</S.SideMenuTitle>
      </S.SideMenuBox>
      <S.SideMenuBox>
        <S.SearchIcon>
          <Icon.ExerciseLogs />
        </S.SearchIcon>
        <S.SideMenuTitle>운동일지</S.SideMenuTitle>
      </S.SideMenuBox>
      <S.SideMenuBox>
        <S.SearchIcon>
          <Icon.My />
        </S.SearchIcon>
        <S.SideMenuTitle>마이</S.SideMenuTitle>
      </S.SideMenuBox>
      <S.SideMenuBox>
        <S.SearchIcon>
          <Icon.HeadSet />
        </S.SearchIcon>
        <S.SideMenuTitle>고객 센터</S.SideMenuTitle>
      </S.SideMenuBox>
      <S.SideMenuBox>
        <S.SearchIcon>
          <Icon.LogOut />
        </S.SearchIcon>
        <S.SideMenuTitle>로그아웃</S.SideMenuTitle>
      </S.SideMenuBox>
    </S.SideWrapper>
  );
}

export default SideMenu;
