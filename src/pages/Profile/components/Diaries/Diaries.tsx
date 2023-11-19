import * as S from "./Diaries.style";
import FeedPreview from "../../../../components/FeedPreview/FeedPreview";
import { useState, useRef, useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import useProfileAPI from "../../../../api/useProfileAPI";
import { useSearchParams } from "react-router-dom";
import FeedDiaryEmpty from "../../../../components/FeedEmptyDataUI/FeedDiaryEmpty";

export interface Diary {
  id: number;
  src: string;
  likeCount: number;
  shareCount: number;
}

export default function Diaries() {
  const navigate = useNavigate();
  const observerRef = useRef<HTMLDivElement | null>(null);
  const params = useParams();
  const [searchParams] = useSearchParams();
  const section = searchParams.get("section");
  const page = useRef(0);
  const { requestFeedDiaryList, requestFeedDiaryScrap } = useProfileAPI();
  const [feedDiaryData, setFeedDiaryData] = useState<Diary[]>([]);
  const handleNavigate = (destination: number) => {
    navigate(`/feed/diary/${destination}`);
  };

  const loadMoreFeed = () => {
    // 🔥 API 요청 loadMoreFeed() 불러오기 : 1) 불러올때 setFeedDiaryData에 담아서 가져오기 requestFeedDiary(nickname as string, page, 9, setFeedDiaryData);
    // 📧 요청할때 보내야할 데이터 1. 분할 2.가슴 어깨 등 .. 3. 전체보기 + 팔로우보기 + 추천 중에 무엇인지 담아서 요청
    // console.log("요청");
    switch (section) {
      case "diary":
        requestFeedDiaryList(params.nickname as string, page.current, setFeedDiaryData);
        break;
      case "bookmark":
        requestFeedDiaryScrap(params.nickname as string, page.current, setFeedDiaryData);
        break;
    }
    page.current += 1;
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
  }, []);

  useEffect(() => {
    page.current = 0;
    setFeedDiaryData([]);
  }, [params.nickname]);
  return (
    <S.Diaries>
      {feedDiaryData.length > 0 ? (
        <>
          {feedDiaryData.map(({ src, likeCount, shareCount, id }) => (
            <S.Diary onClick={() => handleNavigate(id)}>
              <FeedPreview src={src} likeCount={likeCount} shareCount={shareCount} />
            </S.Diary>
          ))}
          <S.Observer ref={observerRef} />
        </>
      ) : (
        <FeedDiaryEmpty>
          <S.EmptySpan>
            일지가 없습니다.
            <br />
            나만의 일지를 만들어 보세요!
          </S.EmptySpan>
        </FeedDiaryEmpty>
      )}
    </S.Diaries>
  );
}
