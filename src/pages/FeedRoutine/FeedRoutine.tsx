import ExercisePartLabel from "../../components/ExercisePartLabel/ExercisePartLabel";
import Nav from "../../components/Nav/Nav";
import * as S from "./FeedRoutine.style";

export default function FeedRoutine() {
  return (
    <>
      <Nav type="top" />
      <S.ExercisePartLabels>
        <ExercisePartLabel name="무분할" exercisePart="back" type="exercise" />
        <ExercisePartLabel name="2분할" exercisePart="back" type="exercise" />
        <ExercisePartLabel name="3분할" exercisePart="back" type="exercise" />
        <ExercisePartLabel name="4분할" exercisePart="back" type="exercise" />
        <ExercisePartLabel name="5분할" exercisePart="back" type="exercise" />
        <ExercisePartLabel name="6분할+" exercisePart="back" type="exercise" />
      </S.ExercisePartLabels>

      <S.Tabs>
        <S.Tab>전체 보기</S.Tab>
        <S.Tab>팔로우 보기</S.Tab>
        <S.Tab>추천</S.Tab>
      </S.Tabs>

      <S.Routines>
        루틴 목록
      </S.Routines>
    </>
  );
}
