import styled from "styled-components";
import * as COLOR from "../../../../constants/color";

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
  top: 20%;
  min-width: 280px;
  padding: 20px;
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
