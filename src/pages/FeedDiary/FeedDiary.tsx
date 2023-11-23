import * as S from "./FeedDiary.style";
import * as Icon from "../../components/Icon";
import FeedDiaryHeader from "./components/FeedDiaryHeader";
import FeedDiaryBody from "./components/FeedDiaryBody";
import SearchTag from "./components/SearchTag";
import { useRef } from "react";

export default function FeedDiary() {
  const topRef = useRef<HTMLDivElement>(null);

  // scrollTop
  const scrollToTop = () => {
    if (topRef.current) {
      topRef.current.focus();
    }
  };

  return (
    <div>
      <S.TopRef ref={topRef} tabIndex={-1} />
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
    </div>
  );
}
