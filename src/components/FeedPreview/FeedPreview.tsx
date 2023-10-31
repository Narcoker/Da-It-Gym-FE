import * as S from "../FeedPreview/FeedPreview.style";
import * as Icon from "../../components/Icon";
import * as COLOR from "../../constants/color";

interface Props {
  src: string;
  likeCount: string;
  shareCount: string;
}

function FeedPreview({ src, likeCount, shareCount }: Props) {
  return (
    <S.FeedPreviewWrapper>
      <S.PreviewImg src={src} alt={src} />
      <S.ImgOverlay />
      <S.CountWrapper>
        <S.CountBox>
          <Icon.HeartFill size="18" color={COLOR.Red} />
          <S.CountNumber>{likeCount}</S.CountNumber>
        </S.CountBox>
        <S.CountBox>
          <Icon.Share size="18" color={COLOR.White} />
          <S.CountNumber>{shareCount}</S.CountNumber>
        </S.CountBox>
      </S.CountWrapper>
    </S.FeedPreviewWrapper>
  );
}

export default FeedPreview;
