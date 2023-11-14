import { useState } from "react";
import * as S from "./Bookmark.style";
import Routines from "../Routines/Routines";
import Diaries from "../Diaries/Diaries";
import { useParams } from "react-router";
import { useRecoilValue } from "recoil";
import { userInfoState } from "../../../../recoil/userInfoState";
import * as Icon from "../../../../components/Icon";
import * as COLOR from "../../../../constants/color";

type Feed = null | "routines" | "diary";

export default function Bookmark() {
  const [feed, setFeed] = useState<Feed>(null);
  const params = useParams();
  const userInfo = useRecoilValue(userInfoState);
  const routineHandler = () => {
    setFeed("routines");
  };

  const diaryHandler = () => {
    setFeed("diary");
  };

  return (
    <>
      {params.nickname !== userInfo.nickname ? (
        <S.Wrapper>
          <S.Span>
            <Icon.Lock size="64px" color={COLOR.Gray1} />
            본인만 볼 수 있습니다
          </S.Span>
        </S.Wrapper>
      ) : (
        <>
          {feed === null && (
            <S.Wrapper>
              <S.BookmarkWrapper onClick={routineHandler}>
                <S.Background src="/public/images/kakao_signup.png" />
                <S.Overlay />
                <S.BookmarkTitle>루틴 보관함</S.BookmarkTitle>
              </S.BookmarkWrapper>
              <S.BookmarkWrapper onClick={diaryHandler}>
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
      )}
    </>
  );
}
