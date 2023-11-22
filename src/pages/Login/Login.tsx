import Logo from "/images/start_logo.png";
import * as S from "./Login.style";
import KakaoLogin from "./components/KakaoLogin";

function Login() {
  return (
    <S.LoginWrapper>
      <S.LogoImg src={Logo} alt="logo" />
      <KakaoLogin />
    </S.LoginWrapper>
  );
}

export default Login;
