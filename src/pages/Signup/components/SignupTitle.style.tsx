import styled from "styled-components";
import * as FONT from "../../../constants/font";

export const SignupTitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 50vh;
`;
export const Logo = styled.img`
  background-image: url(LogoImg);
  background-size: cover;
  width: 20%;
  transform: translateX(15%);
`;
export const Title = styled.div`
  font-size: ${FONT.XL};
  font-weight: ${FONT.Bold};
  margin: 16px 0px 5px 0px;
`;
export const SubTitle = styled.div``;
