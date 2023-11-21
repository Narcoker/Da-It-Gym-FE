import styled from "styled-components";
import * as FONT from "../../../constants/font";
import * as COLOR from "../../../constants/color";
interface StyleProps {
  isSpread: boolean;
}

export const FDDAccoWrapper = styled.div`
  width: 100%;
`;

export const FDDAccoBox = styled.div``;
export const TotalExerciseTime = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: right;
`;
export const IconBox = styled.div`
  margin: 14px 14px 14px 20px;
  display: flex;
  align-items: center;
  justify-content: cnenter;
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
export const FDDFooter = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: ${FONT.S};
`;
export const FooterIconBox = styled.div`
  display: flex;
  align-items: center;
  margin: 10px 14px;
  gap: 5px;
  color: ${COLOR.Gray3};
`;
export const LabelList = styled.div`
  display: flex;
  gap: 5px;
  margin: 10px 14px;
  width: 100%;
`;
export const ExerciseAcc = styled.div`
  justify-content: center;
  margin: 10px 0px;
  display: flex;
  flex-direction: column;
`;
