import { useEffect, useState, useRef } from "react";
import useProfileAPI from "../../../../api/useProfileAPI";
import RoutineUser from "../../../../components/RoutineUser/RoutineUser";
import * as S from "./Routines.style";
import { useParams } from "react-router";
import { useSearchParams } from "react-router-dom";

export interface RoutineSummary {
  id: number;
  title: string;
  author: string;
  authorImg: string;
  description: string;
  liked: boolean;
  likeCounts: number;
  scraped: boolean;
  scrapCounts: number;
  createdAt: string;
}

export default function Routines() {
  const { requestFeedRoutineList, requestFeedRoutineScrap } = useProfileAPI();
  const params = useParams();
  const [query] = useSearchParams();
  const section = query.get("section");
  const [routines, setRoutines] = useState<RoutineSummary[]>([]);
  const [page, setPage] = useState(0);
  const observerRef = useRef<HTMLDivElement | null>(null);
  const [hasNext, setHasNext] = useState(true);
  useEffect(() => {}, []);
  const loadMoreFeed = () => {
    // 🔥 API 요청 loadMoreFeed() 불러오기 : 1) 불러올때 setFeedDiaryData에 담아서 가져오기 requestFeedDiary(nickname as string, page, 9, setFeedDiaryData);
    // 📧 요청할때 보내야할 데이터 1. 분할 2.가슴 어깨 등 .. 3. 전체보기 + 팔로우보기 + 추천 중에 무엇인지 담아서 요청
    console.log("요청");
    if (hasNext) {
      switch (section) {
        case "routines":
          requestFeedRoutineList(
            params.nickname as string,
            page,
            setRoutines,
            setHasNext,
            setPage,
          );
          break;
        case "bookmark":
          requestFeedRoutineScrap(setRoutines, page, setHasNext, setPage);
          break;
      }
    }
  };
  // 무한 스크롤
  useEffect(() => {
    const observer = new IntersectionObserver((entries) =>
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          loadMoreFeed();
          // isIntersecting 관찰 되었을때 🔥 API 요청 loadMoreFeed() 불러오기
        }
      }),
    );
    if (observerRef.current) {
      observer.observe(observerRef.current);
    }
  }, [routines]);
  return (
    <S.RoutineUsers>
      {routines.map(
        ({ title, author, authorImg, createdAt, likeCounts, scrapCounts, id }) => (
          <RoutineUser
            key={id}
            routineId={id}
            src={authorImg}
            userName={author}
            info={title}
            timeAgo={createdAt}
            likeCount={likeCounts}
            shareCount={scrapCounts}
            label="3분할"
          />
        ),
      )}
      <S.Observer ref={observerRef} />
    </S.RoutineUsers>
  );
}
