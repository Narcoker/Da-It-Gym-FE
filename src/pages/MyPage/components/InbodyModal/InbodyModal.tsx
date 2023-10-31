import { useRef } from "react";
import Button from "../../../../components/Button/Button";
import Input from "../../../../components/Input/Input";
import * as S from "./InbodyModal.style";

interface Props {
  setIsInbodyClick: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function InbodyModal({ setIsInbodyClick }: Props) {
  const date = useRef<HTMLInputElement>(null);
  const score = useRef<HTMLInputElement>(null);
  const muscle = useRef<HTMLInputElement>(null);
  const fat = useRef<HTMLInputElement>(null);
  const weight = useRef<HTMLInputElement>(null);
  const basal = useRef<HTMLInputElement>(null);

  const cancelHandler = () => {
    setIsInbodyClick(false);
  };

  const submitHandler = () => {
    const isPositive = /^\d+\.?\d+$/;
    const emptyCheck =
      date.current!.value &&
      score.current!.value &&
      muscle.current!.value &&
      fat.current!.value &&
      weight.current!.value &&
      basal.current!.value
        ? true
        : false;
    if (!emptyCheck) {
      alert("빈 칸을 모두 채워주세요");
    } else {
      const validCheck =
        isPositive.test(score.current!.value) &&
        isPositive.test(muscle.current!.value) &&
        isPositive.test(fat.current!.value) &&
        isPositive.test(weight.current!.value) &&
        isPositive.test(basal.current!.value);

      if (!validCheck) {
        alert("숫자만 입력해주세요.");
      } else {
        console.log("제출제출");
      }
    }
  };
  return (
    <S.Overlay>
      <S.Wrapper>
        <S.Inputs>
          <S.CalendarLabel>
            <S.Calendartitle>
              측정일<S.Required>*</S.Required>
            </S.Calendartitle>
            <S.DateInput type="date" ref={date} />
          </S.CalendarLabel>
          <Input inputTitle="인바디 점수" ref={score} required={true} />
          <Input inputTitle="골격근량" ref={muscle} required={true} />
          <Input inputTitle="체지방률(%)" ref={fat} required={true} />
          <Input inputTitle="체중" ref={weight} required={true} />
          <Input inputTitle="기초대사량" ref={basal} required={true} />
        </S.Inputs>
        <S.ButtonBox>
          <Button display="flex" type="border" size="medium" onClick={cancelHandler}>
            취소
          </Button>
          <Button display="flex" type="fill" size="medium" onClick={submitHandler}>
            등록하기
          </Button>
        </S.ButtonBox>
      </S.Wrapper>
    </S.Overlay>
  );
}
