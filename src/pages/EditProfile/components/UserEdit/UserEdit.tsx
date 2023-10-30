import TextArea from "../../../../components/TextArea/TextArea";
import * as S from "./UserEdit.style";
import Button from "../../../../components/Button/Button";
import * as Icon from "../../../../components/Icon";
import Input from "../../../../components/Input/Input";
import { ChangeEvent, useState } from "react";
import { useNavigate } from "react-router";

interface Preview {
  url: string;
  file: File;
}

export default function UserEdit() {
  const navigate = useNavigate();
  const [preview, setPreview] = useState<Preview | null>(null);
  const previewHandler = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    const file = e.target.files[0];
    const url = URL.createObjectURL(file);
    setPreview({ url, file });
  };

  const placeHandler = () => {
    // setGymFindModal(true);
    navigate("/profile/edit?section=gym");
  };

  const cancelHandler = () => {
    navigate(-1);
  };

  const submitHandler = () => {
    console.log("변경하기 제출");
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
            <S.Select name="divide" defaultValue="two">
              <option value="none">무분할</option>
              <option value="two">2분할</option>
              <option value="three">3분할</option>
              <option value="four">4분할</option>
              <option value="five">5분할</option>
              <option value="six">6+분할</option>
            </S.Select>
          </S.DivideBox>
        </S.ProfileWrapper>
        <Input inputTitle="닉네임" placeholder="닉네임을 입력해주세요" />
        <TextArea textareaTitle="소개" placeholder="소개를 입력해주세요" />
        <S.PlaceWrapper>
          <S.Title>헬스장 찾기</S.Title>
          <S.Place onClick={placeHandler}>
            <S.GymName>조재균 짐</S.GymName>
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
    </>
  );
}
