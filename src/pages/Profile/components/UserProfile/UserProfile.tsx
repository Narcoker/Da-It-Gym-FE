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
  const [followType, setFollowType] = useState<FollowType>("");
  const [isInbodyClick, setIsInbodyClick] = useState(false);
  const { useRequestProfile } = useProfileAPI();
  const { data } = useRequestProfile(params.nickname as string);
  const { requestFollow, requestDeleteFollow } = useProfileAPI();
  const { requestCreateChatRoom } = useCreateChatRoomAPI();
  const userInfo = useRecoilValue(userInfoState);

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
    const payload: RequestCreateChatRoom = { receiver: data?.data.data.nickname };
    const roomId = await requestCreateChatRoom(payload);
    navigate(`/chat/${roomId}`);
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
        <S.ProfileDiv>
          <S.ProfileImg src={data?.data.data.userProfileImgUrl} />
          {data?.data.data.submitTrainerQualification && (
            <S.ProfileSpan>심사 중</S.ProfileSpan>
          )}
        </S.ProfileDiv>
        <S.ProfileBox>
          <S.ProfileContent>
            <S.Nickname>
              {data?.data.data.nickname}
              {userInfo.nickname === data?.data.data.nickname && (
                <S.Role>{data?.data.data.role}</S.Role>
              )}
            </S.Nickname>
            {data?.data.data.healthClubName && (
              <S.Place>{`${data?.data.data.healthClubName}에서 운동 중`}</S.Place>
            )}
          </S.ProfileContent>
          <S.ButtonBox>
            {userInfo.nickname === data?.data.data.nickname && (
              <>
                <S.ProfileButton onClick={profileHandler}>프로필 편집</S.ProfileButton>
                <S.ProfileButton onClick={inbodyHandler}>인바디</S.ProfileButton>
              </>
            )}
            {userInfo.nickname !== data?.data.data.nickname && (
              <>
                <S.ProfileButton onClick={sendMessageHandler}>
                  메세지 보내기
                </S.ProfileButton>
                {data?.data.data.follower ? (
                  <S.FollowDeleteButton onClick={followDeleteHandler}>
                    팔로우 취소
                  </S.FollowDeleteButton>
                ) : (
                  <S.ProfileButton onClick={followHandler}>팔로우</S.ProfileButton>
                )}
              </>
            )}
          </S.ButtonBox>

          <S.CounterBox>
            <S.CounterDiv as="span">{`일지수 ${data?.data.data.journalCount}`}</S.CounterDiv>
            <S.CounterButton
              onClick={followerModalHandler}
            >{`팔로워 ${data?.data.data.followerCount}`}</S.CounterButton>
            <S.CounterButton
              onClick={followModalHandler}
            >{`팔로우 ${data?.data.data.followingCount}`}</S.CounterButton>
          </S.CounterBox>
        </S.ProfileBox>
      </S.ProfileWrapper>
      <S.Desc>
        <S.DivideBox>
          선호하는 분할
          <S.PreferredSplit>{data?.data.data.preferredSplit}</S.PreferredSplit>
          {/* <S.Select name="divide" disabled value={perferredSplit}>
            <option value="무분할">무분할</option>
            <option value="2분할">2분할</option>
            <option value="3분할">3분할</option>
            <option value="4분할">4분할</option>
            <option value="5분할">5분할</option>
            <option value="6분할">6분할+</option>
          </S.Select> */}
        </S.DivideBox>
        <S.Introduce>
          <pre>{data?.data.data.introduction}</pre>
        </S.Introduce>
      </S.Desc>
      {followType && <FollowModal type={followType} setFollowType={setFollowType} />}
      {isInbodyClick && <InbodyModal setIsInbodyClick={setIsInbodyClick} />}
    </>
  );
}
