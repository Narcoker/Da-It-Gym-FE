import * as S from "../FeedPreview/FeedPreview.style";

interface Props {
  src: string;
  likeCount: number;
  shareCount: number;
}

function FeedPreview({ src, likeCount, shareCount }: Props) {
  return (
    <S.FeedPreviewWrapper>
      <S.PreviewImg src={src} alt={src} />
      <S.CountWrapper>
        <S.CountBox>
          <S.CountIcon>&#x2661;</S.CountIcon>
          <S.CountNumber>{likeCount}</S.CountNumber>
        </S.CountBox>
        <S.CountBox>
          <S.CountIcon>&#x1f4e5;</S.CountIcon>
          <S.CountNumber>{shareCount}</S.CountNumber>
        </S.CountBox>
      </S.CountWrapper>
    </S.FeedPreviewWrapper>
  );
}

export default FeedPreview;
