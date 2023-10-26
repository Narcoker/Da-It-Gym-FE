import styled from "styled-components";
import * as FONT from "../../../../constants/font";
import * as COLOR from "../../../../constants/color";

export const Wrapper = styled.div`
  background-color: ${COLOR.White};
  display: flex;
  flex-direction: column;
  padding: 30px;
  font-size: ${FONT.L};
  font-weight: ${FONT.Bold};
  text-align: center;
  position: absolute;
  left: 50%;
  top: 30%;
  transform: translate(-50%, -50%);
  width: 280px;
  border-radius: 10px;
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: ${COLOR.Shadow};
`;

export const ButtonBox = styled.div`
  display: flex;
  gap: 10px;
  padding-top: 20px;
`;
