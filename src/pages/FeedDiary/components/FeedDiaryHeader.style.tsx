import { Link } from "react-router-dom";
import * as COLOR from "../../../constants/color";
import * as FONT from "../../../constants/font";
import styled from "styled-components";

interface Props {
  active: boolean;
}

export const HeaderWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 50px;
  border-bottom: 1px solid ${COLOR.Gray2};
`;
export const TitleLink = styled(Link)<Props>`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  color: ${(props) => (props.active ? COLOR.Primary : COLOR.Gray2)};
  font-weight: ${FONT.Bold};
  border-bottom: 1px solid ${COLOR.Gray1};
  border-right: 1px solid ${COLOR.Gray1};
  border-top: ${(props) => (props.active ? `1px solid ${COLOR.Primary}` : `transparent`)};
  &:last-child {
    border-right: 1px solid transparent;
  }
`;
