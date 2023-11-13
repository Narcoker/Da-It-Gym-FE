import * as S from "./RecoveryTitle.style";
import LogoImg from "/public/images/start_logo.png";
function RecoveryTitle() {
  return (
    <S.RecoveryTitleWrapper>
      <S.Logo src={LogoImg} alt="logo" />
      <S.Title>근근근 계정 복구</S.Title>
      <S.SubTitle>Account Recovery</S.SubTitle>
    </S.RecoveryTitleWrapper>
  );
}

export default RecoveryTitle;
