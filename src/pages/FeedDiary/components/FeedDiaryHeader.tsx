import { useSearchParams } from "react-router-dom";
import * as S from "./FeedDiaryHeader.style";
import { useEffect, useState } from "react";

function FeedDiaryHeader() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("section");

  const [isActive, setIsAcitve] = useState<string>("total");

  useEffect(() => {
    setIsAcitve(query as string);
  }, [query]);
  return (
    <S.HeaderWrapper>
      <S.TitleLink to="/feed/diary?section=total" active={isActive === "total"}>
        전체보기
      </S.TitleLink>
      <S.TitleLink to="/feed/diary?section=follow" active={isActive === "follow"}>
        팔로우 보기
      </S.TitleLink>
      <S.TitleLink to="/feed/diary?section=recommend" active={isActive === "recommend"}>
        추천
      </S.TitleLink>
    </S.HeaderWrapper>
  );
}

export default FeedDiaryHeader;
