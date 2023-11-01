import Nav from "../../components/Nav/Nav";
import * as S from "./FeedRoutineDetail.styled";
import * as Icon from "../../components/Icon";
import * as COLOR from "../../constants/color";
import * as FONT from "../../constants/font";
import { useEffect, useState } from "react";
import RoutineAccordion from "../../components/RoutineAccordion/RoutineAccordion";
import { Routine, useRoutine } from "../../hooks/useRoutine";
import FeedInteractionInfo from "../../components/FeedInteractionInfo/FeedInteractionInfo";

export default function FeedRoutineDetail() {
  const tmpWriter = "가슴왕 재규니";

  const tmpDescription = `
  벤치프레스만 오지게 해버리다가
  가슴이 터져버렸다.
  `;

  const tmpTitle = "벤치프레스를 조지다.";
  const tmpRoutine: Routine = {
    id: 1,
    days: [
      {
        id: 11,
        order: 1,
        dayDate: null,
        exerciseTime: {
          hours: 0,
          minutes: 0,
          seconds: 0,
        },
        completed: false,
        spread: false,
        exercises: [
          {
            id: 111,
            order: 0,
            name: "인클라인 벤치 프레스",
            part: "가슴",
            restTime: {
              hours: 0,
              minutes: 1,
              seconds: 0,
            },
            spread: false,
            exerciseSets: [
              {
                id: 1111,
                order: 1,
                weights: 30,
                counts: 12,
                completed: false,
              },
              {
                id: 1112,
                order: 2,
                weights: 20,
                counts: 12,
                completed: false,
              },
              {
                id: 1113,
                order: 3,
                weights: 10,
                counts: 12,
                completed: false,
              },
            ],
          },
          {
            id: 113,
            order: 1,
            name: "벤치 프레스",
            part: "가슴",
            restTime: {
              hours: 0,
              minutes: 1,
              seconds: 0,
            },
            spread: false,
            exerciseSets: [
              {
                id: 1131,
                order: 1,
                weights: 30,
                counts: 10,
                completed: false,
              },
              {
                id: 1132,
                order: 2,
                weights: 20,
                counts: 10,
                completed: false,
              },
              {
                id: 1133,
                order: 3,
                weights: 10,
                counts: 10,
                completed: false,
              },
            ],
          },
        ],
      },
      {
        id: 14,
        order: 2,
        dayDate: null,
        exerciseTime: {
          hours: 0,
          minutes: 0,
          seconds: 0,
        },
        completed: false,
        spread: false,
        exercises: [
          {
            id: 141,
            order: 0,
            name: "사이드 레터럴 레이즈",
            part: "어깨",
            restTime: {
              hours: 0,
              minutes: 1,
              seconds: 0,
            },
            spread: false,
            exerciseSets: [
              {
                id: 1411,
                order: 1,
                weights: 10,
                counts: 20,
                completed: false,
              },
              {
                id: 1412,
                order: 2,
                weights: 10,
                counts: 20,
                completed: false,
              },
              {
                id: 1413,
                order: 3,
                weights: 10,
                counts: 20,
                completed: false,
              },
              {
                id: 1414,
                order: 4,
                weights: 10,
                counts: 20,
                completed: false,
              },
            ],
          },
          {
            id: 15,
            order: 1,
            name: "프론트 레이즈",
            part: "어깨",
            restTime: {
              hours: 0,
              minutes: 1,
              seconds: 0,
            },
            spread: false,
            exerciseSets: [
              {
                id: 151,
                order: 1,
                weights: 20,
                counts: 20,
                completed: false,
              },
            ],
          },
        ],
      },
      {
        id: 16,
        order: 3,
        dayDate: null,
        exerciseTime: {
          hours: 0,
          minutes: 0,
          seconds: 0,
        },
        completed: false,
        spread: false,
        exercises: [
          {
            id: 161,
            order: 0,
            name: "러닝",
            part: "유산소",
            restTime: {
              hours: 0,
              minutes: 1,
              seconds: 0,
            },
            spread: false,
            exerciseSets: [
              {
                id: 1611,
                order: 1,
                weights: 10,
                counts: 1,
                completed: false,
              },
            ],
          },
          {
            id: 17,
            order: 1,
            name: "덤벨 오버헤드 익스텐션",
            part: "삼두",
            restTime: {
              hours: 0,
              minutes: 1,
              seconds: 0,
            },
            spread: false,
            exerciseSets: [
              {
                id: 171,
                order: 1,
                weights: 10,
                counts: 15,
                completed: false,
              },
            ],
          },
        ],
      },
    ],
  };
  const [writer, setWriter] = useState("작성자");
  const [title, setTitle] = useState("제목");
  const [discription, setDiscription] = useState("게시글을 불러오는 중 입니다...");
  const [routine, dispatch] = useRoutine();

  const handleUpdateRoutine = (newRoutine: Routine): void => {
    dispatch({ type: "UPDATE_ROUTINE", newRoutine });
  };

  useEffect(() => {
    setWriter(tmpWriter);
    setTitle(tmpTitle);
    setDiscription(tmpDescription);
    handleUpdateRoutine(tmpRoutine);
  }, []);

  return (
    <>
      <Nav type="top" />
      <S.BoardContainer>
        <S.BoardHeader>
          <S.WriterInfoWrapper>
            <S.WriterProfileImgWrapper>
              <S.WriterProfileImg src="" alt="img" />
            </S.WriterProfileImgWrapper>
            <S.BoardTitle>{writer}</S.BoardTitle>
          </S.WriterInfoWrapper>

          <S.FunctionsWrapper>
            <S.FunctionIconWrapper>
              <Icon.BookMark size={FONT.L} color={COLOR.Gray1} />
            </S.FunctionIconWrapper>
            <S.FunctionIconWrapper>
              <Icon.Heart size={FONT.L} color={COLOR.Gray1} />
            </S.FunctionIconWrapper>

            <S.FunctionIconWrapper>
              <Icon.Trash size={FONT.L} color={COLOR.Gray1} />
            </S.FunctionIconWrapper>
          </S.FunctionsWrapper>
        </S.BoardHeader>

        <S.BoardTitleWrapper>
          <S.BoardTitle>{title}</S.BoardTitle>
          <S.BoardWritedTime>5천 시간 전</S.BoardWritedTime>
        </S.BoardTitleWrapper>

        <S.BoardDescriptionWrapper>
          {discription.split("\n").map((line) => (
            <S.Description>{line}</S.Description>
          ))}
        </S.BoardDescriptionWrapper>

        <S.BoardFooter>
          <S.LikeShareWrapper>
            <FeedInteractionInfo LikeCnt="100" ShareCnt="100" />
          </S.LikeShareWrapper>

          <S.UserInterectionWrapper>
            <Icon.AddCircle size={FONT.M} color={COLOR.Gray2} />
            <S.UseFunctionText>내 루틴으로 작성하기</S.UseFunctionText>
          </S.UserInterectionWrapper>
        </S.BoardFooter>

        <S.BoardFooter>
          <S.UserInterectionWrapperRight>
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
