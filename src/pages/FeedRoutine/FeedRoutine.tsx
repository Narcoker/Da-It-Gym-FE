import { useEffect, useRef, useState } from "react";
import HashTagButton from "../../components/HashtagButton/HashtagButton";
import Nav from "../../components/Nav/Nav";
import RoutineUser from "../../components/RoutineUser/RoutineUser";
import * as S from "./FeedRoutine.style";
import useRoutineAPI, { RoutineInfo } from "../../api/useRoutineAPI";
import FeedDiaryEmpty from "../../components/FeedEmptyDataUI/FeedDiaryEmpty";

// const tempData: RoutineInfo[] = [
//   {
//     id: "1",
//     userImg:
//       "https://images.chosun.com/resizer/lGyzt5Hi0efXfaeVhy5gXwXHilc=/616x0/smart/cloudfront-ap-northeast-1.images.arcpublishing.com/chosun/52PNRX6QMNCRDD3QBAFB6XJJ6M.jpg",
//     author: "가슴왕 재규니",
//     title: "안녕하세요 가슴을 조지는 루틴입니다. ",
//     likeCount: 999999,
//     shareCount: 999999999,
//     createdAt: new Date(),
//   },
//   {
//     id: "2",
//     userImg:
//       "https://images.chosun.com/resizer/lGyzt5Hi0efXfaeVhy5gXwXHilc=/616x0/smart/cloudfront-ap-northeast-1.images.arcpublishing.com/chosun/52PNRX6QMNCRDD3QBAFB6XJJ6M.jpg",
//     author: "가슴왕 재규니",
//     title: "안녕하세요 가슴을 조지는 루틴입니다. ",
//     likeCount: 999,
//     shareCount: 0,
//     createdAt: new Date(),
//   },
//   {
//     id: "2",
//     userImg:
//       "https://images.chosun.com/resizer/lGyzt5Hi0efXfaeVhy5gXwXHilc=/616x0/smart/cloudfront-ap-northeast-1.images.arcpublishing.com/chosun/52PNRX6QMNCRDD3QBAFB6XJJ6M.jpg",
//     author: "가슴왕 재규니",
//     title: "안녕하세요 가슴을 조지는 루틴입니다. ",
//     likeCount: 1000,
//     shareCount: 100000,
//     createdAt: new Date(),
//   },
//   {
//     id: "3",
//     userImg:
//       "https://images.chosun.com/resizer/lGyzt5Hi0efXfaeVhy5gXwXHilc=/616x0/smart/cloudfront-ap-northeast-1.images.arcpublishing.com/chosun/52PNRX6QMNCRDD3QBAFB6XJJ6M.jpg",
//     author: "가슴왕 재규니",
//     title: "안녕하세요 가슴을 조지는 루틴입니다. ",
//     likeCount: 1_000,
//     shareCount: 100_000,
//     createdAt: new Date(),
//   },
//   {
//     id: "4",
//     userImg:
//       "https://images.chosun.com/resizer/lGyzt5Hi0efXfaeVhy5gXwXHilc=/616x0/smart/cloudfront-ap-northeast-1.images.arcpublishing.com/chosun/52PNRX6QMNCRDD3QBAFB6XJJ6M.jpg",
//     author: "가슴왕 재규니",
//     title: "안녕하세요. 오늘도 역시 가슴을 조지는 루틴입니다.abcdefghi",
//     likeCount: 999_999,
//     shareCount: 100000,
//     createdAt: new Date(),
//   },
// ];

export type SelectedDivision =
  | "무분할"
  | "2분할"
  | "3분할"
  | "4분할"
  | "5분할"
  | "6분할+";

export type SelectedTab = "전체 보기" | "팔로우 보기" | "추천";

export default function FeedRoutine() {
  const [routines, setRoutines] = useState<RoutineInfo[]>([]);
  const [selectedDivision, setSelectedDivision] = useState<SelectedDivision>("무분할");
  const [selectedTab, setSelectedTab] = useState<SelectedTab>("전체 보기");
  const page = useRef(0);
  const hasNext = useRef(false);
  const division = useRef("무분할");
  const { requestRoutineAll, requestRoutineFollowing, requestRoutineRecommend } =
    useRoutineAPI();
  const routinesRef = useRef<HTMLDivElement>(null);
  const targetRef = useRef<HTMLDivElement>(null);

  const handleSelectedDivision = (division: SelectedDivision) => {
    setSelectedDivision(division);
  };

  const handleSelectedTab = (tab: SelectedTab) => {
    setSelectedTab(tab);
    page.current = 0;
  };

  const getDivisionNumber = (division: SelectedDivision) => {
    switch (division) {
      case "무분할":
        return 1;
      case "2분할":
        return 2;
      case "3분할":
        return 3;
      case "4분할":
        return 4;
      case "5분할":
        return 5;
      case "6분할+":
        return 6;
    }
  };

  const handleUpdateRoutine = async (
    selectedTab: SelectedTab,
    selectedDivision: SelectedDivision,
    restart: boolean,
  ) => {
    const handler = {
      "전체 보기": async () =>
        await requestRoutineAll(page.current, getDivisionNumber(selectedDivision)),
      "팔로우 보기": async () =>
        await requestRoutineFollowing(page.current, getDivisionNumber(selectedDivision)),
      추천: async () =>
        await requestRoutineRecommend(page.current, getDivisionNumber(selectedDivision)),
    };
    console.log("page", page.current);

    const response = await handler[selectedTab]();
    !restart && setRoutines((prev) => [...prev, ...response.routines]);
    restart && setRoutines(response.routines);
    // setPage(response.currentPage + 1);
    page.current = response.currentPage + 1;
    // setHasNext(response.hasNext);
    hasNext.current = response.hasNext;
  };

  useEffect(() => {
    page.current = 0;
    division.current = selectedDivision;
    handleUpdateRoutine(selectedTab, division.current as SelectedDivision, true);
    if (routinesRef.current) {
      routinesRef.current.scrollTop = 0;
    }
  }, [selectedTab, selectedDivision]);

  useEffect(() => {
    let observer: IntersectionObserver;
    if (targetRef.current) {
      const onIntersect = async (
        [entry]: IntersectionObserverEntry[],
        observer: IntersectionObserver,
      ) => {
        if (hasNext.current && entry.isIntersecting) {
          observer.unobserve(entry.target);
          await handleUpdateRoutine(
            selectedTab,
            division.current as SelectedDivision,
            false,
          );
          observer.observe(entry.target);
        }
      };
      observer = new IntersectionObserver(onIntersect, { threshold: 1 }); // 추가된 부분
      observer.observe(targetRef.current);
    }
    return () => observer && observer.disconnect();
  }, []);

  return (
    <>
      <S.Header>
        <Nav type="top" />

        <S.ExercisePartLabels>
          <HashTagButton
            label="무분할"
            type="division"
            id="분할"
            isActive={selectedDivision === "무분할"}
            onClick={() => handleSelectedDivision("무분할")}
          />
          <HashTagButton
            label="2분할"
            type="division"
            id="분할"
            isActive={selectedDivision === "2분할"}
            onClick={() => handleSelectedDivision("2분할")}
          />
          <HashTagButton
            label="3분할"
            type="division"
            id="분할"
            isActive={selectedDivision === "3분할"}
            onClick={() => handleSelectedDivision("3분할")}
          />
          <HashTagButton
            label="4분할"
            type="division"
            id="분할"
            isActive={selectedDivision === "4분할"}
            onClick={() => handleSelectedDivision("4분할")}
          />
          <HashTagButton
            label="5분할"
            type="division"
            id="분할"
            isActive={selectedDivision === "5분할"}
            onClick={() => handleSelectedDivision("5분할")}
          />
          <HashTagButton
            label="6분할+"
            type="division"
            id="분할"
            isActive={selectedDivision === "6분할+"}
            onClick={() => handleSelectedDivision("6분할+")}
          />
        </S.ExercisePartLabels>

        <S.Tabs>
          <S.Tab
            isSelected={selectedTab === "전체 보기"}
            onClick={() => {
              handleSelectedTab("전체 보기");
            }}
          >
            전체 보기
          </S.Tab>
          <S.Tab
            isSelected={selectedTab === "팔로우 보기"}
            onClick={() => {
              handleSelectedTab("팔로우 보기");
            }}
          >
            팔로우 보기
          </S.Tab>
          <S.Tab
            isSelected={selectedTab === "추천"}
            onClick={() => {
              handleSelectedTab("추천");
            }}
          >
            추천
          </S.Tab>
        </S.Tabs>
      </S.Header>

      <S.Routines ref={routinesRef}>
        {routines.length === 0 && (
          <FeedDiaryEmpty>
            <S.EmptySpan>
              루틴이 없습니다.
              <br />
              누구보다 먼저 루틴을 만들어보세요!
            </S.EmptySpan>
          </FeedDiaryEmpty>
        )}
        {routines.map((routine) => (
          <RoutineUser
            key={routine.id}
            routineId={routine.id}
            src={routine.authorImg}
            userName={routine.author}
            info={routine.title}
            likeCount={routine.likeCounts}
            shareCount={routine.scrapCounts}
            timeAgo={routine.createdAt}
            label={selectedDivision}
          />
        ))}
        <div ref={targetRef}></div>
      </S.Routines>

      <Nav type="home" />
    </>
  );
}
