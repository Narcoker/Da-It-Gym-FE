import styled from "styled-components";
import * as COLOR from "../../../../constants/color";
import { Link } from "react-router-dom";

export const ContentWrapper = styled.div`
  width: 100%;
`;

export const ContentMenuHeader = styled.nav`
  width: 100%;
  display: flex;
`;

export const IconWrapper = styled(Link)`
  flex: 1;
`;
export const Icon = styled.div`
  text-align: center;
  padding: 10px;
  border-top: 2px solid ${COLOR.Gray1};
  cursor: pointer;
`;

export const IconActivate = styled(Icon)`
  border-top: 2px solid ${COLOR.Primary};
`;

export const Contents = styled.article`
  width: 100%;
`;
