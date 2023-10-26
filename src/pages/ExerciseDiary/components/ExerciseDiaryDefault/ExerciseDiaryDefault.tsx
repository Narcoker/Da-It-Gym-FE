import { useState } from "react";
import * as S from "./ExerciseDiaryDefault.style";
import * as Icon from "../../../../components/Icon";
import ExerciseCalendar from "../../../../components/ExerciseCalendar/ExerciseCalendar";
import ExerciseAccordion from "../../../../components/ExerciseAccordion/ExerciseAccordion";
import Button from "../../../../components/Button/Button";

export default function ExerciseDiaryDefault() {
  const [showCalendar, setShowCalendar] = useState(false);

  const showCalendarHandler = () => {
    setShowCalendar((prev) => !prev);
  };
  return (
    <S.Wrapper>
      <S.CalendarAccordion>
        <S.CalendarHeader onClick={showCalendarHandler}>
          <S.Arrow showCalendar={showCalendar}>
            <Icon.DownArrow />
          </S.Arrow>
          {showCalendar ? "캘린더 접기" : "캘린더 보기"}
        </S.CalendarHeader>
        {showCalendar && <ExerciseCalendar />}
      </S.CalendarAccordion>
      {/* 운동목록들 */}
      <>
        <S.NoDiary>아직 일지를 작성하지 않았어요!</S.NoDiary>
        <S.NoDiary>일지를 작성해 보세요</S.NoDiary>
      </>
      <S.ExerciseBox>
        <ExerciseAccordion exerciseName="벤치프레스" exercisePart="chest" type="record" />
        <ExerciseAccordion exerciseName="벤치프레스" exercisePart="chest" type="record" />
      </S.ExerciseBox>

      <S.AddExercise>
        <Button
          display="flex"
          size="large"
          type="fill"
          onClick={() => console.log("tmp")}
        >
          운동 추가하기
        </Button>
      </S.AddExercise>
    </S.Wrapper>
  );
}
