import styled from "styled-components";
import * as FONT from "../../../constants/font";
export const TagWrapper = styled.div`
  width: 100%;
  /* padding: 50px 20px 30px 20px; */
  font-size: ${FONT.M};
  font-weight: ${FONT.Bold};
`;

export const TagTitle = styled.div`
  display: flex;
  width: 100%;
  margin: 20px 5px;
`;

export const TagDivistionBox = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 auto;
  width: 85%;
  justify-content: space-between;
  flex: 1;
  padding: 15px 0px;
`;
