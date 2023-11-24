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
  preferredSplit: string;
  role: string;
  userProfileImgUrl: string;
  submitTrainerQualification: boolean;
}

export default function Profile() {
  return (
    <>
      <S.Section>
        <UserProfile />
        <UserContent />
      </S.Section>
    </>
  );
}
