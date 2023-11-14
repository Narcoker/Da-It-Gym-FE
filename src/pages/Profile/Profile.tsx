import Nav from "../../components/Nav/Nav";
import * as S from "./Profile.style";
import UserContent from "./components/UserContent/UserContent";
import UserProfile from "./components/UserProfile/UserProfile";

export interface ProfileData {
  healthClubName: string;
  followerCount: number;
  followingCount: number;
  journalCount: number;
}

export default function Profile() {
  return (
    <>
      <Nav type="top" />
      <S.Section>
        <UserProfile />
        <UserContent />
      </S.Section>
      <Nav type="home" />
    </>
  );
}
