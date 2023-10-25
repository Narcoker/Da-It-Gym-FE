import styled from "styled-components";
import * as FONT from "../../../constants/font";
import signup from "/public/images/kakao_signup.png";

export const KakaoSignUpWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
`;
export const SignUpTitle = styled.div`
  display: flex;
  font-size: ${FONT.M};
  font-weight: ${FONT.Bold};
  margin-bottom: 10px;
`;
export const SignUpBox = styled.div`
  display: flex;
  width: 300px;
  height: 45px;
`;
export const SignUpBtn = styled.div`
  background-image: url(${signup});
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  cursor: pointer;
`;
