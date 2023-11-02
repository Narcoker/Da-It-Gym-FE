import * as COLOR from "../../constants/color";
import * as FONT from "../../constants/font";
import styled from "styled-components";

export const InputStyle = styled.input`
  width: 100%;
  outline: none;
  border: 1px solid ${COLOR.Gray1};
  padding: 12px 20px;
  font-size: ${FONT.M};
  &:focus {
    border: 1px solid ${COLOR.Primary};
  }
  border-radius: 5px;
`;

export const Label = styled.label`
  display: block;
  width: 100%;
`;

export const TitleWrapper = styled.span`
  position: relative;
  display: inline-block;
  padding-bottom: 12px;
  padding-left: 8px;
`;

export const InputTitle = styled.span`
  font-weight: ${FONT.Bold};
`;
export const Required = styled.span`
  position: absolute;
  top: -5px;
  right: -10px;
  font-weight: ${FONT.Bold};
  color: ${COLOR.Red};
`;
