import styled from "styled-components";
import * as FONT from "../../../../constants/font";
import * as COLOR from "../../../../constants/color";

export const TimeText = styled.div`
  color: ${COLOR.White};
  font-size: ${FONT.S};
  font-weight: ${FONT.Bold};
`;

export const Time = styled.div`
  color: ${COLOR.White};
  text-align: center;
  font-weight: ${FONT.Bold};
  font-size: ${FONT.L};
  padding-top: 5px;
`;
export const RestTime = styled.div`
  flex: 1;
`;
export const TimeWrapper = styled.div`
  flex: 1;
  margin: 10px;
  border-right: 1px solid ${COLOR.White};
`;
