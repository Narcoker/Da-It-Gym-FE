import { useNavigate } from "react-router";
import * as S from "./Nav.style";
import * as Icon from "../../components/Icon";
import { useRecoilState } from "recoil";
import { sideMenuState } from "../../recoil/navState";
import SideMenu from "../SideMenu/SideMenu";

interface Props {
  type: "top" | "home" | "chat";
  //   onClick: () => void;
}

export default function Nav({ type }: Props) {
  const [sideMenu, setSideMenu] = useRecoilState(sideMenuState);

  const navigate = useNavigate();
  const handleNav = (destination: string) => {
    navigate(destination);
    setSideMenu(false);
  };
  const handleSideMenu = () => {
    setSideMenu((prev) => !prev);
  };
  return (
    <>
      {type === "top" && (
        <S.NavTopWrapper>
          <S.MenuBox>
            <S.NavIcon onClick={handleSideMenu}>
              <Icon.Menu />
            </S.NavIcon>
            {sideMenu && <SideMenu sideMenu={sideMenu} />}
          </S.MenuBox>
          <S.MessengerBox onClick={() => handleNav("/chat/rooms")}>
            <S.NavIcon>
              <Icon.Messenger />
            </S.NavIcon>
          </S.MessengerBox>
        </S.NavTopWrapper>
      )}
      {type === "home" && (
        <S.NavBottomWrapper>
          <S.AllNoteBox onClick={() => handleNav("/feed/diary")}>
            <S.NavIcon>
              <Icon.ExerciseLogs />
            </S.NavIcon>
            <S.NavMenuTitle>운동일지</S.NavMenuTitle>
          </S.AllNoteBox>
          <S.AllRoutineBox onClick={() => handleNav("/feed/routine")}>
            <S.NavIcon>
              <Icon.Routines />
            </S.NavIcon>
            <S.NavMenuTitle>루틴</S.NavMenuTitle>
          </S.AllRoutineBox>
          <S.MypageBox onClick={() => handleNav("/my")}>
            <S.NavIcon>
              <Icon.My />
            </S.NavIcon>
            <S.NavMenuTitle>마이</S.NavMenuTitle>
          </S.MypageBox>
          <S.MyRoutineBox onClick={() => handleNav("/feed/routine/new")}>
            <S.NavIcon>
              <Icon.MyRoutine />
            </S.NavIcon>
            <S.NavMenuTitle>루틴 작성</S.NavMenuTitle>
          </S.MyRoutineBox>
          <S.MyRoutineBox onClick={() => handleNav("/diary")}>
            <S.NavIcon>
              <Icon.MyExerciseLog />
            </S.NavIcon>
            <S.NavMenuTitle>내 운동일지</S.NavMenuTitle>
          </S.MyRoutineBox>
        </S.NavBottomWrapper>
      )}
      {type === "chat" && (
        <S.NavBottomWrapper>
          <S.FollowListBox onClick={() => handleNav("/chat/search/user")}>
            <S.NavIcon>
              <Icon.Search />
            </S.NavIcon>
            <S.NavMenuTitle>유저 검색</S.NavMenuTitle>
          </S.FollowListBox>
          <S.MypageBox onClick={() => handleNav("/")}>
            <S.NavIcon>
              <Icon.My />
            </S.NavIcon>
            <S.NavMenuTitle>마이</S.NavMenuTitle>
          </S.MypageBox>
          <S.ChatRoomBox onClick={() => handleNav("/chat/rooms")}>
            <S.NavIcon>
              <Icon.ChatRoom />
            </S.NavIcon>
            <S.NavMenuTitle>채팅방</S.NavMenuTitle>
          </S.ChatRoomBox>
        </S.NavBottomWrapper>
      )}
    </>
  );
}

//✨ 사용법
{
  /* <Nav type="top" />
<Nav type="home" /> 
<Nav type="chat" /> */
}
