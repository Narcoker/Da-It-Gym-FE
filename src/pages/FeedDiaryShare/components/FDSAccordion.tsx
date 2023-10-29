import { useState } from "react";
import * as S from "./FDSAccordion.style";
import * as Icon from "../../../components/Icon";
import ExerciseAccordion from "../../../components/ExerciseAccordion/ExerciseAccordion";

function FDSAccordion() {
  const [isSpread, setIsSpread] = useState(true);
  const handleSpread = () => {
    setIsSpread((prev) => !prev);
  };
  return (
    <S.FDSAccoWrapper>
      <S.FDSAccoBox>
        <S.IconBox>
          <S.UpIcon isSpread={isSpread} onClick={handleSpread}>
            <Icon.UpArrow size="24" />
          </S.UpIcon>
          {isSpread ? <> 모두 접기 </> : <> 모두 열기 </>}
        </S.IconBox>
        <S.Line />
        {isSpread && (
          <S.ExerciseAccBox>
            <S.ExerciseAcc>
              <ExerciseAccordion
                exerciseName="벤치 프레스"
                exercisePart="chest"
                type="record"
              />
            </S.ExerciseAcc>
            <S.ExerciseAcc>
              <ExerciseAccordion
                exerciseName="벤치 프레스"
                exercisePart="chest"
                type="record"
              />
            </S.ExerciseAcc>
            <S.ExerciseAcc>
              <ExerciseAccordion
                exerciseName="벤치 프레스"
                exercisePart="chest"
                type="record"
              />
            </S.ExerciseAcc>
          </S.ExerciseAccBox>
        )}
      </S.FDSAccoBox>
    </S.FDSAccoWrapper>
  );
}

export default FDSAccordion;
