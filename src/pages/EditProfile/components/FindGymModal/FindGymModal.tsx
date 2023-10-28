import { useState } from "react";
import * as S from "./FindGymModal.style";
import * as Icon from "../../../../components/Icon";
import * as COLOR from "../../../../constants/color";
import GymMap from "../GymMap/GymMap";
import Button from "../../../../components/Button/Button";

interface Props {
  setGymFindModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function FindGymModal({ setGymFindModal }: Props) {
  const [gym, setGym] = useState("");
  const cancelHandler = () => {
    setGymFindModal(false);
  };

  const gymNameChangeHandler = () => {
    console.log("헬스장 이름 변경");
    setGymFindModal(false);
  };
  return (
    <S.Overlay>
      <S.Wrapper>
        <S.Header>
          헬스장 찾기
          <S.Icon onClick={cancelHandler}>
            <Icon.Exit color={`${COLOR.Gray2}`} />
          </S.Icon>
        </S.Header>
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
    </S.Overlay>
  );
}
