import { useRef, useState } from "react";
import styled from "styled-components";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import ExerciseCard from "../../components/ExerciseCard/ExerciseCard";
import ExercisePartLabel from "../../components/ExercisePartLabel/ExercisePartLabel";
import Toggle from "../../components/Toggle/Toggle";
import { useRoutine } from "../../hooks/useRoutine";
import { useDay } from "../../hooks/useDay";
import ExerciseAccordion from "../../components/ExerciseAccordion/ExerciseAccordion";
import RoutineAccordion from "../../components/RoutineAccordion/RoutineAccordion";
import RoutineUser from "../../components/RoutineUser/RoutineUser";

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

  const [routine, routineDispatch] = useRoutine();
  const [day, dayDispatch] = useDay();
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
      <CalendarWrapper>{/* <ExerciseCalendar /> */}</CalendarWrapper>
      <Wrapper>
        <Toggle isCheck={isCheck} setCheck={setCheck} />
      </Wrapper>
      <Wrapper>
        {/* 
            useDay 선언 필요 
            exercises={day.exercises} 로 사용하시면 됩니다.
            dayIndex는 반드시 0 으로 지정!!
            

            const [day, dayDispatch] = useDay();
            dayDispatch({
              type: "", // "" 내부에서 자동 완성 단축키 누르면 사용가능한 타입이 나옵니다. 
              // 이 행에서 자동 완성 단축키 누르면 필요한 속성들이 나옵니다. 
            })
         */}
        <ExerciseAccordion
          exercises={day.exercises}
          dayIndex={0}
          dispatch={dayDispatch}
          type="record"
        />
      </Wrapper>
      <Wrapper>
        {/* useRoutine 선언 필요 */}
        <RoutineAccordion
          routine={routine}
          dispatch={routineDispatch}
          mulitple={true}
          type="record"
        />
      </Wrapper>
      <Wrapper>
        <RoutineUser
          src="https://images.chosun.com/resizer/lGyzt5Hi0efXfaeVhy5gXwXHilc=/616x0/smart/cloudfront-ap-northeast-1.images.arcpublishing.com/chosun/52PNRX6QMNCRDD3QBAFB6XJJ6M.jpg"
          userName="jamesjoe"
          info="안녕하세요 "
          likeCount="12.3K "
          shareCount="12.3K"
          timeAgo="5시간 전"
          label="3분할"
        />
      </Wrapper>
      <Wrapper>
        <RoutineUser
          src="https://images.chosun.com/resizer/lGyzt5Hi0efXfaeVhy5gXwXHilc=/616x0/smart/cloudfront-ap-northeast-1.images.arcpublishing.com/chosun/52PNRX6QMNCRDD3QBAFB6XJJ6M.jpg"
          userName="jamesjoe"
          info="안녕하세요 "
          likeCount="12.3K "
          shareCount="12.3K"
          timeAgo="5시간 전"
          label="3분할"
        />
      </Wrapper>
    </>
  );
}
