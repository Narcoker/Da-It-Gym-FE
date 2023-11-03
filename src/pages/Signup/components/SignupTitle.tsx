import * as S from "./SignupTitle.style";
import LogoImg from "/public/images/start_logo.png";
function SignupTitle() {
  return (
    <S.SignupTitleWrapper>
      <S.Logo src={LogoImg} alt="logo" />
      <S.Title>근근근 닉네임설정</S.Title>
      <S.SubTitle>nickname</S.SubTitle>
    </S.SignupTitleWrapper>
  );
}

export default SignupTitle;
