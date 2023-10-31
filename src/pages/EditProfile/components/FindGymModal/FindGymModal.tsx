import * as S from "./FindGymModal.style";
import GymMap from "../GymMap/GymMap";
import Button from "../../../../components/Button/Button";

interface Props {
  setGymFind: React.Dispatch<React.SetStateAction<boolean>>;
  setGymName: React.Dispatch<React.SetStateAction<string>>;
  gymFind: boolean;
}

export default function FindGymModal({ setGymFind, setGymName, gymFind }: Props) {
  const gymNameChangeHandler = () => {
    console.log(gymFind);
    setGymFind((prev) => !prev);
  };
  return (
    <S.Overlay>
      <S.Wrapper>
        <S.Header>헬스장 찾기</S.Header>
        <GymMap setGym={setGymName} />
        <S.ButtonBox>
          <Button
            display="block"
            type="fill"
            size="medium"
            onClick={gymNameChangeHandler}
          >
            확인
          </Button>
        </S.ButtonBox>
      </S.Wrapper>
    </S.Overlay>
  );
}
