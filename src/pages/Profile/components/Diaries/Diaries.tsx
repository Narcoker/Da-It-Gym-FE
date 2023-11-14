import * as S from "./Diaries.style";
import FeedPreview from "../../../../components/FeedPreview/FeedPreview";
import { useState, useRef, useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import useProfileAPI from "../../../../api/useProfileAPI";
import { useSearchParams } from "react-router-dom";

interface Diary {
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
  const [page, setPage] = useState(0);
  const { requestFeedDiaryList, requestFeedDiaryScrap } = useProfileAPI();
  const [feedDiaryData, setFeedDiaryData] = useState<Diary[]>([
    {
      id: 1,
      src: "https://images.chosun.com/resizer/lGyzt5Hi0efXfaeVhy5gXwXHilc=/616x0/smart/cloudfront-ap-northeast-1.images.arcpublishing.com/chosun/52PNRX6QMNCRDD3QBAFB6XJJ6M.jpg",
      likeCount: 13,
      shareCount: 14,
    },
    {
      id: 2,
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmI-Yk_hVcYEhVxOMceoNG9eo3sJlKBLYRfQ&usqp=CAU",
      likeCount: 13,
      shareCount: 14,
    },
    {
      id: 3,
      src: "https://cdn.pixabay.com/photo/2023/05/05/21/00/cute-7973191_1280.jpg",
      likeCount: 13,
      shareCount: 14,
    },
    {
      id: 4,
      src: "https://t1.daumcdn.net/cfile/tistory/27738433597DCB1312",
      likeCount: 13,
      shareCount: 14,
    },
    {
      id: 5,
      src: "https://i.pinimg.com/1200x/d9/75/af/d975afd69d42e095c13e418f8916b1b0.jpg",
      likeCount: 13,
      shareCount: 14,
    },
    {
      id: 5,
      src: "https://i.pinimg.com/1200x/d9/75/af/d975afd69d42e095c13e418f8916b1b0.jpg",
      likeCount: 13,
      shareCount: 14,
    },
    {
      id: 5,
      src: "https://i.pinimg.com/1200x/d9/75/af/d975afd69d42e095c13e418f8916b1b0.jpg",
      likeCount: 13,
      shareCount: 14,
    },
    {
      id: 5,
      src: "https://i.pinimg.com/1200x/d9/75/af/d975afd69d42e095c13e418f8916b1b0.jpg",
      likeCount: 13,
      shareCount: 14,
    },
    {
      id: 5,
      src: "https://i.pinimg.com/1200x/d9/75/af/d975afd69d42e095c13e418f8916b1b0.jpg",
      likeCount: 13,
      shareCount: 14,
    },
    {
      id: 5,
      src: "https://i.pinimg.com/1200x/d9/75/af/d975afd69d42e095c13e418f8916b1b0.jpg",
      likeCount: 13,
      shareCount: 14,
    },
    {
      id: 5,
      src: "https://i.pinimg.com/1200x/d9/75/af/d975afd69d42e095c13e418f8916b1b0.jpg",
      likeCount: 13,
      shareCount: 14,
    },
    {
      id: 5,
      src: "https://i.pinimg.com/1200x/d9/75/af/d975afd69d42e095c13e418f8916b1b0.jpg",
      likeCount: 13,
      shareCount: 14,
    },
  ]);
  const handleNavigate = (destination: number) => {
    navigate(`/feed/diary/${destination}`);
  };

  const loadMoreFeed = () => {
    // 🔥 API 요청 loadMoreFeed() 불러오기 : 1) 불러올때 setFeedDiaryData에 담아서 가져오기 requestFeedDiary(nickname as string, page, 9, setFeedDiaryData);
    // 📧 요청할때 보내야할 데이터 1. 분할 2.가슴 어깨 등 .. 3. 전체보기 + 팔로우보기 + 추천 중에 무엇인지 담아서 요청
    console.log("요청");
    if (feedDiaryData) {
      setFeedDiaryData((prev) => [...prev, ...feedDiaryData]);
      setPage((prev) => prev + 1);
    }
    console.log(page);
  };
  // 무한 스크롤
  useEffect(() => {
    if (section === "diary") {
      requestFeedDiaryList(params.nickname as string, page);
    } else if (section === "bookmark") {
      requestFeedDiaryScrap(params.nickname as string, page);
    }
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
  return (
    <S.Diaries>
      {feedDiaryData.map(({ src, likeCount, shareCount, id }) => (
        <S.Diary onClick={() => handleNavigate(id)}>
          <FeedPreview src={src} likeCount={likeCount} shareCount={shareCount} />
        </S.Diary>
      ))}
      <S.Observer ref={observerRef} />
    </S.Diaries>
  );
}
