import { useState } from "react";

type RoutineDetail = {
  writer: string;
  writerImg: string;
  createdAt: string;
  title: string;
  description: string;
  liked: boolean;
  likeCounts: number;
  scraped: boolean;
  scrapCounts: number;
};

const initialState = {
  writer: "작성자",
  writerImg: "/images/start_logo.png",
  createdAt: "",
  title: "제목",
  description: "내용을 불러오는 중 입니다...",
  liked: false,
  likeCounts: 0,
  scraped: false,
  scrapCounts: 0,
};

export default function useRoutineDetailState() {
  const [routineDetailState, setRoutineDetailState] =
    useState<RoutineDetail>(initialState);

  const handleLikedAndCounts = (newLikeCounts: number) => {
    console.log("newLikeCounts", newLikeCounts);
    setRoutineDetailState((prev) => ({
      ...prev,
      liked: !prev.liked,
      likeCounts: newLikeCounts,
    }));
  };

  const handleScrapCounts = (newScrapCounts: number) => {
    setRoutineDetailState((prev) => ({ ...prev, scrapCounts: newScrapCounts }));
  };

  const handleScrapedAndCounts = (newScrapCounts: number) => {
    console.log("newScrapCounts", newScrapCounts);
    setRoutineDetailState((prev) => ({
      ...prev,
      scraped: !prev.scraped,
      scrapCounts: newScrapCounts,
    }));
  };

  return {
    routineDetailState,
    setRoutineDetailState,
    handleLikedAndCounts,
    handleScrapedAndCounts,
    handleScrapCounts,
  };
}
