import { useSearchParams } from "react-router-dom";
import * as S from "./FeedDiary.style";
import * as Icon from "../../components/Icon";
import FeedDiaryHeader from "./components/FeedDiaryHeader";
import FeedDiaryBody from "./components/FeedDiaryBody";
import Nav from "../../components/Nav/Nav";
import SearchTag from "./components/SearchTag";
import { useRef } from "react";

export default function FeedDiary() {
  const [searchParams] = useSearchParams();
  const topRef = useRef<HTMLDivElement>(null);
  const query = searchParams.get("section");
  console.log("쿼리", query);

  // scrollTop
  const scrollToTop = () => {
    if (topRef.current) {
      topRef.current.focus();
    }
  };

  return (
    <div>
      <S.TopRef ref={topRef} tabIndex={-1} />
      <Nav type="top" />
      <S.FeedDiaryWrapper>
        <SearchTag />
        <FeedDiaryHeader />
        <FeedDiaryBody />
      </S.FeedDiaryWrapper>
      <S.MoveToTopButton onClick={scrollToTop}>
        <S.UpIcon>
          <Icon.UpArrow />
        </S.UpIcon>
      </S.MoveToTopButton>
      <Nav type="home" />
    </div>
  );
}
