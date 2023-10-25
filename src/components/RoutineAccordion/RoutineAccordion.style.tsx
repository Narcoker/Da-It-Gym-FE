import styled from "styled-components";
import * as FONT from "../../constants/font";
import * as COLOR from "../../constants/color";

interface StyleProps {
  isSpread: boolean;
}

export const RoutineWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

export const RoutineHeader = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  border-bottom: 1px solid ${COLOR.Gray2};
  font-weight: ${FONT.Bold};
  padding: 15px;
  margin-bottom: 10px;
  cursor: pointer;
`;

export const Icon = styled.span<StyleProps>`
  display: flex;
  width: 24px;
  height: 24px;
  margin-right: 10px;
  justify-content: center;
  align-items: center;
  transition: 0.3s;
  transform: ${({ isSpread }) => (isSpread ? "rotate(180deg)" : "rotate(0deg)")};
`;
