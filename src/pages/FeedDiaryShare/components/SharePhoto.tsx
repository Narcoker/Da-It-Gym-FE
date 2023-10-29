import * as S from "./SharePhoto.style";
import * as Icon from "../../../components/Icon";
import { useEffect, useState } from "react";
import Carousel from "../../../components/Carousel/Carousel";
function SharePhoto() {
  const [showImages, setShowImages] = useState<{ id: number; url: string }[]>([]);
  useEffect(() => {}, []);
  const UploadImageFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const ImagefileList = e.target.files;
    const imageUrlLists = [...showImages];
    if (ImagefileList) {
      for (let i = 0; i < ImagefileList.length; i++) {
        const currentImageURL = URL.createObjectURL(ImagefileList[i]);
        imageUrlLists.push({ id: showImages.length + i, url: currentImageURL });
      }
    }
    setShowImages(imageUrlLists);
    console.log("showImages", showImages);
  };
  console.log("url", showImages);
  console.log(showImages.length);
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
        <S.ImgInputForm>
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

export default SharePhoto;
