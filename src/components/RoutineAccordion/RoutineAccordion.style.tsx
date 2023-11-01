import styled from "styled-components";
import * as FONT from "../../constants/font";
import * as COLOR from "../../constants/color";

interface StyleProps {
  spread: boolean;
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

export const IconWrapper = styled.span<StyleProps>`
  display: flex;
  width: 24px;
  height: 24px;
  margin-right: 10px;
  justify-content: center;
  align-items: center;
  transition: 0.3s;
  transform: ${({ spread }) => (spread ? "rotate(180deg)" : "rotate(0deg)")};
`;

export const Exercises = styled.div`
  width: 100%;
  padding: 0 20px;
`;

export const FunctionsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 150px;
  margin-top: 30px;
`;

export const FunctionWrapper = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const FunctionText = styled.span`
  padding-left: 5px;
  color: ${COLOR.Primary};
  transform: translateY(1px);
`;
