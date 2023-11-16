import * as S from "./ExerciseCalendar.style";
import "react-calendar/dist/Calendar.css";
import moment from "moment";
import { useEffect } from "react";
import useExerciseDiary from "../../api/useExerciseDiaryAPI";
import { useLocation, useNavigate } from "react-router";
import { useRecoilState, useSetRecoilState } from "recoil";
import { isExistState, markState } from "../../recoil/exerciseState";
export type ValuePiece = Date | null;
export type Value = ValuePiece | [ValuePiece, ValuePiece];

interface Props {
  value: Value;
  onChange: React.Dispatch<React.SetStateAction<Value>>;
}

export interface Journal {
  journalId: number;
  journalDate: string;
}

export default function ExerciseCalendar({ value, onChange }: Props) {
  // const day = moment(value).format("YYYY-MM-DD");
  const currDate = new Date();
  const currDateTime = moment(currDate).format("MM-DD");
  const { requestJournals } = useExerciseDiary();
  const navigate = useNavigate();
  const [mark, setMark] = useRecoilState(markState);
  // const mark = journals.map((journal) => journal.journalDate);
  const setIsExist = useSetRecoilState(isExistState);
  const location = useLocation();
  // console.log(location.pathname);
  const dayHandler = (value: Value) => {
    const date = moment(value as Date).format("YYYY-MM-DD");
    if (location.pathname === "/diary") {
      navigate(`/diary?date=${date}`);
      // console.log(mark);
      if (mark.includes(date)) {
        setIsExist(true);
      } else {
        setIsExist(false);
      }
    }
  };

  useEffect(() => {
    requestJournals(setMark);
  }, []);
  return (
    <S.StyleCalendar
      onChange={onChange}
      value={value}
      locale="ko-KO" // 한글버전
      next2Label={null}
      prev2Label={null}
      onClickDay={dayHandler}
      // 2일에서 '일' 없애기 -> 2로만 표시
      formatDay={(_, date) => moment(date).format("D")}
      // 이전 날짜에서 운동일지 없으면 disabled
      tileDisabled={({ date }) =>
        moment(date).format("MM-DD") < currDateTime &&
        !mark.includes(moment(date).format("YYYY-MM-DD"))
      }
      tileContent={({ date }) => {
        // 날짜 타일에 컨텐츠 추가하기 (html 태그)
        // 추가할 html 태그를 변수 초기화
        const html = [];
        // 현재 날짜가 post 작성한 날짜 배열(mark)에 있다면, dot div 추가
        if (mark.find((x) => x === moment(date).format("YYYY-MM-DD"))) {
          html.push(<div className="dot"></div>);
        }
        // 다른 조건을 주어서 html.push 에 추가적인 html 태그를 적용할 수 있음.
        return (
          <>
            <div className="flex justify-center items-center absoluteDiv">{html}</div>
          </>
        );
      }}
    />
  );
}
