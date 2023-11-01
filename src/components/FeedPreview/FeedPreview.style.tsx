import styled from "styled-components";
import * as COLOR from "../../constants/color";
import * as FONT from "../../constants/font";

export const FeedPreviewWrapper = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  height: 100%;
  background-color: ${COLOR.White};
`;

export const PreviewImg = styled.img`
  width: 100%;
  object-fit: cover;
`;

export const ImgOverlay = styled.div`
  width: 100%;
  height: 100%;
  opacity: 0.3;
  z-index: 2;
  display: flex;
  position: absolute;
  background-color: ${COLOR.Gray4};
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
  margin-right: 5px;
  z-index: 3;
`;

export const CountIcon = styled.span`
  margin-top: 3px;
  margin-left: 3px;
`;

export const CountNumber = styled.span`
  margin-top: 3px;
  margin-left: 3px;
  font-size: ${FONT.XS};
`;
