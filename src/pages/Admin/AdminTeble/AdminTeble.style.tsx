import styled from "styled-components";
import * as COLOR from "../../../constants/color";
import * as FONT from "../../../constants/font";

export const AdminContainer = styled.div``;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;
  text-align: center;
  font-size: ${FONT.S};
`;

export const Th = styled.th`
  background-color: ${COLOR.Sub1};
  padding: 10px;
  font-weight: ${FONT.Bold};
  border-bottom: 1px solid ${COLOR.Gray2};
`;

export const Td = styled.td`
  padding: 10px;
  border-bottom: 1px solid ${COLOR.Gray1};
`;

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  width: 300px;
  height: 30px;
  border: 1px solid ${COLOR.Sub2};
  border-radius: 5px;
  padding: 5px;
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const SearchInput = styled.input`
  flex: 1;
  padding: 5px;
  border: none;
  outline: none;
  &:focus {
    border-color: ${COLOR.Primary};
  }
`;

export const Icon = styled.div`
  display: flex;
  align-items: center;
  padding: 5px;
  cursor: pointer;
`;
