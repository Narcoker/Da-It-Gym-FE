import styled from "styled-components";
import * as COLOR from "../../../../constants/color";
import * as FONT from "../../../../constants/font";
import { Link } from "react-router-dom";

export const Wrapper = styled.div`
  height: 300px;
  display: flex;
  gap: 5px;
  padding: 0 10px;
`;

export const BookmarkWrapper = styled(Link)`
  flex: 1;
  position: relative;
  cursor: pointer;
`;

export const Background = styled.img`
  width: 100%;
  position: absolute;
  z-index: 0;
`;

export const Overlay = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${COLOR.Shadow};
  position: absolute;
`;

export const BookmarkTitle = styled.span`
  color: ${COLOR.White};
  position: absolute;
  bottom: 10px;
  left: 10px;
  font-weight: ${FONT.Bold};
  font-size: ${FONT.S};
`;

export const RoutineWrapper = styled.div`
  width: 100%;
`;
