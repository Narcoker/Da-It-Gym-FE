import { useSearchParams } from "react-router-dom";
import Nav from "../../components/Nav/Nav";
import TrainerEdit from "./components/TrainerEdit/TrainerEdit";
import UserEdit from "./components/UserEdit/UserEdit";
import * as S from "./EditProfile.style";
import FindGymModal from "./components/FindGymModal/FindGymModal";

export default function EditProfile() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("section");

  const logoutHandler = () => {
    console.log("로그아웃 요청");
  };

  const deleteUserHandler = () => {
    console.log("회원탈퇴 요청");
  };
  return (
    <>
      <Nav type="top" />
      <>
        {query === "gym" ? (
          <FindGymModal />
        ) : (
          <>
            <UserEdit />
            <TrainerEdit />
          </>
        )}
      </>
      <S.Footer>
        <S.Button onClick={logoutHandler}>로그아웃</S.Button>
        <S.Span>|</S.Span>
        <S.Button onClick={deleteUserHandler}>회원탈퇴</S.Button>
      </S.Footer>
      <Nav type="home" />
    </>
  );
}
