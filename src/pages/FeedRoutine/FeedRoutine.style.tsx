import styled from "styled-components";
import * as FONT from "../../constants/font";
import * as COLOR from "../../constants/color";
export const ExercisePartLabels = styled.div`
  margin-top: 40px;
  padding: 20px 10px;
  border: 1px solid red;
`;

export const Tabs = styled.div`
  display: flex;
`;

export const Tab = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60px;
  flex: 1;
  border-right: 1px solid ${COLOR.Gray1};
  border-bottom: 1px solid ${COLOR.Gray1};
  font-weight: ${FONT.Bold};

  &:last-child {
    border-right: 1px solid transparent;
  }
`;

export const Routines = styled.div`
  height: 300px;
  border: 1px solid red;
`;
