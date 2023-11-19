import * as S from "./SharePhoto.style";
import * as Icon from "../../../components/Icon";
import { useEffect, useState } from "react";
import Carousel from "../../../components/Carousel/Carousel";
import { fileListState } from "../../../recoil/diaryshareState";
import { useSetRecoilState } from "recoil";

export function SharePhoto() {
  const [showImages, setShowImages] = useState<{ imageId: number; imageUrl: string }[]>(
    [],
  );
  const setImagesList = useSetRecoilState<FormData>(fileListState); // file 정보 제출할 FormData 리코일로 저장
  useEffect(() => {}, []);
  const UploadImageFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const ImagefileList = e.target.files;
    const imageUrlLists = [...showImages];

    // 이미지 보여주기 임의로 위한 showImages 리스트
    if (ImagefileList) {
      for (let i = 0; i < ImagefileList.length; i++) {
        const currentImageURL = URL.createObjectURL(ImagefileList[i]);
        imageUrlLists.push({ imageId: showImages.length + i, imageUrl: currentImageURL });
      }
    }
    setShowImages(imageUrlLists);

    // if (ImagefileList) {
    //   const newData = Array.from(ImagefileList).map((file) => ({
    //     name: file.name,
    //     type: file.type,
    //   }));
    //   setImagesList(newData);
    // }
    // formData에 값 넣어서 보내기
    const formData = new FormData();
    if (ImagefileList) {
      Array.from(ImagefileList).forEach((file) => {
        formData.append("files", file);
      });
      setImagesList(formData);
      console.log(formData);
    }
    console.log("FormData 내용:");
    if (ImageList) {
      for (const pair of ImageList.entries()) {
        console.log("ㅇㅇㅇ", pair[0], pair[1]);
      }
    }
  };

  const SubmitUpload = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  const DeleteImageFile = () => {
    setShowImages([]);
  };
  return (
    <>
      {showImages.length === 0 ? (
        <S.SharePhotoWrapper>
          <S.SharePhotoBox>
            <S.IconAddImg>
              <Icon.AddImage size="180" />
            </S.IconAddImg>
            <S.ShareTitle>
              오늘의 나를 <br />
              기록해 보세요
            </S.ShareTitle>
          </S.SharePhotoBox>
        </S.SharePhotoWrapper>
      ) : (
        <S.SharePhotoWrapper>
          <Carousel list={showImages} />
        </S.SharePhotoWrapper>
      )}
      <S.ImgBtnBox>
        <S.ImgDelete onClick={DeleteImageFile}>삭제</S.ImgDelete>
        <S.ImgInputForm encType="multipart/form-data" onSubmit={SubmitUpload}>
          <S.AddLabel>
            업로드
            <S.InputFile
              type="file"
              multiple
              accept="image/*"
              onChange={UploadImageFile}
            />
          </S.AddLabel>
        </S.ImgInputForm>
      </S.ImgBtnBox>
    </>
  );
}
