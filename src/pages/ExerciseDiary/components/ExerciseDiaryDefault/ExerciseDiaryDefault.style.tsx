import styled from "styled-components";
import * as FONT from "../../../../constants/font";

interface StyleProps {
  showCalendar: boolean;
}

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  margin-top: 60px;
`;

export const CalendarAccordion = styled.div`
  display: flex;
  padding: 20px;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const CalendarHeader = styled.div`
  width: 100%;
  padding: 15px;
  font-weight: ${FONT.Bold};
  font-size: ${FONT.S};
  vertical-align: middle;
  cursor: pointer;
`;

export const Arrow = styled.div<StyleProps>`
  display: inline-block;
  align-items: center;
  margin-right: 15px;
  transition: 0.3s;
  transform: ${({ showCalendar }) => (showCalendar ? "rotate(180deg)" : "rotate(0deg)")};
`;

export const AddExercise = styled.div`
  display: flex;
  width: 100%;
  padding: 30px;
`;

export const ExerciseBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  padding: 30px 30px 0 30px;
  gap: 10px;
`;

export const NoDiary = styled.span`
  font-size: ${FONT.XL};
  font-weight: ${FONT.Bold};
  padding-bottom: 10px;
`;
