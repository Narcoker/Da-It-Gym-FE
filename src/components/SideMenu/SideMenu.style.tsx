import styled from "styled-components";
import * as COLOR from "../../constants/color";
import * as FONT from "../../constants/font";
interface SideMenuProps {
  sideMenu: boolean;
}
export const SideWrapper = styled.div<SideMenuProps>`
  position: absolute;
  height: 100vh;
  width: 300px;
  background-color: ${COLOR.White};
  color: ${COLOR.Primary};
  top: 60px;
  right: -243px;
  transition: all 1s ease-in-out;
  border-radius: 1px solid ${COLOR.Gray0};
  box-shadow: 4px 4px 12px rgba(32, 32, 32, 0.1);
  z-index: 90;
`;
export const SideMenuBox = styled.div`
  display: flex;
  font-size: 10px;
  align-items: center;
  margin: 16px 24px 16px 24px;
  cursor: pointer;
`;
export const SearchIcon = styled.div`
  margin-right: 10px;
`;
export const SideMenuTitle = styled.div`
  font-size: ${FONT.S};
  color: ${COLOR.Gray4};
`;
export const Line = styled.div`
  width: 90%;
  border-top: 1px solid ${COLOR.Gray0};
`;
