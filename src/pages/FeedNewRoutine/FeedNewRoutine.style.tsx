import styled from "styled-components";
import * as COLOR from "../../constants/color";
import * as FONT from "../../constants/font";

export const BoardContainer = styled.div`
  margin-top: 40px;
  padding: 20px 45px;
`;

export const BoardHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 0;
`;

export const WriterInfoWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const WriterProfileImgWrapper = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 10px;
  background-color: ${COLOR.Gray1};
`;

export const WriterProfileImg = styled.img``;

export const FunctionsWrapper = styled.div`
  display: flex;
  gap: 10px;
`;

export const FunctionIconWrapper = styled.div``;

export const BoardTitleWrapper = styled.div``;

export const BoardTitle = styled.span`
  font-size: ${FONT.M};
  font-weight: ${FONT.Bold};
`;

export const BoardWritedTime = styled.span`
  font-size: ${FONT.S};
  font-weight: ${FONT.Regular};
  color: ${COLOR.Gray2};
`;

export const BoardDescriptionWrapper = styled.div``; // 고민 중

export const Description = styled.p`
  padding: 2px 0;
  color: ${COLOR.Gray3};
  font-size: ${FONT.S};
`;

export const RoutineContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const RoutineFunctionsContainer = styled.div`
  display: flex;
  gap: 10px;
  padding: 100px 45px;
`;
