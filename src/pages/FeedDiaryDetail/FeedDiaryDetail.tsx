import * as S from "./FeedDiaryDetail.style";
import * as Icon from "../../components/Icon";
import * as COLOR from "../../constants/color";
import Carousel from "../../components/Carousel/Carousel";
import FeedDetailHeader from "../../components/FeedDetailHeader/FeedDetailHeader";
import FDDAccordion from "./components/FDDAccordion";
import { useDay } from "../../hooks/useDay";
import Comments from "../../components/Comments/Comments";
import { useEffect, useState } from "react";
import useFeedDiaryDetailAPI from "../../api/useFeedDiaryDetailAPI";
import { useNavigate, useParams } from "react-router";
import { useRecoilValue } from "recoil";
import { userInfoState } from "../../recoil/userInfoState";
import { toast } from "react-toastify";
// const ImgList = [
//   {
//     id: 1,
//     url: "https://thumb.photo-ac.com/9a/9a20d2e68bb6667a2ab1a9b8a9216f13_t.jpeg",
//   },
// ];
export interface feedDetail {
  feedId: number;
  writer: string;
  writerImg: string;
  createdAt: string;
  liked: boolean;
  scrapped: boolean;
  likeCounts: number;
  scrapCounts: number;
  imageLists: imagesList[];
}
export interface imagesList {
  imageId: number;
  imageUrl: string;
}
export default function FeedDiaryDetail() {
  const id = useParams();
  const {
    requestFeedDiaryDetail,
    requestFeedDiaryExerciseDetail,
    requestPostFeedDiaryScrap,
    requestDeleteFeedDiaryScrap,
    requestPostFeedDiaryLike,
    requestDeleteFeedDiaryLike,
    requestDeleteFeedDiary,
  } = useFeedDiaryDetailAPI();
  const journalId = id.id;
  const useInfo = useRecoilValue(userInfoState);
  const navigate = useNavigate();
  const [feedData, setFeedData] = useState<feedDetail>();
  const [likeCount, setLikeCount] = useState<number>(feedData?.likeCounts || 0);
  const [scrapCount, setScrapCount] = useState<number>(feedData?.scrapCounts || 0);
  const [day, dayDispatch] = useDay();
  const handleToggleBookMark = async (journalId: number) => {
    if (feedData?.scrapped) {
      await requestDeleteFeedDiaryScrap(journalId);
      setScrapCount((prev) => prev - 1);
    } else {
      await requestPostFeedDiaryScrap(journalId);
      setScrapCount((prev) => prev + 1);
    }
  };
  const handleToggleHeart = async (journalId: number) => {
    if (feedData?.liked) {
      await requestDeleteFeedDiaryLike(journalId, setLikeCount);
    } else {
      await requestPostFeedDiaryLike(journalId, setLikeCount);
    }
  };
  const handlePostTrash = async (journalId: number) => {
    await requestDeleteFeedDiary(journalId);
    toast.success("삭제가 완료됐습니다.");
    setTimeout(() => {
      navigate("/feed/diary?section=total");
    }, 1500);
  };
  useEffect(() => {
    requestFeedDiaryDetail(Number(journalId), setFeedData);
    requestFeedDiaryExerciseDetail(Number(journalId), dayDispatch);
  }, [likeCount, scrapCount]);

  console.log("feedData", feedData);
  return (
    <S.FeedDetailWrapper>
      <S.FeedDetailHeaderWrapper>
        <FeedDetailHeader
          url={feedData?.writerImg as string}
          nickname={feedData?.writer as string}
          uploadTime={feedData?.createdAt as string}
        />
        <S.IconBox>
          <S.IconBookMark
            onClick={() => {
              handleToggleBookMark(Number(journalId) as number);
            }}
          >
            {feedData?.scrapped ? (
              <Icon.BookMarkFill color={COLOR.Primary} />
            ) : (
              <Icon.BookMark color={COLOR.Gray2} />
            )}
          </S.IconBookMark>
          <S.IconHeart
            onClick={() => {
              handleToggleHeart(Number(journalId) as number);
            }}
          >
            {feedData?.liked ? (
              <Icon.HeartFill size="18" color={COLOR.Red} />
            ) : (
              <Icon.Heart size="18" color={COLOR.Gray2} />
            )}
          </S.IconHeart>
          {feedData?.writer === useInfo?.nickname && (
            <S.IconTrash
              onClick={() => {
                handlePostTrash(Number(journalId) as number);
              }}
            >
              <Icon.Trash color={COLOR.Gray2} />
            </S.IconTrash>
          )}
        </S.IconBox>
      </S.FeedDetailHeaderWrapper>
      <Carousel list={feedData?.imageLists as imagesList[]} />
      <FDDAccordion
        day={day}
        dayDispatch={dayDispatch}
        feedData={feedData}
        likeCount={likeCount}
        scrapCount={scrapCount}
        journalId={journalId}
      />
      <Comments />
    </S.FeedDetailWrapper>
  );
}
