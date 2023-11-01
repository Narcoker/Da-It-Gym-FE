import { useEffect, useRef, useState } from "react";
import * as S from "./ExerciseDiaryDefault.style";
import * as Icon from "../../../../components/Icon";
import ExerciseCalendar, {
  Value,
} from "../../../../components/ExerciseCalendar/ExerciseCalendar";
import ExerciseAccordion from "../../../../components/ExerciseAccordion/ExerciseAccordion";
import { useDay } from "../../../../hooks/useDay";
import { useLocation, useNavigate } from "react-router-dom";
import moment from "moment";

export default function ExerciseDiaryDefault() {
  // const [searchParams] = useSearchParams();
  // const date = searchParams.get("date");
  const location = useLocation();
  const navigate = useNavigate();
  const [showCalendar, setShowCalendar] = useState(false);
  const [day, dayDispatch] = useDay();
  const [value, onChange] = useState<Value>(new Date());
  const now = useRef(moment(new Date()).format("YYYY-MM-DD"));

  const showCalendarHandler = () => {
    setShowCalendar((prev) => !prev);
  };

  useEffect(() => {
    if (location.pathname === "/diary") {
      navigate(`/diary?date=${now.current}`);
    }
    console.log(now.current);
  }, []);
  return (
    <S.Wrapper>
      <S.CalendarAccordion>
        <S.CalendarHeader onClick={showCalendarHandler}>
          <S.Arrow showCalendar={showCalendar}>
            <Icon.DownArrow />
          </S.Arrow>
          {showCalendar ? "캘린더 접기" : "캘린더 보기"}
        </S.CalendarHeader>
        {showCalendar && <ExerciseCalendar value={value} onChange={onChange} />}
      </S.CalendarAccordion>
      {/* 운동목록들 */}
      {day.exercises.length < 1 && (
        <>
          <S.NoDiary>아직 일지를 작성하지 않았어요!</S.NoDiary>
          <S.NoDiary>일지를 작성해 보세요</S.NoDiary>
        </>
      )}

      <S.ExerciseBox>
        <ExerciseAccordion
          exercises={day.exercises}
          dayIndex={0}
          dispatch={dayDispatch}
          type="record"
        />
      </S.ExerciseBox>
    </S.Wrapper>
  );
}
