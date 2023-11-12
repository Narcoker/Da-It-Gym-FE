import styled from "styled-components";
import * as COLOR from "../../constants/color";
import * as FONT from "../../constants/font";
export const LogoImg = styled.img`
  display: flex;
  justify-content: center;
  transform: translate(15%);
  width: 100px;
`;
export const Loading = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 4;
`;
export const LoginWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
`;
export const LoginTitle = styled.div`
  display: flex;
  font-size: ${FONT.M};
  font-weight: ${FONT.Bold};
  color: ${COLOR.Gray3};
  margin-top: 20px;
  line-height: 24px;
  text-align: center;
`;

export const LoginWaiting = styled.div`
  display: flex;
  font-size: ${FONT.S};
  font-weight: ${FONT.Bold};
  color: ${COLOR.Gray3};
  margin-bottom: 20px;
  line-height: 24px;
  text-align: center;
`;
