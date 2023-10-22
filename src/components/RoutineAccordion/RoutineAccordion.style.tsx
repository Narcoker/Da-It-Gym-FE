import styled from "styled-components";
import * as FONT from "../../constants/font";
import * as COLOR from "../../constants/color";

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

export const Icon = styled.span`
  display: inline-block;
  width: 16px;
  height: 16px;
  background-color: black;
  margin-right: 10px;
`;
