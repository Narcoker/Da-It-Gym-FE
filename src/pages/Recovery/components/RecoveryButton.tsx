import { useNavigate } from "react-router";
import Button from "../../../components/Button/Button";
import * as S from "./RecoveryButton.style";

function RecoveryButton() {
  const debounceNickname = ""; // recoil로 받아온 값
  const navigate = useNavigate();
  const handleSkip = () => {
    navigate("/login");
  };
  const handleContinue = () => {
    if (debounceNickname) {
      // request 요청 보냄 : 탈퇴 정보 true 인 값 false 로 바꿔서 탈퇴 회원 복구하기
      navigate("/");
    }
  };
  return (
    <S.ButtonWrapper>
      <Button display="flex" type="border" size="large" onClick={handleSkip}>
        취소하기
      </Button>
      <Button display="flex" type="fill" size="large" onClick={handleContinue}>
        계정 복구하기
      </Button>
    </S.ButtonWrapper>
  );
}

export default RecoveryButton;
