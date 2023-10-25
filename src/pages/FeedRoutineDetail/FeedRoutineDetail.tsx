import Nav from "../../components/Nav/Nav";
import * as S from "./FeedRoutineDetail.styled";
import * as Icon from "../../components/Icon";
import * as COLOR from "../../constants/color";
import * as FONT from "../../constants/font";

export default function FeedRoutineDetail() {
  const tmpDescription = `
  description
  ㄴ
  ㄴ
  ㄴ
  ㄴ
  ㄴ
  ㄴ
  `;

  return (
    <>
      <Nav type="top" />
      <S.BoardContainer>
        <S.BoardHeader>
          <S.WriterInfoWrapper>
            <S.WriterProfileImgWrapper>
              <S.WriterProfileImg src="" alt="img" />
            </S.WriterProfileImgWrapper>
            <S.BoardTitle>nickname</S.BoardTitle>
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
          <S.BoardTitle>Title</S.BoardTitle>
          <S.BoardWritedTime>5천 시간 전</S.BoardWritedTime>
        </S.BoardTitleWrapper>

        <S.BoardDescriptionWrapper>
          {tmpDescription.split("\n").map((line) => (
            <S.Description>{line}</S.Description>
          ))}
        </S.BoardDescriptionWrapper>

        <S.BoardFooter>
          <S.UserInterectionWrapper>
            <Icon.Heart size={FONT.M} color={COLOR.Gray2} />
            <S.BoardLikesCount>1.2K</S.BoardLikesCount>

            <Icon.Share size={FONT.M} color={COLOR.Gray2} />
            <S.BoardScrapsCount>2M</S.BoardScrapsCount>
          </S.UserInterectionWrapper>

          <S.UserInterectionWrapper>
            <Icon.PlusCircle size={FONT.M} color={COLOR.Gray2} />
            <S.UseFunctionText>내 루틴으로 작성하기</S.UseFunctionText>
          </S.UserInterectionWrapper>
        </S.BoardFooter>

        <S.BoardFooter>
          <S.UserInterectionWrapperRight>
            <Icon.PlusCircle size={FONT.M} color={COLOR.Gray2} />
            <S.UseFunctionText>모든 루틴을 일지에 추가하기</S.UseFunctionText>
          </S.UserInterectionWrapperRight>
        </S.BoardFooter>
      </S.BoardContainer>
      
      <S.RoutineContainer>루틴 프레임 워크</S.RoutineContainer>
    </>
  );
}
