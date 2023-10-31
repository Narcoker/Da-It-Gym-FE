import styled from "styled-components";
import * as COLOR from "../../../../constants/color";
import * as FONT from "../../../../constants/font";

export const Overlay = styled.div`
  position: fixed;
  width: 100%;
  height: 100vh;
  left: 0;
  top: 0;
  background-color: ${COLOR.Shadow};
  z-index: 101;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Wrapper = styled.section`
  width: 350px;
  height: 800px;
  background-color: ${COLOR.White};
  border-radius: 10px;
  overflow: hidden;
`;

export const Header = styled.header`
  width: 100%;
  text-align: center;
  padding: 15px;
  font-weight: ${FONT.Bold};
  position: relative;
  border-bottom: 1px solid ${COLOR.Gray1};
`;

export const Icon = styled.div`
  position: absolute;
  top: 15px;
  right: 15px;
  cursor: pointer;
`;

export const SearchInputBox = styled.div`
  display: flex;
  width: 100%;
  padding: 20px;
  gap: 5px;
`;

export const SearchInput = styled.input`
  flex: 1;
  padding-left: 10px;
  border-radius: 5px;
  outline: none;
  border: 1px solid ${COLOR.Gray1};
  &:focus {
    border: 1px solid ${COLOR.Primary};
  }
`;

export const ButtonBox = styled.div`
  display: flex;
  padding: 20px;
  justify-content: end;
`;
