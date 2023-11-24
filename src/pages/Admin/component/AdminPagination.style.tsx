import styled from "styled-components";
import * as COLOR from "../../../constants/color";
import * as FONT from "../../../constants/font";

export const Pagination = styled.div`
  display: flex;
  width: 80%;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 80px;
  left: 50%;
  transform: translate(-50%, -50%);
  gap: 10px;
`;

export const PageBtn = styled.button`
  border: 1px;
  border-radius: 5px;
  flex-direction: row;
  padding: 10px;
  background-color: ${COLOR.White};
  font-size: ${FONT.S};
  &:hover {
    background-color: ${COLOR.Primary};
    color: ${COLOR.White};
    cursor: pointer;
  }
`;

export const ArrowBtn = styled.button`
  text-align: center;
  color: ${COLOR.Primary};
  border: 1px;
  border-radius: 50%;
  flex-direction: row;
  padding: 5px;
  background-color: ${COLOR.Gray1};
  &:hover {
    background-color: ${COLOR.Primary};
    color: ${COLOR.White};
    cursor: pointer;
  }
`;
