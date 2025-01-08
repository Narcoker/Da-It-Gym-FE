import { useState } from "react";
import FollowModal from "../FollowModal/FollowModal";
import * as S from "./UserProfile.style";
import InbodyModal from "../InbodyModal/InbodyModal";
import { useNavigate, useParams } from "react-router";
import useProfileAPI from "../../../../api/useProfileAPI";
import { useRecoilValue } from "recoil";
import { userInfoState } from "../../../../recoil/userInfoState";
import useCreateChatRoomAPI, {
  RequestCreateChatRoom,
} from "../../../../api/useChatRoomAPI";

export type FollowType = "" | "follow" | "follower";

export default function UserProfile() {
  const navigate = useNavigate();
  const params = useParams();
  const { useRequestProfile, useRequestFollow, useRequestDeleteFollow } = useProfileAPI();
  const { data: userProfile, refetch: userProfileRefetch } = useRequestProfile(params.nickname as string);
  const { requestCreateChatRoom } = useCreateChatRoomAPI();
  const userInfo = useRecoilValue(userInfoState);
  const [followType, setFollowType] = useState<FollowType>("");
  const [isInbodyClick, setIsInbodyClick] = useState(false);

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

  const sendMessageHandler = async () => {
    const payload: RequestCreateChatRoom = { receiver: userProfile?.data.data.nickname };
    const roomId = await requestCreateChatRoom(payload);
    navigate(`/chat/${roomId}`);
  };

  const followMutation = useRequestFollow(userProfileRefetch);
  const followHandler = async () => {
    followMutation.mutate(params.nickname as string);
  };

  const deleteFollowMutation = useRequestDeleteFollow(userProfileRefetch);
  const followDeleteHandler = async () => {
    deleteFollowMutation.mutate(params.nickname as string);
  };
  return (
    <>
      <S.ProfileWrapper>
        <S.ProfileDiv>
          <S.ProfileImg src={userProfile?.data.data.userProfileImgUrl} />
          {userProfile?.data.data.submitTrainerQualification && (
            <S.ProfileSpan>심사 중</S.ProfileSpan>
          )}
        </S.ProfileDiv>
        <S.ProfileBox>
          <S.ProfileContent>
            <S.Nickname>
              {userProfile?.data.data.nickname}
              {userInfo.nickname === userProfile?.data.data.nickname && <S.Role>{userProfile?.data.data.role}</S.Role>}
            </S.Nickname>
            {userProfile?.data.data.healthClubName && (
              <S.Place>{`${userProfile?.data.data.healthClubName}에서 운동 중`}</S.Place>
            )}
          </S.ProfileContent>
          <S.ButtonBox>
            {userInfo.nickname === userProfile?.data.data.nickname && (
              <>
                <S.ProfileButton onClick={profileHandler}>프로필 편집</S.ProfileButton>
                <S.ProfileButton onClick={inbodyHandler}>인바디</S.ProfileButton>
              </>
            )}
            {userInfo.nickname !== userProfile?.data.data.nickname && (
              <>
                <S.ProfileButton onClick={sendMessageHandler}>메세지 보내기</S.ProfileButton>
                {userProfile?.data.data.follower
                 ? <S.FollowDeleteButton onClick={followDeleteHandler}>팔로우 취소</S.FollowDeleteButton>
                 : <S.ProfileButton onClick={followHandler}>팔로우</S.ProfileButton>
                }
              </>
            )}
          </S.ButtonBox>

          <S.CounterBox>
            <S.CounterDiv as="span">{`일지수 ${userProfile?.data.data.journalCount}`}</S.CounterDiv>
            <S.CounterButton onClick={followerModalHandler}>{`팔로워 ${userProfile?.data.data.followerCount}`}</S.CounterButton>
            <S.CounterButton onClick={followModalHandler}>{`팔로우 ${userProfile?.data.data.followingCount}`}</S.CounterButton>
          </S.CounterBox>
        </S.ProfileBox>
      </S.ProfileWrapper>
      <S.Desc>
        <S.DivideBox>
          선호하는 분할
          <S.PreferredSplit>{userProfile?.data.data.preferredSplit}</S.PreferredSplit>
        </S.DivideBox>
        <S.Introduce>
          <pre>{userProfile?.data.data.introduction}</pre>
        </S.Introduce>
      </S.Desc>
      {followType && <FollowModal type={followType} setFollowType={setFollowType} />}
      {isInbodyClick && <InbodyModal setIsInbodyClick={setIsInbodyClick} />}
    </>
  );
}
