import * as S from "./ExerciseNav.style";
import * as Icon from "../../../../components/Icon";
import * as COLOR from "../../../../constants/color";
import { useNavigate } from "react-router";

export default function ExerciseNav() {
  const navigate = useNavigate();

  const checkHandler = () => {
    navigate("/diary?type=success");
  };
  return (
    <S.FooterNav>
      <S.TimeWrapper>
        <S.TimeText>휴식 시간</S.TimeText>
        <S.Time>{`${0}:${59}`}</S.Time>
      </S.TimeWrapper>
      <S.TimeWrapper>
        <S.TimeText>운동 시간</S.TimeText>
        <S.Time>{`${1}:${"00"}:${59}`}</S.Time>
      </S.TimeWrapper>
      <S.ButtonBox>
        <S.Icon>
          <Icon.Pause size="24" color={`${COLOR.White}`} />
        </S.Icon>
        <S.StartIcon>
          <Icon.Start size="24" color={`${COLOR.White}`} />
        </S.StartIcon>
        <S.CheckIcon onClick={checkHandler}>
          <Icon.CheckCircle size="24" color={`${COLOR.White}`} />
        </S.CheckIcon>
      </S.ButtonBox>
    </S.FooterNav>
  );
}
