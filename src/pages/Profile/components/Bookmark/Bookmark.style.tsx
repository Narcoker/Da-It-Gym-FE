import styled from "styled-components";
import * as COLOR from "../../../../constants/color";
import * as FONT from "../../../../constants/font";

export const Wrapper = styled.div`
  height: 300px;
  display: flex;
  gap: 5px;
  padding: 0 10px;
  justify-content: center;
`;

export const BookmarkWrapper = styled.div`
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

export const Span = styled.span`
  display: flex;
  align-items: center;
  font-size: ${FONT.L};
  font-weight: ${FONT.Bold};
  color: ${COLOR.Gray1};
  flex-direction: column;
  justify-content: center;
  gap: 15px;
`;
