import styled from "styled-components";
import * as COLOR from "../../constants/color";
import * as FONT from "../../constants/font";
export const RoutineUserWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
  height: 120px;
  background-color: ${COLOR.White};
  box-shadow: 0px 4px 4px ${COLOR.Shadow};
  border-radius: 10px;
  margin: 40px;
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
  width: 100%;
  margin: 12px 0px 4px 10px;
  vertical-align: top;
`;

export const UserInfoBox = styled.div`
  display: flex;
  flex-direction: column;
`;
export const RoutineUserName = styled.div`
  font-size: ${FONT.L};
  color: ${COLOR.Black};
`;
export const RoutineInfo = styled.div`
  margin: 20px 0px;
  font-size: ${FONT.S};
  color: ${COLOR.Gray4};
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
  font-size: ${FONT.S};
  font-weight: ${FONT.Bold};
  color: ${COLOR.Red};
`;
export const LikeCount = styled.div`
  font-size: ${FONT.S};
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
  height: 20px;
  justify-content: space-between;
  justify-content: right;
`;
export const BottomBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 290px;
`;
export const RoutineDivide = styled.div`
  font-size: ${FONT.S};
  color: ${COLOR.Gray4};
`;
export const RoutineTime = styled.div`
  font-size: ${FONT.S};
  color: ${COLOR.Gray4};
`;
