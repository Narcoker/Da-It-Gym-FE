import styled, { css } from "styled-components";
import * as COLOR from "../../constants/color";
import * as FONT from "../../constants/font";

interface StyleProps {
  type: string;
  size: string;
}

const getStyle = (type: string) => {
  switch (type) {
    case "fill":
      return css`
        background-color: ${COLOR.Primary};
        color: white;
        &:hover {
          background-color: ${COLOR.Sub3};
        }
      `;
    case "border":
      return css`
        border: 1px solid ${COLOR.Primary};
        background-color: ${COLOR.White};
        color: ${COLOR.Primary};
        &:hover {
          color: ${COLOR.White};
          background-color: ${COLOR.Primary};
        }
      `;
    case "deactivated":
      return css`
        cursor: unset;
        background-color: ${COLOR.Gray1};
        color: ${COLOR.Gray2};
      `;
  }
};

const getSize = (size: string) => {
  switch (size) {
    case "medium":
      return css`
        font-size: ${FONT.S};
        padding: 7px 15px;
      `;
    case "large":
      return css`
        font-size: ${FONT.M};
        padding: 10px 15px;
      `;
  }
};
export const BlockButton = styled.button<StyleProps>`
  cursor: pointer;
  border: none;
  border-radius: 10px;
  transition: 0.3s;
  font-weight: 600;
  ${({ size }) => getSize(size)};
  ${({ type }) => getStyle(type)}
`;

export const FlexButton = styled(BlockButton)`
  flex: 1;
`;
