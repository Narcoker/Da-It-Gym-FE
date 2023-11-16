import { useNavigate } from "react-router";
import Button from "../../components/Button/Button";
import ExerciseCalendar, {
  Value,
} from "../../components/ExerciseCalendar/ExerciseCalendar";
import Nav from "../../components/Nav/Nav";
import * as S from "./FeedImport.style";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import moment from "moment";
import useExerciseDiaryAPI from "../../api/useExerciseDiaryAPI";

export default function FeedImport() {
  const [query] = useSearchParams();
  const ids = query.get("id");
  const [value, onChange] = useState<Value>(new Date());
  const navigate = useNavigate();
  const cancelHandler = () => {
    navigate(-1);
  };
  const { requestJournalReplication } = useExerciseDiaryAPI();

  const addHandler = () => {
    const selectedDate = value as Date;
    const ids_split = ids!.split(",");
    if (selectedDate) {
      for (let i = 0; i < ids_split.length; i++) {
        const addDate = new Date(selectedDate);
        const importDate = new Date(addDate.setDate(selectedDate.getDate() + i));
        const importDateTransform = moment(importDate).format("YYYY-MM-DD");
        requestJournalReplication(ids_split[i], importDateTransform);
      }
    }
    const move = moment(selectedDate).format("YYYY-MM-DD");
    navigate(`/diary?date=${move}`);
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
