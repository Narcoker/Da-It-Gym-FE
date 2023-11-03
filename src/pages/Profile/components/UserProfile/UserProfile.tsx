import { useState } from "react";
import FollowModal from "../FollowModal/FollowModal";
import * as S from "./UserProfile.style";
import InbodyModal from "../InbodyModal/InbodyModal";
import { useNavigate } from "react-router";

interface Props {
  nickname: string;
  place: string;
}

export type FollowType = "" | "follow" | "follower";

export default function UserProfile({ nickname, place }: Props) {
  const navigate = useNavigate();
  const [followType, setFollowType] = useState<FollowType>("");
  const [isInbodyClick, setIsInbodyClick] = useState(false);
  const followHandler = () => {
    setFollowType("follow");
  };

  const followerHandler = () => {
    setFollowType("follower");
  };

  const inbodyHandler = () => {
    setIsInbodyClick(true);
  };

  const profileHandler = () => {
    navigate("/profile/edit");
  };

  return (
    <>
      <S.ProfileWrapper>
        <S.ProfileImg />
        <S.ProfileBox>
          <S.ProfileContent>
            <S.Nickname>{nickname}</S.Nickname>
            <S.Place>{`${place}에서 운동 중`}</S.Place>
          </S.ProfileContent>
          <S.ButtonBox>
            <S.ProfileButton onClick={profileHandler}>프로필 편집</S.ProfileButton>
            <S.ProfileButton onClick={inbodyHandler}>인바디</S.ProfileButton>
          </S.ButtonBox>
          <S.CounterBox>
            <S.CounterButton>{`일지수 ${24}`}</S.CounterButton>
            <S.CounterButton onClick={followerHandler}>{`팔로워 ${85}`}</S.CounterButton>
            <S.CounterButton onClick={followHandler}>{`팔로우 ${21}`}</S.CounterButton>
          </S.CounterBox>
        </S.ProfileBox>
      </S.ProfileWrapper>
      <S.Desc>
        <S.DivideBox>
          선호하는 분할
          <S.Select name="divide" disabled value="two">
            <option value="none">무분할</option>
            <option value="two">2분할</option>
            <option value="three">3분할</option>
            <option value="four">4분할</option>
            <option value="five">5분할</option>
            <option value="six">6+분할</option>
          </S.Select>
        </S.DivideBox>
        <S.Introduce>자기소개 시작</S.Introduce>
      </S.Desc>
      {followType && <FollowModal type={followType} setFollowType={setFollowType} />}
      {isInbodyClick && <InbodyModal setIsInbodyClick={setIsInbodyClick} />}
    </>
  );
}
