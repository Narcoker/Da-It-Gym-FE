import styled from "styled-components";
import * as FONT from "../../../constants/font";
import * as COLOR from "../../../constants/color";
import login from "/public/images/kakao_login.png";

export const KakaoLoginWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;
export const LoginMain = styled.div`
  font-size: ${FONT.XXL};
  font-weight: ${FONT.Bold};
  color: ${COLOR.Primary};
  margin-bottom: 20px;
`;
export const LoginTitle = styled.div`
  display: flex;
  font-size: ${FONT.M};
  font-weight: ${FONT.Bold};
  color: ${COLOR.Gray4};
  margin-bottom: 20px;
  line-height: 24px;
  text-align: center;
`;
export const LoginBox = styled.div`
  display: flex;
  width: 300px;
  height: 45px;
  justify-content: center;
`;
export const LoginBtn = styled.div`
  background-image: url(${login});
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  cursor: pointer;
`;
