import { toast } from "react-toastify";
import { useAxios } from "./useAxios";
import { FeedDiaryData } from "../pages/FeedDiary/components/FeedDiaryBody";

export default function useFeedDiaryAPI() {
  const axios = useAxios();
  const API_URL = import.meta.env.VITE_API_URL;
  const FeedDetail_Base_URL = `${API_URL}/api/feeds/journal`;

  //GET : 피드 운동일지 전체 가져오기
  const requestFeedDetailTotal = async (
    page: number,
    split: string,
    parts: string[],
    setFeedDiaryData: React.Dispatch<React.SetStateAction<FeedDiaryData>>,
  ) => {
    const partParams = parts.map((part) => `part=${encodeURIComponent(part)}`).join("&");
    console.log(parts);
    console.log(partParams);
    await axios
      .get(`${FeedDetail_Base_URL}?page=${page}&split=${split}&${partParams}`)
      .then((response) => {
        console.log("전체보기 데이터", response.data.data);
        if (response.data.data) {
          setFeedDiaryData((prevData) => ({
            ...prevData,
            totalPage: response.data.data.totalPage,
            feedExerciseJournalLists:
              page !== 0
                ? [
                    ...(prevData.feedExerciseJournalLists || []),
                    ...(response.data.data.feedExerciseJournalLists || []),
                  ]
                : [...(response.data.data.feedExerciseJournalLists || [])],
          }));
        }
      })
      .catch((err) => toast.error(err.message));
  };
  //GET : 피드 운동일지 팔로우 가져오기
  const requestFeedDetailFollow = async (
    page: number,
    split: string,
    parts: string[],
    setFeedDiaryData: React.Dispatch<React.SetStateAction<FeedDiaryData>>,
  ) => {
    const partParams = parts.map((part) => `part=${encodeURIComponent(part)}`).join("&");
    await axios
      .get(`${FeedDetail_Base_URL}/follow?page=${page}&split=${split}&${partParams}`)
      .then((response) => {
        console.log(response);
        setFeedDiaryData((prevData) => ({
          ...prevData,
          totalPage: response.data.data.totalPage,
          feedExerciseJournalLists:
            page !== 0
              ? [
                  ...(prevData.feedExerciseJournalLists || []),
                  ...(response.data.data.feedExerciseJournalLists || []),
                ]
              : [...(response.data.data.feedExerciseJournalLists || [])],
        }));
      })
      .catch((err) => toast.error(err.message));
  };
  return { requestFeedDetailTotal, requestFeedDetailFollow };
}
