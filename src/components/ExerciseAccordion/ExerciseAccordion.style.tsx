import styled, { css } from "styled-components";
import * as FONT from "../../constants/font";
import * as COLOR from "../../constants/color";

interface StyleProps {
  isSpread: boolean;
}

export const Accordion = styled.div`
  width: 100%;
  background-color: white;
  padding: 16px 20px;
  border-radius: 10px;
  font-weight: ${FONT.Bold};
  box-shadow: 0 4px 4px ${COLOR.Shadow};
  cursor: pointer;
  align-items: center;
`;

export const Part = styled.span`
  padding-left: 15px;
  font-size: ${FONT.S};
  color: ${COLOR.Gray3};
`;

export const Icon = styled.span<StyleProps>`
  display: flex;
  width: 24px;
  height: 24px;
  margin-right: 10px;
  border-radius: 50px;
  justify-content: center;
  align-items: center;
  transition: 0.3s;
  transform: ${({ isSpread }) => (isSpread ? "rotate(180deg)" : "rotate(0deg)")};
`;

export const AccordionHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const LeftHeader = styled.div`
  display: flex;
  align-items: center;
`;

export const RightHeader = styled.div`
  display: flex;
  font-size: ${FONT.XS};
  color: ${COLOR.Gray2};
  align-items: end;
`;

export const ExerciseSet = styled.div<StyleProps>`
  visibility: hidden;
  opacity: 0;
  height: 0;
  transition: 0.3s;

  ${({ isSpread }) =>
    isSpread &&
    css`
      visibility: visible;
      opacity: 1;
      height: auto;
    `}
`;

export const AccordionFooter = styled.div`
  display: flex;
  margin-top: 30px;
  gap: 15px;
`;
