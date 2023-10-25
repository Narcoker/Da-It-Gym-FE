import Logo from "/public/images/start_logo.png";
import * as S from "./Login.style";
import KakaoLogin from "./components/KakaoLogin";
// import KakaoSignUp from "./components/KakaoSignUp";

function Login() {
  return (
    <S.LoginWrapper>
      <S.LogoImg src={Logo} alt="logo" />
      <KakaoLogin />
      {/* <KakaoSignUp /> */}
    </S.LoginWrapper>
  );
}

export default Login;
