import * as S from "./KakaoLogin.style";

function KakaoLogin() {
  const REST_API_KEY = import.meta.env.VITE_KAKAO_REST_API;
  const REDIRECT_URI = `http://localhost:5173/login/oauth2/callback/kakao`;
  const link = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;
  const handleLoginLink = () => {
    window.location.href = link;
  };
  return (
    <S.KakaoLoginWrapper>
      <S.LoginMain>근 성장의 시작</S.LoginMain>
      <S.LoginTitle>
        건강한 습관은 여기서 시작됩니다.
        <br /> 오늘의 하루를 시작해 보세요.
      </S.LoginTitle>
      <S.LoginBox>
        <S.LoginBtn onClick={handleLoginLink} />
      </S.LoginBox>
    </S.KakaoLoginWrapper>
  );
}

export default KakaoLogin;
