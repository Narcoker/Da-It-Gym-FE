import styled from "styled-components";
import * as FONT from "../../../../constants/font";
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
  height: 500px;
  width: 300px;
`;

export const Header = styled.div`
  padding: 15px;
  font-weight: ${FONT.Bold};
  text-align: center;
  width: 100%;
  border-bottom: 1px solid ${COLOR.Gray1};
  position: relative;
`;

export const Icon = styled.div`
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
`;

export const Users = styled.div`
  overflow-y: scroll;
  width: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
