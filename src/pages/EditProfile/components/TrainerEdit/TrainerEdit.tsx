import { useRef, useState } from "react";
import Toggle from "../../../../components/Toggle/Toggle";
import * as Icon from "../../../../components/Icon";
import * as COLOR from "../../../../constants/color";
import * as S from "./TrainerEdit..style";
import Button from "../../../../components/Button/Button";
import { useNavigate } from "react-router";

interface Image {
  url: string;
  file: File;
}

interface Award {
  awardName: string;
  awardDate: string;
  awardOrg: string;
}

interface Cerificate {
  certificateName: string;
  certificateDate: string;
}

export default function TrainerEdit() {
  const navigate = useNavigate();
  const [isCheck, setCheck] = useState(false);
  const [certificateImages, setCertificateImages] = useState<Image[]>([]);
  const [awardImages, setAwardImages] = useState<Image[]>([]);
  const awardRef = useRef<HTMLInputElement>(null);
  const awardDateRef = useRef<HTMLInputElement>(null);
  const awardOrg = useRef<HTMLInputElement>(null);
  const certRef = useRef<HTMLSelectElement>(null);
  const certDateRef = useRef<HTMLInputElement>(null);
  const [awards, setAwards] = useState<Award[]>([]);
  const certificateOptions = [
    "생활스포츠 지도사 2급",
    "생활스포츠 지도사 1급",
    "건강운동관리사",
    "NSCA-CPT,",
    "NSCA-CSCC",
    "NASM-CPT",
    "NASM-CES",
    "NASM-PES",
    "FISAF",
    "KACEP",
    "KATA",
  ];

  const [certificates, setCertificates] = useState<Cerificate[]>([]);

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

  const awardAddHandler = () => {
    const award: Award = {
      awardName: awardRef.current!.value,
      awardDate: awardDateRef.current!.value,
      awardOrg: awardOrg.current!.value,
    };
    setAwards((prev) => [...prev, award]);

    awardRef.current!.value = "";
    awardDateRef.current!.value = "";
    awardOrg.current!.value = "";
    awardRef.current!.focus();
  };

  const awardRemoveHandler = () => {
    setAwards((prev) => [...prev.slice(0, -1)]);
  };

  const certAddHandler = () => {
    const cert: Cerificate = {
      certificateName: certRef.current!.value,
      certificateDate: certDateRef.current!.value,
    };

    setCertificates((prev) => [...prev, cert]);
    certDateRef.current!.value = "";
  };

  const certRemoveHandler = () => {
    setCertificates((prev) => [...prev.slice(0, -1)]);
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
            <S.ContentList>
              <S.Content>자격증</S.Content>
              <S.Content>취득 날짜</S.Content>
            </S.ContentList>
            <S.ContentList>
              <S.TrainerInput placeholder="예-2023 피지크 1등" as="select" ref={certRef}>
                {certificateOptions.map((certificateOption) => (
                  <option value={certificateOption}>{certificateOption}</option>
                ))}
              </S.TrainerInput>
              <S.TrainerInput type="date" ref={certDateRef} />
            </S.ContentList>
            <S.Contents>
              {certificates.map((certificate) => (
                <S.ContentList>
                  <S.Content>{certificate.certificateName}</S.Content>
                  <S.Content>{certificate.certificateDate}</S.Content>
                </S.ContentList>
              ))}
            </S.Contents>
            <S.CertButtonBox>
              <Button
                display="block"
                size="medium"
                type="border"
                onClick={certRemoveHandler}
              >
                제거
              </Button>
              <Button display="block" size="medium" type="fill" onClick={certAddHandler}>
                추가
              </Button>
            </S.CertButtonBox>
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
            <S.ContentList>
              <S.Content>수상 명</S.Content>
              <S.Content>수상 날짜</S.Content>
              <S.Content>주최기관</S.Content>
            </S.ContentList>
            <S.ContentList>
              <S.TrainerInput placeholder="예-2023 피지크 1등" ref={awardRef} />
              <S.TrainerInput type="date" ref={awardDateRef} />
              <S.TrainerInput ref={awardOrg} />
            </S.ContentList>
            <S.Contents>
              {awards.map((award) => (
                <S.ContentList>
                  <S.Content>{award.awardName}</S.Content>
                  <S.Content>{award.awardDate}</S.Content>
                  <S.Content>{award.awardOrg}</S.Content>
                </S.ContentList>
              ))}
            </S.Contents>
            <S.CertButtonBox>
              <Button
                display="block"
                size="medium"
                type="border"
                onClick={awardRemoveHandler}
              >
                제거
              </Button>
              <Button display="block" size="medium" type="fill" onClick={awardAddHandler}>
                추가
              </Button>
            </S.CertButtonBox>
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
