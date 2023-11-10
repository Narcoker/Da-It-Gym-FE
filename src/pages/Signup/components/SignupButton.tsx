import { useRecoilValue } from "recoil";
import Button from "../../../components/Button/Button";
import * as S from "./SignupButton.style";
import { signupState } from "../../../recoil/signupState";
function SignupButton() {
  const debounceNickname = ""; // recoil로 받아온 값
  const handleSkip = () => {
    // request skip 요청 보냄
  };
  const handleSignup = () => {
    if (debounceNickname) {
      // request 요청 보냄
    }
  };
  const isDuplicate = useRecoilValue(signupState);
  return (
    <S.ButtonWrapper>
      <Button display="flex" type="border" size="large" onClick={handleSkip}>
        건너뛰기
      </Button>
      {isDuplicate === "" ? (
        <Button display="flex" type="fill" size="large" onClick={handleSignup}>
          가입하기
        </Button>
      ) : (
        <Button display="flex" type="deactivated" size="large" onClick={handleSignup}>
          가입하기
        </Button>
      )}
    </S.ButtonWrapper>
  );
}

export default SignupButton;
