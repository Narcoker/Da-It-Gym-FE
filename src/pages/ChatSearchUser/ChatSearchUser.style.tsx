import styled from "styled-components";
import * as COLOR from "../../constants/color";
import * as FONT from "../../constants/font";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  transform: translateY(80px);
  height: 83%;
  user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
`;

export const Title = styled.div`
  text-align: start;
  /* border: 1px solid red; */
  width: 82%;
  font-size: ${FONT.XL};
  padding: 20px 0;
  font-weight: ${FONT.Bold};
`;

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  width: 82%;
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

export const UsersContainer = styled.div`
  width: 85%;
  height: 100%;
  overflow: auto;
  padding: 0px 10px;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const Users = styled.div`
  margin: 20px 0;
`;
