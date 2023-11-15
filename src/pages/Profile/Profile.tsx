import Nav from "../../components/Nav/Nav";
import * as S from "./Profile.style";
import UserContent from "./components/UserContent/UserContent";
import UserProfile from "./components/UserProfile/UserProfile";

export interface ProfileData {
  follower: boolean;
  followerCount: number;
  followingCount: number;
  healthClubName: string;
  introduction: string;
  journalCount: number;
  nickname: string;
  perferredSplit: string;
  role: string;
  userProfileImgUrl: string;
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
