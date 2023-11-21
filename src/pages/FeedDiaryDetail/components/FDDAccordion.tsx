import { useEffect, useState } from "react";
import * as S from "./FDDAccordion.style";
import * as Icon from "../../../components/Icon";
import * as COLOR from "../../../constants/color";
import { Action, Day } from "../../../hooks/useDay";
import ExerciseAccordion from "../../../components/ExerciseAccordion/ExerciseAccordion";
import FeedDetailAddButton from "../../../components/FeedDetailAddButton/FeedDetailAddButton";
import ExercisePartLabel from "../../../components/ExercisePartLabel/ExercisePartLabel";
import { feedDetail } from "../FeedDiaryDetail";
import { useNavigate } from "react-router";

interface Props {
  day: Day;
  dayDispatch: React.Dispatch<Action>;
  feedData: feedDetail | undefined;
  scrapCount: number;
  likeCount: number;
  journalId: string | undefined;
}
function FDDAccordion({ day, dayDispatch, scrapCount, likeCount, journalId }: Props) {
  const [isSpread, setIsSpread] = useState(true);
  const [exercisePartLists, setExercisePartLists] = useState<Set<string>>();
  const navigate = useNavigate();
  const handleSpread = () => {
    setIsSpread((prev) => !prev);
  };
  const handleUpdateDiary = (newDay: Day): void => {
    dayDispatch({ type: "CREATE_DAY", newDay });
  };
  const handleAddMyDiary = (dayIds: string) => {
    navigate(`/feed/import?id=${dayIds}&type=diary`);
  };
  useEffect(() => {
    handleUpdateDiary(day);
    const newExercisesPartList: Set<string> = new Set();
    day.exercises.forEach((data) => {
      newExercisesPartList.add(data.part);
    }); // 라벨로 표시할 운동 부위 종목
    setExercisePartLists(newExercisesPartList);
  }, [day]);

  return (
    <S.FDDAccoWrapper>
      <S.FDDAccoBox>
        <S.IconBox>
          <S.UpIcon isSpread={isSpread} onClick={handleSpread}>
            <Icon.UpArrow size="24" />
          </S.UpIcon>
          {isSpread ? <> 모두 접기 </> : <> 모두 열기 </>}
          <S.TotalExerciseTime>
            {day.exerciseTime.hours}:{day.exerciseTime.minutes}:{day.exerciseTime.seconds}
          </S.TotalExerciseTime>
        </S.IconBox>
        <S.Line />
        {isSpread && (
          <S.ExerciseAccBox>
            <S.ExerciseAcc>
              <ExerciseAccordion
                exercises={day.exercises}
                dayIndex={0}
                dispatch={dayDispatch}
                type="recorded"
              />
            </S.ExerciseAcc>
          </S.ExerciseAccBox>
        )}
      </S.FDDAccoBox>
      <S.FDDFooter>
        <S.FooterIconBox>
          <Icon.Heart color={COLOR.Gray2} /> {likeCount}회
          <Icon.Share color={COLOR.Gray2} /> {scrapCount}회
        </S.FooterIconBox>
        <FeedDetailAddButton
          children="내 일지로 추가하기"
          onClick={() => {
            handleAddMyDiary(journalId as string);
          }}
        />
      </S.FDDFooter>
      <S.LabelList>
        {exercisePartLists &&
          Array.from(exercisePartLists).map((data) => {
            return <ExercisePartLabel type="exercise" exercisePart={data} />;
          })}
      </S.LabelList>
    </S.FDDAccoWrapper>
  );
}

export default FDDAccordion;
