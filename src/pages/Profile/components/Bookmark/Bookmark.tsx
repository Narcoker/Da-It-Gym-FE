import { useSearchParams } from "react-router-dom";
import * as S from "./Bookmark.style";
import Routines from "../Routines/Routines";
import Diaries from "../Diaries/Diaries";

export default function Bookmark() {
  const [searchParams] = useSearchParams();
  const feed = searchParams.get("feed");

  return (
    <>
      {feed === null && (
        <S.Wrapper>
          <S.BookmarkWrapper to="/my?section=bookmark&feed=routines">
            <S.Background src="/public/images/kakao_signup.png" />
            <S.Overlay />
            <S.BookmarkTitle>루틴 보관함</S.BookmarkTitle>
          </S.BookmarkWrapper>
          <S.BookmarkWrapper to="/my?section=bookmark&feed=diary">
            <S.Background src="/public/images/kakao_signup.png" />
            <S.Overlay />
            <S.BookmarkTitle>일지 보관함</S.BookmarkTitle>
          </S.BookmarkWrapper>
        </S.Wrapper>
      )}
      {feed === "routines" && (
        <S.RoutineWrapper>
          <Routines />
        </S.RoutineWrapper>
      )}
      {feed === "diary" && <Diaries />}
    </>
  );
}
