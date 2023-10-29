import styled from "styled-components";
import * as FONT from "../../../constants/font";
import * as COLOR from "../../../constants/color";
interface StyleProps {
  isSpread: boolean;
}

export const FDSAccoWrapper = styled.div`
  width: 100%;
`;

export const FDSAccoBox = styled.div``;

export const IconBox = styled.div`
  margin: 14px 0px 14px 20px;
  display: flex;
  align-items: center;
  font-size: ${FONT.M};
  font-weight: ${FONT.Bold};
`;
export const UpIcon = styled.div<StyleProps>`
  transition: 0.3s;
  transform: ${({ isSpread }) => (isSpread ? "rotate(180deg)" : "rotate(0deg)")};
  margin-right: 10px;
`;

export const Line = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${COLOR.Gray1};
`;
export const ExerciseAccBox = styled.div``;
export const ExerciseAcc = styled.div`
  justify-content: center;
  margin: 10px 0px;
  display: flex;
`;
