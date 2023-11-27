import { useRecoilValue } from "recoil";
import Button from "../../../components/Button/Button";
import * as S from "./SignupButton.style";
import {
  regCheckState,
  signupState,
  submitNicknameState,
} from "../../../recoil/signupState";
import { useUserAPI } from "../../../api/useUserAPI";
import { useNavigate } from "react-router";
import { userInfoState } from "../../../recoil/userInfoState";
function SignupButton() {
  const navigate = useNavigate();
  const { requestPatchNickname } = useUserAPI();
  const { nickname } = useRecoilValue(userInfoState);
  const debounceNickname = useRecoilValue(submitNicknameState); // recoil로 받아온 값
  const regCheck = useRecoilValue(regCheckState);
  const handleSkip = () => {
    // request skip 요청 보냄
    navigate(`/profile/${nickname}`);
  };
  const handleSignup = () => {
    if (debounceNickname && isDuplicate === "사용가능") {
      // request 요청 보냄
      requestPatchNickname(debounceNickname);
      navigate(`/profile/${nickname}`);
    }
  };
  const isDuplicate = useRecoilValue(signupState);
  // console.log(isDuplicate);
  // console.log("debounceNickname", debounceNickname);
  return (
    <S.ButtonWrapper>
      <Button display="flex" type="border" size="large" onClick={handleSkip}>
        건너뛰기
      </Button>
      {isDuplicate === "사용가능" && regCheck ? (
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
