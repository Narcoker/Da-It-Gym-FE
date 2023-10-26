import Nav from "../../components/Nav/Nav";
import * as S from "./FeedNewRoutine.style";

import { useEffect, useRef, useState } from "react";
import RoutineAccordion from "../../components/RoutineAccordion/RoutineAccordion";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import TextArea from "../../components/TextArea/TextArea";
import { useRoutine } from "../../hooks/useRoutine";

const tmpWriter = "가슴왕 재규니";

function FeedNewRoutine() {
  const [routine, dispatch] = useRoutine();
  const [writer, setWriter] = useState("");

  const titleRef = useRef<HTMLInputElement | null>(null);
  useEffect(() => {
    setWriter(tmpWriter);
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
        </S.BoardHeader>

        <S.BoardTitleWrapper>
          <Input placeholder="제목을 입력해주세요" defaultValue="" ref={titleRef} />
        </S.BoardTitleWrapper>

        <S.BoardDescriptionWrapper>
          <TextArea placeholder="내용을 입력해주세요" defaultValue="" height="150px" />
        </S.BoardDescriptionWrapper>
      </S.BoardContainer>

      <S.RoutineContainer>
        <RoutineAccordion
          routine={routine}
          dispatch={dispatch}
          mulitple={true}
          type="record"
        />
      </S.RoutineContainer>

      <S.RoutineFunctionsContainer>
        <Button display="flex" type="border" size="large" onClick={() => {}}>
          취소
        </Button>
        <Button
          display="flex"
          type="fill"
          size="large"
          onClick={() => {
            console.log("routine", routine);
          }}
        >
          공유하기
        </Button>
      </S.RoutineFunctionsContainer>

      <Nav type="home" />
    </>
  );
}

export default FeedNewRoutine;
