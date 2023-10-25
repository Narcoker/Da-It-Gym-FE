import Button from "../Button/Button";
import * as S from "./RestTimerSettingModal.style";

interface Props {
  setRestTimerModal: React.Dispatch<React.SetStateAction<string>>;
}

export default function RestTimerSettingModal({ setRestTimerModal }: Props) {
  const cancelHandler = () => {
    setRestTimerModal("");
  };

  const restTimeHandler = () => {
    console.log("휴식시간 변경");
  };
  return (
    <S.Overlay>
      <S.Wrapper>
        휴식시간
        <S.TimeWrapper>
          <S.TimeInput type="number" max={5} />
          분
          <S.TimeInput type="number" max={59} />초
        </S.TimeWrapper>
        <S.ButtonBox>
          <Button display="flex" size="medium" type="border" onClick={cancelHandler}>
            취소
          </Button>
          <Button display="flex" size="medium" type="fill" onClick={restTimeHandler}>
            확인
          </Button>
        </S.ButtonBox>
      </S.Wrapper>
    </S.Overlay>
  );
}
