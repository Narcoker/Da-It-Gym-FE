import useExerciseDiaryAPI from "../../../../api/useExerciseDiaryAPI";
import Button from "../../../../components/Button/Button";
import * as S from "./DeleteModal.style";

interface Props {
  setIsDeleteModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  journalId: number;
}

export default function DeleteModal({ setIsDeleteModalOpen, journalId }: Props) {
  const cancelHandler = () => {
    setIsDeleteModalOpen(false);
  };
  const { requestDeleteJournal } = useExerciseDiaryAPI();

  const deleteHandler = () => {
    console.log("삭제 요청");
    requestDeleteJournal(journalId);
  };
  return (
    <S.Overlay>
      <S.Wrapper>
        정말 삭제하시겠습니까?
        <S.ButtonBox>
          <Button display="flex" size="medium" type="border" onClick={deleteHandler}>
            확인
          </Button>
          <Button display="flex" size="medium" type="fill" onClick={cancelHandler}>
            취소
          </Button>
        </S.ButtonBox>
      </S.Wrapper>
    </S.Overlay>
  );
}
