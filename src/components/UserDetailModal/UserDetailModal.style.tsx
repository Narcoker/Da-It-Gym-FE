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
  z-index: 97;
`;

export const Content = styled.div`
  width: 90%;
  position: absolute;
  background-color: ${COLOR.White};
  padding: 20px;
  border-radius: 5px;
  box-shadow: ${COLOR.Shadow};
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 99;
  max-height: 80vh; 
  overflow-y: auto;
`;

export const Title = styled.span`
  font-size: ${FONT.XL};
  color: ${COLOR.Black};
`;

export const Table = styled.table`
  margin-top: 20px;
  margin-bottom: 20px;
  font-size: ${FONT.S};
  display: table;
  table-layout: fixed;
  width: 100%;
  border-collapse: separate;
  border-spacing: 0 0 1px 0;
`;

export const TableBox = styled.div``;

export const Tr = styled.tr`
  border-bottom: 1px solid ${COLOR.Gray1};
`;

export const BodyTd = styled.div`
  /* display: flex; */
  /* flex-direction: column; */
  /* display: table-cell; */
  /* width: 30px; */
`;

export const HeadTd = styled.td`
  width: 150px;
  height: 100%;
  background-color: ${COLOR.Sub1};
  padding: 10px;
  vertical-align: middle;
  border-bottom: 1px solid ${COLOR.Gray1};
`;

export const Td = styled.td`
  padding: 10px 2px;
  flex: 1;
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

export const TableRow = styled.div`
  display: flex;
  width: 350px;
  align-items: center;
`;

export const TableCell1 = styled.div`
  width: 33%;
  padding: 10px;
  background-color: ${COLOR.Sub1};
  display: table-cell;
  border-bottom: 1px solid ${COLOR.Gray1};
`;

export const TableCell2 = styled.div`
  flex: 1;
  padding: 10px;
  border-bottom: 1px solid ${COLOR.Gray1};
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
`;
