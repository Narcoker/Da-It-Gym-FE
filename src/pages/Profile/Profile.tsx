import Nav from "../../components/Nav/Nav";
import * as S from "./Profile.style";
import UserContent from "./components/UserContent/UserContent";
import UserProfile from "./components/UserProfile/UserProfile";

export default function Profile() {
  return (
    <>
      <Nav type="top" />
      <S.Section>
        <UserProfile nickname="user-nick" place="조재균 짐" />
        <UserContent />
      </S.Section>
      <Nav type="home" />
    </>
  );
}
