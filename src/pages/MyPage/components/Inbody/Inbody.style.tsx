import styled from "styled-components";
import * as FONT from "../../../../constants/font";
import * as COLOR from "../../../../constants/color";

export const Wrapper = styled.div`
  padding: 20px;
`;

export const ScoreCard = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  box-shadow: 0 4px 4px ${COLOR.Shadow};
  padding: 20px;
  border-radius: 10px;
`;

export const Title = styled.h3`
  font-weight: ${FONT.Bold};
`;

export const Score = styled.span`
  font-size: ${FONT.L};
  font-weight: ${FONT.Bold};

  & > span {
    padding-left: 5px;
    font-size: ${FONT.S};
  }
`;

export const RadarBox = styled.div``;

export const LineChart = styled.div`
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 4px ${COLOR.Shadow};
  margin-bottom: 20px;
`;
