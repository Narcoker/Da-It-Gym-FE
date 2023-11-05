import { Link } from "react-router-dom";
import * as COLOR from "../../../constants/color";
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
  border: ${(props) =>
    props.active ? `2px solid ${COLOR.Primary}` : `1px solid ${COLOR.Gray2}`};
`;
