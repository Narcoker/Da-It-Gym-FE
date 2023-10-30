import { useState } from "react";
import * as S from "./FindGymModal.style";
import GymMap from "../GymMap/GymMap";
import Button from "../../../../components/Button/Button";

// interface Props {
//   setGymFindModal: React.Dispatch<React.SetStateAction<boolean>>;
// }

export default function FindGymModal() {
  const [gym, setGym] = useState("");

  const gymNameChangeHandler = () => {
    console.log("헬스장 이름 변경");
    // setGymFindModal(false);
  };
  return (
    <S.Wrapper>
      {/* <S.Header>헬스장 찾기</S.Header> */}
      <GymMap setGym={setGym} />
      <S.ButtonBox>
        {gym ? (
          <Button
            display="block"
            type="fill"
            size="medium"
            onClick={gymNameChangeHandler}
          >
            확인
          </Button>
        ) : (
          <Button display="block" type="deactivated" size="medium" onClick={() => {}}>
            확인
          </Button>
        )}
      </S.ButtonBox>
    </S.Wrapper>
  );
}
