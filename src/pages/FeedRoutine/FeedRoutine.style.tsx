import styled from "styled-components";
import * as FONT from "../../constants/font";
import * as COLOR from "../../constants/color";

export const Header = styled.div`
  position: fixed;
  width: 100%;
  max-width: 600px;
  z-index: 100;
  background-color: ${COLOR.White};
`;

export const ExercisePartLabels = styled.div`
  margin-top: 40px;
  padding: 40px 30px 20px 30px;
  display: flex;
  gap: 5px;
  text-align: center;
  align-items: center;
  justify-content: center;
  overflow-x: auto;
  &::-webkit-scrollbar {
    display: none;
  }
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;

export const Tabs = styled.div`
  display: flex;
`;

interface TabProps {
  isSelected: boolean;
}

export const Tab = styled.div<TabProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60px;
  flex: 1;
  border-top: 1px solid ${COLOR.Gray1};
  border-top-color: ${({ isSelected }) => (isSelected ? COLOR.Primary : "transparent")};
  border-right: 1px solid ${COLOR.Gray1};
  border-bottom: 1px solid ${COLOR.Gray1};
  font-weight: ${FONT.Bold};
  cursor: pointer;

  &:last-child {
    border-right: 1px solid transparent;
  }
`;

export const Routines = styled.div`
  display: flex;
  position: fixed;
  height: 100%;
  width: 100%;
  max-width: 600px;
  flex-direction: column;
  gap: 10px;
  padding: 220px 30px 100px 30px;
  overflow: auto;
  &::-webkit-scrollbar {
    display: none;
  }
`;
