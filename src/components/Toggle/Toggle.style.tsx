import styled from "styled-components";
import * as COLOR from "../../constants/color";

interface StyleProps {
  isCheck: boolean;
}

export const ToggleLabel = styled.label<StyleProps>`
  display: flex;
  width: 55px;
  height: 32px;
  background-color: ${({ isCheck }) => (isCheck ? `${COLOR.Sub1}` : `${COLOR.Gray2}`)};
  border-radius: 50px;
  position: relative;
  cursor: pointer;
`;

export const ToggleDot = styled.div<StyleProps>`
  width: 24px;
  height: 24px;
  background-color: ${({ isCheck }) => (isCheck ? `${COLOR.Primary}` : `${COLOR.Gray3}`)};
  border-radius: 50%;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: ${({ isCheck }) => (isCheck ? `27px` : `5px`)};
  transition: 0.3s;
`;
