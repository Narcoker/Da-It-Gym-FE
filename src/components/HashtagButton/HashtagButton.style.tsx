import styled, { css } from "styled-components";
import * as COLOR from "../../constants/color";

interface ButtonProps {
  labelWidth: number;
  isActive: boolean;
  type: "division" | "body";
}

const getColor = (props: ButtonProps) => {
  const { isActive, type } = props;
  switch (type) {
    case "division":
      return css`
        background-color: ${isActive ? COLOR.Purple2 : COLOR.Purple1};
        color: ${isActive ? "#ffffff" : "#000000"};
      `;
    case "body":
      return css`
        background-color: ${isActive ? COLOR.Green2 : COLOR.Green1};
        color: ${isActive ? "#ffffff" : "#000000"};
      `;
  }
};

export const StyledButton = styled.button<ButtonProps>`
  width: ${({ labelWidth }) => labelWidth + 30}px;
  height: 24px;
  border-radius: 10px;
  ${getColor}
  outline: none;
  border: none;
  cursor: pointer;
`;
