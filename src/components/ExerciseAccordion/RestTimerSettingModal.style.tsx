import styled from "styled-components";
import * as FONT from "../../constants/font";
import * as COLOR from "../../constants/color";

export const Overlay = styled.div`
  position: fixed;
  width: 100%;
  height: 100vh;
  background-color: ${COLOR.Shadow};
  top: 0;
  left: 0;
`;

export const Wrapper = styled.div`
  position: absolute;
  width: 280px;
  background-color: ${COLOR.White};
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: ${FONT.L};
  font-weight: ${FONT.Bold};
  text-align: center;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 4px ${COLOR.Shadow};
`;
export const TimeWrapper = styled.div`
  display: flex;
  align-items: end;
  font-size: ${FONT.M};
  justify-content: center;
  padding: 20px;
`;
export const TimeInput = styled.input`
  width: 100%;
  padding: 10px 5px 10px 10px;
  margin: 0 5px 0 10px;
  border-radius: 5px;
  border: 1px solid ${COLOR.Gray2};
  outline: none;
  text-align: end;
  &:focus {
    border: 1px solid ${COLOR.Primary};
  }
  font-size: ${FONT.M};

  &::-webkit-inner-spin-button {
    appearance: none;
    -moz-appearance: none;
    -webkit-appearance: none;
  }
`;

export const ButtonBox = styled.div`
  display: flex;
  gap: 10px;
`;
