import styled from "styled-components";
import * as FONT from "../../../../constants/font";
import * as COLOR from "../../../../constants/color";

export const ProfileWrapper = styled.div`
  display: flex;
  padding: 20px 20px 0 20px;
`;

export const ProfileImg = styled.img`
  width: 100%;
  height: 100%;
  background-color: ${COLOR.White};
`;

export const ProfileBox = styled.div`
  padding: 10px 0 0 20px;
  flex: 1;
`;

export const ProfileContent = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;
export const Nickname = styled.span`
  font-weight: ${FONT.Bold};
  display: flex;
  gap: 10px;
`;

export const Place = styled.span`
  font-size: ${FONT.XS};
  font-weight: ${FONT.Bold};
  color: ${COLOR.Gray2};
`;

export const ButtonBox = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
  flex-wrap: wrap;
`;

export const ProfileButton = styled.button`
  border: none;
  padding: 3px 10px;
  border-radius: 50px;
  font-weight: ${FONT.Bold};
  background-color: ${COLOR.Sub1};
  cursor: pointer;
`;

export const ProfileDiv = styled.div`
  width: 70px;
  height: 70px;
  border-radius: 10px;
  position: relative;
  overflow: hidden;
`;

export const FollowDeleteButton = styled(ProfileButton)`
  color: ${COLOR.Gray0};
  background-color: ${COLOR.Gray1};
`;

export const CounterBox = styled(ButtonBox)`
  gap: 20px;
  flex-wrap: nowrap;
`;

export const PreferredSplit = styled.div`
  background-color: ${COLOR.Green1};
  padding: 5px 10px;
  border-radius: 5px;
  color: ${COLOR.Green2};
`;

export const CounterButton = styled(ProfileButton)`
  background-color: transparent;
`;

export const Desc = styled.div`
  padding: 20px;
`;

export const DivideBox = styled.div`
  font-size: ${FONT.S};
  font-weight: ${FONT.Bold};
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 10px;
`;

export const Select = styled.select`
  padding: 2px 10px;
  border-radius: 5px;
  border: 1px solid ${COLOR.Gray2};
  color: ${COLOR.Gray3};
  font-size: ${FONT.XS};
  font-weight: ${FONT.Bold};
`;

export const Introduce = styled.div`
  width: 100%;
  height: 72px;
  font-size: ${FONT.S};
  line-height: 1.2em;
`;

export const Role = styled.div`
  display: flex;
  font-size: ${FONT.S};
  align-items: center;
  justify-content: center;
  padding: 5px 10px;
  background-color: ${COLOR.Brown1};
  color: ${COLOR.Brown2};
  border-radius: 5px;
`;

export const ProfileSpan = styled.span`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  text-align: center;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 3px 0;
  color: ${COLOR.White};
  font-size: ${FONT.XS};
`;
