import styled from "styled-components";
import * as COLOR from "../../constants/color";
import * as FONT from "../../constants/font";
export const SignupWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 85%;
  margin: 0 auto;
  position: relative;
`;
export const TitleWrapper = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  padding-bottom: 12px;
  padding-left: 8px;
`;

export const InputTitle = styled.div`
  font-weight: ${FONT.Bold};
`;
export const Required = styled.div`
  position: absolute;
  top: -5px;
  left: 85px;
  font-weight: ${FONT.Bold};
  color: ${COLOR.Red};
`;
export const Line = styled.div`
  width: 100%;
  margin: 0 auto;
  border: 1px solid ${COLOR.Gray1};
  margin: 16px 0px;
`;
export const SkipComment = styled.div`
  width: 100%;
  font-size: ${FONT.XS};
  color: ${COLOR.Gray3};
`;
