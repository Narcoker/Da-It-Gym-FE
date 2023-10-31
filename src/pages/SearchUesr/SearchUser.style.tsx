import styled from "styled-components";
import * as COLOR from "../../constants/color";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 80px;
`;

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  width: 395px;
  height: 48px;
  border: 1px solid ${COLOR.Gray2};
  border-radius: 5px;
  padding: 5px;
`;

export const SearchInput = styled.input`
  flex: 1;
  padding: 10px;
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

export const Users = styled.div`
  margin-top: 20px;
`;
