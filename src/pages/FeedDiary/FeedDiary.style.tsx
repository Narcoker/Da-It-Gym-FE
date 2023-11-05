import styled from "styled-components";
import * as COLOR from "../../constants/color";
export const TopRef = styled.div`
  opacity: 1;
`;
export const FeedDiaryWrapper = styled.div`
  margin: 60px 0px;
`;

export const UpIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  &:hover {
    color: ${COLOR.White};
  }
`;

export const MoveToTopButton = styled.div`
  display: flex;
  position: fixed;
  width: 30px;
  height: 30px;
  background-color: ${COLOR.Gray0};
  border-radius: 50%;
  z-index: 99;
  bottom: 90px;
  margin-left: 550px;
  &:hover {
    background-color: ${COLOR.White};
  }
  cursor: pointer;
`;
