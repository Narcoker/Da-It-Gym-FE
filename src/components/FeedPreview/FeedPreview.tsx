import * as S from "../FeedPreview/FeedPreview.style";
import * as Icon from "../../components/Icon";
import * as COLOR from "../../constants/color";
import useCounts from "../../hooks/useCounts";

interface Props {
  src: string;
  likeCount: number;
  shareCount: number;
}

function FeedPreview({ src, likeCount, shareCount }: Props) {
  const reduceCount = useCounts();
  return (
    <S.FeedPreviewWrapper>
      <S.PreviewImg src={src} alt={src} />
      <S.ImgOverlay />
      <S.CountWrapper>
        <S.CountBox>
          <Icon.HeartFill size="18" color={COLOR.Red} />
          <S.CountNumber>{reduceCount(likeCount)}</S.CountNumber>
        </S.CountBox>
        <S.CountBox>
          <Icon.Share size="18" color={COLOR.White} />
          <S.CountNumber>{reduceCount(shareCount)}</S.CountNumber>
        </S.CountBox>
      </S.CountWrapper>
    </S.FeedPreviewWrapper>
  );
}

export default FeedPreview;
