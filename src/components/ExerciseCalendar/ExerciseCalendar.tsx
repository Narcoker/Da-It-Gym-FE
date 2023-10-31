import * as S from "./ExerciseCalendar.style";
import "react-calendar/dist/Calendar.css";
import moment from "moment";
export type ValuePiece = Date | null;
export type Value = ValuePiece | [ValuePiece, ValuePiece];

interface Props {
  value: Value;
  onChange: React.Dispatch<React.SetStateAction<Value>>;
}

export default function ExerciseCalendar({ value, onChange }: Props) {
  // const day = moment(value).format("YYYY-MM-DD");
  const currDate = new Date();
  const currDateTime = moment(currDate).format("MM-DD");

  const mark = ["2023-10-03", "2023-10-10", "2023-10-13", "2023-10-22"];

  const dayHandler = (value: Value) => {
    console.log(`${moment(value as Date).format("YYYY-MM-DD")}로 요청보냄`);
  };

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
