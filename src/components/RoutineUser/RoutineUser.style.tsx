import styled from "styled-components";
import * as COLOR from "../../constants/color";
import * as FONT from "../../constants/font";
export const RoutineUserWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 120px;
  background-color: ${COLOR.White};
  box-shadow: 0px 4px 4px ${COLOR.Shadow};
  border-radius: 10px;
  padding: 6px 16px 6px 16px;
`;
export const RoutineTop = styled.div`
  display: flex;
  width: 100%;
  height: 130px;
`;
export const RoutineUserImg = styled.img`
  width: 64px;
  height: 64px;
  border-radius: 10px;
`;

export const UserBox = styled.div`
  display: flex;
  justify-content: space-between;
  flex: 1;
  margin: 3px 0px 4px 10px;
  vertical-align: top;
`;

export const UserInfoBox = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`;
export const RoutineUserName = styled.div`
  font-size: ${FONT.M};
  color: ${COLOR.Black};
`;
export const RoutineInfo = styled.div`
  padding-top: 3px;
  width: 90%;

  font-size: ${FONT.XS};
  color: ${COLOR.Gray3};
`;

export const LikeShareBox = styled.div`
  display: flex;
`;
export const LikeBox = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-right: 5px;
`;
export const LikeIcon = styled.div`
  font-size: ${FONT.XS};
  font-weight: ${FONT.Bold};
  color: ${COLOR.Red};
`;
export const LikeCount = styled.div`
  font-size: ${FONT.XS};
  color: ${COLOR.Gray2};
`;
export const ShareBox = styled(LikeBox)`
  margin-right: 0px;
`;
export const ShareIcon = styled(LikeIcon)`
  color: ${COLOR.Gray2};
`;
export const ShareCount = styled(LikeCount)``;

export const RoutineBottom = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: right;
`;
export const BottomBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: calc(100% - 74px);
  height: fit-content;
  align-items: center;
`;
export const RoutineDivide = styled.div`
  font-size: ${FONT.S};
  color: ${COLOR.Gray3};
`;
export const RoutineTime = styled.div`
  font-size: ${FONT.S};
  color: ${COLOR.Gray2};
`;
