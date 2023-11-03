import Button from "../../../components/Button/Button";
import * as S from "./SignupButton.style";
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
  return (
    <S.ButtonWrapper>
      <Button display="flex" type="border" size="large" onClick={handleSkip}>
        건너뛰기
      </Button>
      <Button display="flex" type="fill" size="large" onClick={handleSignup}>
        가입하기
      </Button>
    </S.ButtonWrapper>
  );
}

export default SignupButton;
