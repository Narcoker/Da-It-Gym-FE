import styled from "styled-components";
import * as COLOR from "../../../constants/color";
import * as FONT from "../../../constants/font";
export const InputWrapper = styled.div`
  display: flex;
  flex: 1;
  gap: 10px;
  padding: 14px;
  border-top: 1px solid ${COLOR.Gray0};
`;

export const IconDiv = styled.div``;

export const TextareaStyle = styled.textarea`
  width: 100%;
  height: 100%;
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
