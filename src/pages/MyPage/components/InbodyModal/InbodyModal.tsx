import Button from "../../../../components/Button/Button";
import Input from "../../../../components/Input/Input";
import * as S from "./InbodyModal.style";

interface Props {
  setIsInbodyClick: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function InbodyModal({ setIsInbodyClick }: Props) {
  const cancelHandler = () => {
    setIsInbodyClick(false);
  };

  const submitHandler = () => {
    console.log("등록");
  };
  return (
    <S.Overlay>
      <S.Wrapper>
        <S.Inputs>
          <S.CalendarLabel>
            <S.Calendartitle>측정일</S.Calendartitle>
            <S.DateInput type="date" />
          </S.CalendarLabel>
          <Input inputTitle="인바디 점수" />
          <Input inputTitle="골격근량" />
          <Input inputTitle="체지방률(%)" />
          <Input inputTitle="체중" />
          <Input inputTitle="기초대사량" />
        </S.Inputs>
        <S.ButtonBox>
          <Button display="flex" type="border" size="large" onClick={cancelHandler}>
            취소
          </Button>
          <Button display="flex" type="fill" size="large" onClick={submitHandler}>
            등록하기
          </Button>
        </S.ButtonBox>
      </S.Wrapper>
    </S.Overlay>
  );
}
