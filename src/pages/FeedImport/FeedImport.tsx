import { useNavigate } from "react-router";
import Button from "../../components/Button/Button";
import ExerciseCalendar, {
  Value,
} from "../../components/ExerciseCalendar/ExerciseCalendar";
import Nav from "../../components/Nav/Nav";
import * as S from "./FeedImport.style";
import { useState } from "react";

export default function FeedImport() {
  const [value, onChange] = useState<Value>(new Date());
  const navigate = useNavigate();
  const cancelHandler = () => {
    navigate(-1);
  };

  const addHandler = () => {
    console.log("add", value);
  };
  return (
    <>
      <Nav type="top" />
      <S.Wrapper>
        <S.Header>날짜를 선택해주세요</S.Header>
        <S.CalendarWrapper>
          <ExerciseCalendar value={value} onChange={onChange} />
        </S.CalendarWrapper>
        <S.ButtonBox>
          <Button display="flex" size="medium" type="border" onClick={cancelHandler}>
            취소
          </Button>
          <Button display="flex" size="medium" type="fill" onClick={addHandler}>
            추가하기
          </Button>
        </S.ButtonBox>
      </S.Wrapper>
    </>
  );
}
