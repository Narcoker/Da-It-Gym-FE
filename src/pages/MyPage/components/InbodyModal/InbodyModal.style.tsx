import styled from "styled-components";
import * as COLOR from "../../../../constants/color";
import * as FONT from "../../../../constants/font";

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  min-height: 100vh;
  background-color: ${COLOR.Shadow};
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
`;

export const Wrapper = styled.div`
  background-color: ${COLOR.White};
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  position: absolute;
  min-width: 280px;
  padding: 20px;
  padding-top: 50px;
  padding-bottom: 50px;
`;

export const ButtonBox = styled.div`
  display: flex;
  width: 100%;
  gap: 15px;
`;

export const Inputs = styled.div`
  width: 100%;
  padding-bottom: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const CalendarLabel = styled.label`
  width: 100%;
`;

export const Calendartitle = styled.span`
  display: flex;
  font-weight: ${FONT.Bold};
  padding-left: 8px;
  margin-bottom: 12px;
  position: relative;
  width: fit-content;
`;

export const DateInput = styled.input`
  width: 100%;
  padding: 12px 20px;
  outline: none;
  border: 1px solid ${COLOR.Gray1};
  border-radius: 5px;

  &:focus {
    border: 1px solid ${COLOR.Primary};
  }
`;

export const Required = styled.span`
  position: absolute;
  top: -5px;
  right: -10px;
  font-weight: ${FONT.Bold};
  color: ${COLOR.Red};
`;
