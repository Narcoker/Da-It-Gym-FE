import { SpinnerCircular } from "spinners-react";
import Logo from "/images/start_logo.png";
import * as COLOR from "../../constants/color";
import * as S from "./LoginLoading.style";
import { useEffect } from "react";
import { useUserAPI } from "../../api/useUserAPI";

function LoginLoading() {
  const { requestKaKaoLogin } = useUserAPI();
  const code = new URL(window.location.href).searchParams.get("code");

  useEffect(() => {
    console.log(code);
    if (code) {
      requestKaKaoLogin(code);
    }
    //🔥 requestUseKAKAOLogin API
  }, []);

  return (
    <S.LoginWrapper>
      <S.Loading>
        <SpinnerCircular
          color={COLOR.Primary}
          secondaryColor={COLOR.Gray0}
          size={300}
          thickness={80}
        />
      </S.Loading>
      <S.LogoImg src={Logo} alt="logo" />
      <S.LoginTitle>로그인 중입니다. </S.LoginTitle>
      <S.LoginWaiting>잠시만 기다려주세요</S.LoginWaiting>
    </S.LoginWrapper>
  );
}

export default LoginLoading;
