import styled from "styled-components";
import * as COLOR from "../../constants/color";
import * as FONT from "../../constants/font";

export const FeedPreviewWrapper = styled.div`
  position: relative;
  display: flex;
  width: 140px;
  height: 140px;
  background-color: ${COLOR.White};
`;

export const PreviewImg = styled.img`
  width: 100%;
  object-fit: cover;
`;

export const CountWrapper = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  color: ${COLOR.White};
  font-size: ${FONT.S};
  padding: 4px 8px;
  display: flex;
`;

export const CountBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CountIcon = styled.span`
  margin-top: 3px;
  margin-left: 3px;
`;

export const CountNumber = styled.span`
  margin-top: 3px;
  margin-left: 3px;
`;
