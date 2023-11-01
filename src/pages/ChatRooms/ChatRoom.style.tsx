import styled from "styled-components";
import * as COLOR from "../../constants/color";
import * as FONT from "../../constants/font";
export const ChatRoomWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 75px;
  background-color: ${COLOR.White};
  box-shadow: 0px 4px 4px ${COLOR.Shadow};
  border-radius: 10px;
  padding: 6px 0px 6px 16px;
`;

export const UserImg = styled.img`
  width: 64px;
  height: 64px;
  border-radius: 10px;
  background-color: ${COLOR.Gray1};
`;

export const UserBox = styled.div`
  display: flex;
  justify-content: space-between;
  flex: 1;
  margin: 12px 10px;
`;

export const UserInfoBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;
export const UserName = styled.div`
  font-size: ${FONT.M};
  color: ${COLOR.Black};
`;
export const ResentMessage = styled.div`
  font-size: ${FONT.XS};
  color: ${COLOR.Gray4};
`;
export const DateBox = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  flex-direction: column;
`;
export const Date = styled.div`
  font-size: ${FONT.XS};
  font-weight: ${FONT.Regular};
  color: ${COLOR.Gray2};
`;
