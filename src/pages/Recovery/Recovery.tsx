import RecoveryButton from "./components/RecoveryButton";
import RecoveryTitle from "./components/RecoveryTitle";
import * as S from "./Recovery.style";
function Recovery() {
  return (
    <S.RecoveryWrapper>
      <RecoveryTitle />
      <S.TitleWrapper>
        <S.NoticeContents>
          이미 탈퇴한 회원입니다.
          <br /> 계정을 복구 하시겠습니까?
        </S.NoticeContents>
      </S.TitleWrapper>
      <RecoveryButton />
      <S.Line />
      <S.SkipComment>취소 하시면 로그인 페이지로 돌아가게됩니다.</S.SkipComment>
    </S.RecoveryWrapper>
  );
}

export default Recovery;
