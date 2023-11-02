import styled from "styled-components";
import * as COLOR from "../../constants/color";
import * as FONT from "../../constants/font";
interface SideMenuProps {
  sideMenu: boolean;
}
export const SideWrapper = styled.div<SideMenuProps>`
  position: absolute;
  height: 80vh;
  width: 200px;
  background-color: ${COLOR.White};
  color: ${COLOR.Primary};
  top: 40px;
  right: -145px;
  transition: all 1s ease-in-out;
  box-shadow: 4px 4px 4px rgba(43, 45, 54, 0.3);
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
