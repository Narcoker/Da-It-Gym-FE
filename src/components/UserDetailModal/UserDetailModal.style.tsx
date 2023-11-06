import styled from "styled-components";
import * as COLOR from "../../constants/color";
import * as FONT from "../../constants/font";

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${COLOR.Gray4};
  opacity: 0.9;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const Content = styled.div`
  background-color: ${COLOR.White};
  padding: 20px;
  border-radius: 5px;
  box-shadow: ${COLOR.Shadow};
`;

export const TableBox = styled.div``;

export const Title = styled.span`
  font-size: ${FONT.XL};
  color: ${COLOR.Black};
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
  margin-bottom: 20px;
  text-align: center;
  font-size: ${FONT.S};
`;

export const Tr = styled.tr``;

export const HeadTd = styled.td`
  width: 150px;
  background-color: ${COLOR.Sub1};
  padding: 10px;
  border-bottom: 1px solid ${COLOR.Gray1};
  vertical-align: top;
`;

export const Td = styled.td`
  width: 300px;
  padding: 10px;
  border-bottom: 1px solid ${COLOR.Gray1};
`;

export const Textarea = styled.textarea`
  width: 100%;
  height: 100px;
  padding: 10px;
  border: 1px solid ${COLOR.Gray1};
  border-radius: 5px;
  font-size: ${FONT.XS};
`;

export const BtnBox = styled.div`
  text-align: right;
`;
