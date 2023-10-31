import TextArea from "../../../../components/TextArea/TextArea";
import * as S from "./UserEdit.style";
import Button from "../../../../components/Button/Button";
import * as Icon from "../../../../components/Icon";
import Input from "../../../../components/Input/Input";
import { ChangeEvent, useRef, useState } from "react";
import { useNavigate } from "react-router";
import FindGymModal from "../FindGymModal/FindGymModal";
import { toast } from "react-toastify";

interface Preview {
  url: string;
  file: File;
}

export default function UserEdit() {
  const navigate = useNavigate();
  const [preview, setPreview] = useState<Preview | null>(null);
  const splitRef = useRef<HTMLSelectElement>(null);
  const nicknameRef = useRef<HTMLInputElement>(null);
  const descRef = useRef<HTMLTextAreaElement>(null);
  const [gymName, setGymName] = useState("조재균 짐");
  const [gymFind, setGymFind] = useState(false);

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
    const split = splitRef.current!.value;
    const nickname = nicknameRef.current!.value;
    const desc = descRef.current!.value;

    toast.error("빈 칸을 입력해 주세요");
    console.log(split, nickname, desc);
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
            <S.Select name="split" defaultValue="two" ref={splitRef}>
              <option value="none">무분할</option>
              <option value="two">2분할</option>
              <option value="three">3분할</option>
              <option value="four">4분할</option>
              <option value="five">5분할</option>
              <option value="six">6+분할</option>
            </S.Select>
          </S.DivideBox>
        </S.ProfileWrapper>
        <Input
          inputTitle="닉네임"
          placeholder="닉네임을 입력해주세요"
          ref={nicknameRef}
        />
        <TextArea
          textareaTitle="소개"
          placeholder="소개를 입력해주세요"
          height="200px"
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
