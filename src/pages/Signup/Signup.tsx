import SignupButton from "./components/SignupButton";
import SignupInput from "./components/SignupInput";
import SignupTitle from "./components/SignupTitle";
import * as S from "./Signup.style";
function Signup() {
  return (
    <S.SignupWrapper>
      <SignupTitle />
      <S.TitleWrapper>
        <S.InputTitle>닉네임 설정</S.InputTitle>
        <S.Required>*</S.Required>
      </S.TitleWrapper>
      <SignupInput />
      <SignupButton />
      <S.Line />
      <S.SkipComment>건너뛰기를 하시면 임의로 닉네임이 발급됩니다.</S.SkipComment>
    </S.SignupWrapper>
  );
}

export default Signup;
