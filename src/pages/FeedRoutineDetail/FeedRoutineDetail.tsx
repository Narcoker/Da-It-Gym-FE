import Nav from "../../components/Nav/Nav";
import * as S from "./FeedRoutineDetail.styled";
import * as Icon from "../../components/Icon";
import * as COLOR from "../../constants/color";
import * as FONT from "../../constants/font";
import { useEffect } from "react";
import RoutineAccordion from "../../components/RoutineAccordion/RoutineAccordion";
import { Routine, useRoutine } from "../../hooks/useRoutine";
import FeedInteractionInfo from "../../components/FeedInteractionInfo/FeedInteractionInfo";
import useRoutineAPI from "../../api/useRoutineAPI";
import { useNavigate, useParams } from "react-router";
import useRoutineDetailState from "../../hooks/useRoutineDetailState";
import { useRecoilValue } from "recoil";
import { userInfoState } from "../../recoil/userInfoState";

export default function FeedRoutineDetail() {
  const navigate = useNavigate();
  const { routineId } = useParams();
  const [routine, dispatch] = useRoutine();
  const {
    requestDetailRoutine,
    requestDislike,
    requestLike,
    requestScrapRoutine,
    requestUnscrapRoutine,
    requestDeleteRoutine,
  } = useRoutineAPI();
  const {
    routineDetailState,
    setRoutineDetailState,
    handleLikedAndCounts,
    handleScrapedAndCounts,
  } = useRoutineDetailState();
  const user = useRecoilValue(userInfoState);
  const isMyFeed = user.nickname === routineDetailState.writer;

  const handleToggleLike = async (liked: boolean) => {
    const newLikeCounts = liked
      ? await requestDislike(routineId as string)
      : await requestLike(routineId as string);
    handleLikedAndCounts(newLikeCounts);
  };

  const handleToggleScrap = async (scraped: boolean) => {
    const newScrapCounts = scraped
      ? await requestUnscrapRoutine(routineId as string)
      : await requestScrapRoutine(routineId as string);
    handleScrapedAndCounts(newScrapCounts);
  };

  const handleDeleteMyRoutine = (routineId: number) => {
    requestDeleteRoutine(routineId);
  };

  const handleUpdateRoutine = async (routineId: number) => {
    const response = await requestDetailRoutine(routineId);
    const { routine, ...routineDetail } = response;

    dispatch({ type: "UPDATE_ROUTINE", newRoutine: routine });
    setRoutineDetailState(routineDetail);
  };

  const handleWriteMyRoutine = (routine: Routine) => {
    navigate(`/feed/routine/new`, {
      state: {
        routine,
      },
    });
  };

  const handleRoutineForWriteMyDiary = (routine: Routine) => {
    const dayIds = routine.days.map((day) => day.id).join(",");
    navigate(`/feed/import?id=${dayIds}`);
  };

  useEffect(() => {
    handleUpdateRoutine(Number(routineId));
  }, []);

  return (
    <>
      <Nav type="top" />
      <S.BoardContainer>
        <S.BoardHeader>
          <S.WriterInfoWrapper>
            <S.WriterProfileImgWrapper>
              <S.WriterProfileImg src={routineDetailState.writerImg} alt="img" />
            </S.WriterProfileImgWrapper>
            <S.BoardTitle>{routineDetailState.writer}</S.BoardTitle>
          </S.WriterInfoWrapper>

          <S.FunctionsWrapper>
            <S.FunctionIconWrapper
              onClick={() => {
                handleToggleScrap(routineDetailState.scraped);
              }}
            >
              {!routineDetailState.scraped && (
                <Icon.BookMark size={FONT.L} color={COLOR.Gray1} />
              )}
              {routineDetailState.scraped && (
                <Icon.BookMark size={FONT.L} color={COLOR.Primary} />
              )}
            </S.FunctionIconWrapper>
            <S.FunctionIconWrapper
              onClick={() => {
                handleToggleLike(routineDetailState.liked);
              }}
            >
              {!routineDetailState.liked && (
                <Icon.Heart size={FONT.L} color={COLOR.Gray1} />
              )}
              {routineDetailState.liked && (
                <Icon.HeartFill size={FONT.L} color={COLOR.Red} />
              )}
            </S.FunctionIconWrapper>

            {isMyFeed && (
              <S.FunctionIconWrapper
                onClick={() => {
                  handleDeleteMyRoutine(Number(routineId));
                }}
              >
                <Icon.Trash size={FONT.L} color={COLOR.Gray1} />
              </S.FunctionIconWrapper>
            )}
          </S.FunctionsWrapper>
        </S.BoardHeader>

        <S.BoardTitleWrapper>
          <S.BoardTitle>{routineDetailState.title}</S.BoardTitle>
          <S.BoardWritedTime>
            {new Date(routineDetailState.createdAt).toLocaleString()}
          </S.BoardWritedTime>
        </S.BoardTitleWrapper>

        <S.BoardDescriptionWrapper>
          {routineDetailState.description.split("\n").map((line) => (
            <S.Description>{line}</S.Description>
          ))}
        </S.BoardDescriptionWrapper>

        <S.BoardFooter>
          <S.LikeShareWrapper>
            <FeedInteractionInfo
              likeCnt={routineDetailState.likeCounts}
              shareCnt={routineDetailState.scrapCounts}
            />
          </S.LikeShareWrapper>

          <S.UserInterectionWrapper
            onClick={() => {
              handleWriteMyRoutine(routine);
            }}
          >
            <Icon.AddCircle size={FONT.M} color={COLOR.Gray2} />
            <S.UseFunctionText>내 루틴으로 작성하기</S.UseFunctionText>
          </S.UserInterectionWrapper>
        </S.BoardFooter>

        <S.BoardFooter>
          <S.UserInterectionWrapperRight
            onClick={() => {
              handleRoutineForWriteMyDiary(routine);
            }}
          >
            <Icon.AddCircle size={FONT.M} color={COLOR.Gray2} />
            <S.UseFunctionText>모든 루틴을 일지에 추가하기</S.UseFunctionText>
          </S.UserInterectionWrapperRight>
        </S.BoardFooter>
      </S.BoardContainer>

      <S.RoutineContainer>
        <RoutineAccordion
          routine={routine}
          dispatch={dispatch}
          mulitple={true}
          type="recorded"
        />
      </S.RoutineContainer>

      <Nav type="home" />
    </>
  );
}
