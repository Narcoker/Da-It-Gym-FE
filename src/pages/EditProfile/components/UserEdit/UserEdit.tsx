import TextArea from "../../../../components/TextArea/TextArea";
import * as S from "./UserEdit.style";
import Button from "../../../../components/Button/Button";
import * as Icon from "../../../../components/Icon";
import Input from "../../../../components/Input/Input";
import { ChangeEvent, useRef, useState } from "react";
import { useNavigate } from "react-router";
import FindGymModal from "../FindGymModal/FindGymModal";
import { toast } from "react-toastify";
// import useProfileAPI, { EditProfilePayload } from "../../../../api/useProfileAPI";
import { useRecoilState } from "recoil";
import { userInfoState } from "../../../../recoil/userInfoState";
import { useMutation } from "@tanstack/react-query";
import { useAxios } from "../../../../api/useAxios";

interface Preview {
  url: string;
  file?: File;
}

export default function UserEdit() {
  const navigate = useNavigate();

  const splitRef = useRef<HTMLSelectElement>(null);
  const nicknameRef = useRef<HTMLInputElement>(null);
  const descRef = useRef<HTMLTextAreaElement>(null);
  const [gymFind, setGymFind] = useState(false);

  const [userInfo, setUserInfo] = useRecoilState(userInfoState);
  const [gymName, setGymName] = useState(userInfo.healthClubName);
  const [preview, setPreview] = useState<Preview | null>({
    url: userInfo.userProfileImgUrl,
  });
  const axios = useAxios();
  // const { requestEditProfile } = useProfileAPI();
  const editProfile = useMutation({
    mutationFn: (userNickname: string) => {
      const formData = new FormData();
      const API_URL = import.meta.env.VITE_API_URL;
      const userProfileImg = preview?.file;
      const nickname = nicknameRef.current!.value;
      const introduction = descRef.current!.value;
      const preferredSplit = splitRef.current!.value;
      const payload = {
        userProfileImg,
        request: { nickname, introduction, gymName, preferredSplit },
      };

      formData.append("userProfileImg", payload.userProfileImg as File);
      formData.append("request", JSON.stringify(payload.request));
      return axios.put(`${API_URL}/api/users/${userNickname}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
    },
    onSuccess: (data) => {
      const res = data.data.data;
      setUserInfo(res);
      navigate(`/profile/${res.nickname}?section=routines`);
    },
  });
  const previewHandler = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    const file = e.target.files[0];
    const url = URL.createObjectURL(file);
    setPreview({ url, file });
  };

  const placeHandler = () => {
    // navigate("/profile/edit?section=gym");
    setGymFind(true);
  };

  const cancelHandler = () => {
    navigate(-1);
  };

  const submitHandler = () => {
    // const userProfileImg = preview?.file;
    const nickname = nicknameRef.current!.value;
    const introduction = descRef.current!.value;
    const preferredSplit = splitRef.current!.value;

    // const payload = {
    //   userProfileImg,
    //   request: { nickname, introduction, gymName, preferredSplit },
    // };
    if (preferredSplit && nickname && introduction) {
      editProfile.mutate(userInfo.nickname);
      // requestEditProfile(userInfo.nickname, payload, setUserInfo);
    } else {
      toast.error("빈 칸을 입력해 주세요");
    }
  };

  return (
    <>
      <S.Wrapper>
        <S.ProfileWrapper>
          <S.ProfileImgWrapper>
            <S.File accept="image/*" type="file" onChange={previewHandler} />
            <S.ProfileImg src={preview ? preview.url : "/images/start_logo.png"} />
          </S.ProfileImgWrapper>
          <S.DivideBox>
            선호하는 분할
            <S.Select name="split" defaultValue={userInfo.preferredSplit} ref={splitRef}>
              <option value="무분할">무분할</option>
              <option value="2분할">2분할</option>
              <option value="3분할">3분할</option>
              <option value="4분할">4분할</option>
              <option value="5분할">5분할</option>
              <option value="6분할">6분할+</option>
            </S.Select>
          </S.DivideBox>
        </S.ProfileWrapper>
        <S.Inputs>
          <Input
            inputTitle="닉네임"
            placeholder="닉네임을 입력해주세요"
            defaultValue={userInfo.nickname}
            ref={nicknameRef}
          />
          <TextArea
            textareaTitle="소개"
            placeholder="소개를 입력해주세요"
            height="200px"
            defaultValue={userInfo.introduction}
            ref={descRef}
          />
          <S.PlaceWrapper>
            <S.Title>헬스장 찾기</S.Title>
            <S.Place onClick={placeHandler}>
              <S.GymName>{gymName}</S.GymName>
              <S.Icon>
                <Icon.Search />
              </S.Icon>
            </S.Place>
          </S.PlaceWrapper>
        </S.Inputs>
        <S.ButtonBox>
          <Button display="flex" size="large" type="border" onClick={cancelHandler}>
            취소
          </Button>
          <Button display="flex" size="large" type="fill" onClick={submitHandler}>
            변경하기
          </Button>
        </S.ButtonBox>
      </S.Wrapper>
      {gymFind && (
        <FindGymModal setGymFind={setGymFind} setGymName={setGymName} gymFind={gymFind} />
      )}
    </>
  );
}
