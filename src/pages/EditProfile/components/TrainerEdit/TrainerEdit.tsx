import { useState } from "react";
import Toggle from "../../../../components/Toggle/Toggle";
import * as Icon from "../../../../components/Icon";
import Select, { MultiValue } from "react-select";
import * as COLOR from "../../../../constants/color";
import * as S from "./TrainerEdit..style";
import Button from "../../../../components/Button/Button";
import { useNavigate } from "react-router";

interface Option {
  value: string;
  label: string;
}

interface Image {
  url: string;
  file: File;
}

export default function TrainerEdit() {
  const navigate = useNavigate();
  const [isCheck, setCheck] = useState(false);
  const [certificateImages, setCertificateImages] = useState<Image[]>([]);
  const [awardImages, setAwardImages] = useState<Image[]>([]);
  const options = [
    { value: "1", label: "자격증1" },
    { value: "2", label: "자격증2" },
    { value: "3", label: "자격증3" },
  ];

  const options2 = [
    { value: "1", label: "수상경력1" },
    { value: "2", label: "수상경력2" },
    { value: "3", label: "수상경력3" },
  ];
  const [certificates, setCertificates] = useState<MultiValue<Option>>([]);
  const [awards, setAwards] = useState<MultiValue<Option>>([]);

  const previewHandler = (e: React.ChangeEvent<HTMLInputElement>, type: string) => {
    if (!e.target.files) return;
    for (const file of e.target.files) {
      const url = URL.createObjectURL(file);
      switch (type) {
        case "certificate":
          setCertificateImages((prev) => [...prev, { url, file }]);
          break;
        case "awards":
          setAwardImages((prev) => [...prev, { url, file }]);
          break;
        default:
          break;
      }
    }
  };

  const removeHandler = (idx: number, type: string) => {
    switch (type) {
      case "certificate":
        {
          const tmp = [
            ...certificateImages.slice(0, idx),
            ...certificateImages.slice(idx + 1),
          ];
          setCertificateImages(tmp);
        }
        break;
      case "awards":
        {
          const tmp = [...awardImages.slice(0, idx), ...awardImages.slice(idx + 1)];
          setAwardImages(tmp);
        }
        break;
      default:
        break;
    }
  };

  const cancelHandler = () => {
    navigate(-1);
  };

  const submitHandler = () => {
    console.log("변경하기 제출");
  };
  return (
    <>
      <S.TrainerProfile>
        <S.Title>트레이너 개인 정보 수정</S.Title>
        <Toggle isCheck={isCheck} setCheck={setCheck} />
      </S.TrainerProfile>
      {isCheck && (
        <S.TrainerWrapper>
          <S.TrainerInputBox>
            <S.ContentTitle>자격증을 선택해 주세요</S.ContentTitle>
            <Select
              defaultValue={certificates}
              onChange={setCertificates}
              options={options}
              isMulti
              placeholder="자격증을 선택해 주세요"
            />
          </S.TrainerInputBox>
          <S.TrainerInputBox>
            <S.ContentTitle>자격증 사진을 올려주세요</S.ContentTitle>
            <S.ImageBox>
              {certificateImages.length === 0 && (
                <S.ImageUploadBox>
                  <S.ImageInfo>이미지를 추가해 주세요</S.ImageInfo>
                  <Icon.AddCircle size="24" />
                  <S.Files
                    type="file"
                    multiple
                    accept="image/*"
                    onChange={(e) => previewHandler(e, "certificate")}
                  />
                </S.ImageUploadBox>
              )}

              {certificateImages.length > 0 &&
                certificateImages.map((image, i) => (
                  <S.ImgWrapper key={image.url}>
                    <S.Img src={image.url} alt="" />
                    <S.Icon onClick={() => removeHandler(i, "certificate")}>
                      <Icon.Exit color={`${COLOR.Gray2}`} size="24" />
                    </S.Icon>
                  </S.ImgWrapper>
                ))}
            </S.ImageBox>
          </S.TrainerInputBox>
          <S.TrainerInputBox>
            <S.ContentTitle>수상경력을 선택해 주세요</S.ContentTitle>
            <Select
              defaultValue={awards}
              onChange={setAwards}
              options={options2}
              isMulti
              placeholder="수상경력을 선택해 주세요"
            />
          </S.TrainerInputBox>
          <S.TrainerInputBox>
            <S.ContentTitle>수상 사진을 올려주세요</S.ContentTitle>
            <S.ImageBox>
              {awardImages.length === 0 && (
                <S.ImageUploadBox>
                  <S.ImageInfo>이미지를 추가해 주세요</S.ImageInfo>
                  <Icon.AddCircle size="24" />
                  <S.Files
                    type="file"
                    multiple
                    accept="image/*"
                    onChange={(e) => previewHandler(e, "awards")}
                  />
                </S.ImageUploadBox>
              )}

              {awardImages.length > 0 &&
                awardImages.map((image, i) => (
                  <S.ImgWrapper key={image.url}>
                    <S.Img src={image.url} alt="" />
                    <S.Icon onClick={() => removeHandler(i, "awards")}>
                      <Icon.Exit color={`${COLOR.Gray2}`} size="24" />
                    </S.Icon>
                  </S.ImgWrapper>
                ))}
            </S.ImageBox>
          </S.TrainerInputBox>
          <S.ButtonBox>
            <Button display="flex" size="large" type="fill" onClick={cancelHandler}>
              취소
            </Button>
            <Button display="flex" size="large" type="border" onClick={submitHandler}>
              심사하기
            </Button>
          </S.ButtonBox>
        </S.TrainerWrapper>
      )}
    </>
  );
}
