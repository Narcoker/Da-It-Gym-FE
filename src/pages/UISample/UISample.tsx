import { useRef, useState } from "react";
import styled from "styled-components";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import ExerciseCard from "../../components/ExerciseCard/ExerciseCard";
import ExercisePartLabel from "../../components/ExercisePartLabel/ExercisePartLabel";
import ExerciseAccordion from "../../components/ExerciseAccordion/ExerciseAccordion";
import RoutineAccordion from "../../components/RoutineAccordion/RoutineAccordion";
import ExerciseCalendar from "../../components/ExerciseCalendar/ExerciseCalendar";
import Toggle from "../../components/Toggle/Toggle";

const ButtonWrapper = styled.div`
  display: flex;
  gap: 5px;
`;

const Wrapper = styled.div``;

const ExerciseCardWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const CalendarWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
export default function UISample() {
  const handler = () => {
    console.log(inputRef.current?.value);
  };
  const inputRef = useRef<HTMLInputElement>(null);
  const [isCheck, setCheck] = useState(false);
  return (
    <>
      <Button onClick={handler} display="block" type="border" size="medium">
        ButtonText
      </Button>
      <ButtonWrapper>
        <Button
          onClick={() => alert("가나다라마바사")}
          display="flex"
          type="fill"
          size="large"
        >
          활성화 버튼
        </Button>
        <Button
          onClick={() => alert("가나다라마바사")}
          display="flex"
          type="deactivated"
          size="large"
        >
          비활성화 버튼
        </Button>
      </ButtonWrapper>
      <Wrapper>
        <Input placeholder="아이디를 입력해주세요." inputTitle="이름" required={true} />
        <Input
          placeholder="아이디를 입력해주세요."
          defaultValue="기본 값"
          ref={inputRef}
        />
      </Wrapper>
      <ExercisePartLabel name="등" exercisePart="back" type="part" />
      <ExercisePartLabel name="가슴" exercisePart="chest" type="part" />
      <ExercisePartLabel name="유산소" exercisePart="running" type="part" />
      <ExercisePartLabel
        name="사이드레터럴레이즈"
        exercisePart="running"
        type="exercise"
      />

      <ExerciseCardWrapper>
        <ExerciseCard exerciseName="풀업" exercisePart="back" />
        <ExerciseCard exerciseName="벤치프레스" exercisePart="chest" />
      </ExerciseCardWrapper>
      <Wrapper>
        <ExerciseAccordion exerciseName="벤치프레스" exercisePart="chest" type="record" />
        {/* <ExerciseAccordion
          exerciseName="벤치프레스"
          exercisePart="chest"
          type="recorded"
        /> */}
      </Wrapper>
      <Wrapper>
        <RoutineAccordion
          routineName="Day 1"
          exerciseName="벤프"
          exercisePart="chest"
          type="record"
        />
      </Wrapper>
      <CalendarWrapper>
        <ExerciseCalendar />
      </CalendarWrapper>
      <Wrapper>
        <Toggle isCheck={isCheck} setCheck={setCheck} />
      </Wrapper>
    </>
  );
}
