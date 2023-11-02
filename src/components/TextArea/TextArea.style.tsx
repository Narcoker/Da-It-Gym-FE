import * as COLOR from "../../constants/color";
import * as FONT from "../../constants/font";
import styled from "styled-components";

interface TextareaStyleProps {
  height?: string;
}

export const TextareaStyle = styled.textarea<TextareaStyleProps>`
  width: 100%;
  height: ${(props) => (props.height ? props.height : "auto")};
  outline: none;
  border: 1px solid ${COLOR.Gray1};
  padding: 12px 20px;
  font-size: ${FONT.M};
  &:focus {
    border: 1px solid ${COLOR.Primary};
  }
  border-radius: 5px;
  resize: none;
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

export const TextareaTitle = styled.span`
  font-weight: ${FONT.Bold};
`;
export const Required = styled.span`
  position: absolute;
  top: -5px;
  right: -10px;
  font-weight: ${FONT.Bold};
  color: ${COLOR.Red};
`;
