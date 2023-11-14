import { useState, useEffect } from "react";
import FollowModal from "../FollowModal/FollowModal";
import * as S from "./UserProfile.style";
import InbodyModal from "../InbodyModal/InbodyModal";
import { useNavigate, useParams } from "react-router";
import { ProfileData } from "../../Profile";
import useProfileAPI from "../../../../api/useProfileAPI";
import { useRecoilValue } from "recoil";
import { userInfoState } from "../../../../recoil/userInfoState";

export type FollowType = "" | "follow" | "follower";

export default function UserProfile() {
  const navigate = useNavigate();
  const [followType, setFollowType] = useState<FollowType>("");
  const [isInbodyClick, setIsInbodyClick] = useState(false);
  const [profileData, setProfileData] = useState<ProfileData>({
    healthClubName: "",
    followerCount: 0,
    followingCount: 0,
    journalCount: 0,
  });

  const { followerCount, followingCount, healthClubName, journalCount } = profileData;

  const { requestProfile, requestFollow, requestDeleteFollow } = useProfileAPI();
  const userInfo = useRecoilValue(userInfoState);
  const params = useParams();
  useEffect(() => {
    console.log(params.nickname);
    requestProfile(params.nickname as string, setProfileData);
  }, []);

  const followModalHandler = () => {
    setFollowType("follow");
  };

  const followerModalHandler = () => {
    setFollowType("follower");
  };

  const inbodyHandler = () => {
    setIsInbodyClick(true);
  };

  const profileHandler = () => {
    navigate("/profile/edit");
  };

  const sendMessageHandler = () => {
    console.log("채팅방 열기");
  };

  const followHandler = () => {
    requestFollow(params.nickname as string);
  };

  const followDeleteHandler = () => {
    requestDeleteFollow(params.nickname as string);
  };
  return (
    <>
      <S.ProfileWrapper>
        <S.ProfileImg src={profileData.userImg} />
        <S.ProfileBox>
          <S.ProfileContent>
            <S.Nickname>{userInfo.nickname}</S.Nickname>
            {healthClubName && <S.Place>{`${healthClubName}에서 운동 중`}</S.Place>}
          </S.ProfileContent>
          <S.ButtonBox>
            <S.ProfileButton onClick={profileHandler}>프로필 편집</S.ProfileButton>
            <S.ProfileButton onClick={inbodyHandler}>인바디</S.ProfileButton>
            <S.ProfileButton onClick={sendMessageHandler}>메세지 보내기</S.ProfileButton>
            <S.ProfileButton onClick={followHandler}>팔로우</S.ProfileButton>
            <S.FollowDeleteButton onClick={followDeleteHandler}>
              팔로우 취소
            </S.FollowDeleteButton>
          </S.ButtonBox>
          <S.CounterBox>
            <S.CounterButton>{`일지수 ${journalCount}`}</S.CounterButton>
            <S.CounterButton
              onClick={followerModalHandler}
            >{`팔로워 ${followerCount}`}</S.CounterButton>
            <S.CounterButton
              onClick={followModalHandler}
            >{`팔로우 ${followingCount}`}</S.CounterButton>
          </S.CounterBox>
        </S.ProfileBox>
      </S.ProfileWrapper>
      <S.Desc>
        <S.DivideBox>
          선호하는 분할
          <S.Select name="divide" disabled value="two">
            <option value="무분할">무분할</option>
            <option value="2분할">2분할</option>
            <option value="3분할">3분할</option>
            <option value="4분할">4분할</option>
            <option value="5분할">5분할</option>
            <option value="6분할">6분할+</option>
          </S.Select>
        </S.DivideBox>
        <S.Introduce>자기소개 시작</S.Introduce>
      </S.Desc>
      {followType && <FollowModal type={followType} setFollowType={setFollowType} />}
      {isInbodyClick && <InbodyModal setIsInbodyClick={setIsInbodyClick} />}
    </>
  );
}
