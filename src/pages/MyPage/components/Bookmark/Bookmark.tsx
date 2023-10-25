import * as S from "./Bookmark.style";

export default function Bookmark() {
  return (
    <S.Wrapper>
      <S.BookmarkWrapper>
        <S.Background src="/public/images/kakao_signup.png" />
        <S.Overlay />
        <S.BookmarkTitle>루틴 보관함</S.BookmarkTitle>
      </S.BookmarkWrapper>
      <S.BookmarkWrapper>
        <S.Background src="/public/images/kakao_signup.png" />
        <S.Overlay />
        <S.BookmarkTitle>일지 보관함</S.BookmarkTitle>
      </S.BookmarkWrapper>
    </S.Wrapper>
  );
}
