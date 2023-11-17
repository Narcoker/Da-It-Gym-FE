import styled from "styled-components";
import * as COLOR from "../../../constants/color";
import * as FONT from "../../../constants/font";

export const AccordionItem = styled.div`
  border: 1px solid ${COLOR.Gray1};
  border-radius: 5px;
  margin-bottom: 10px;
  font-size: ${FONT.S};
`;

export const AccordionSummary = styled.summary`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  padding: 10px;
  background-color: ${COLOR.Gray0};
  border-radius: 5px;

  &:hover {
    background-color: ${COLOR.Sub1};
  }
`;

export const AccordionDetails = styled.div`
  padding: 10px;
`;

export const ArrowIcon = styled.span<{ isOpen: boolean }>`
  transform: ${({ isOpen }) => (isOpen ? "rotate(180deg)" : "rotate(0)")};
`;
