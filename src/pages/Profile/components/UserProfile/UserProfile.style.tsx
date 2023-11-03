import styled from "styled-components";
import * as FONT from "../../../../constants/font";
import * as COLOR from "../../../../constants/color";

export const ProfileWrapper = styled.div`
  display: flex;
  padding: 20px 20px 0 20px;
`;

export const ProfileImg = styled.img`
  width: 70px;
  height: 70px;
  background-color: black;
  border-radius: 20px;
`;

export const ProfileBox = styled.div`
  padding: 10px 0 0 20px;
  flex: 1;
`;

export const ProfileContent = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-bottom: 20px;
`;
export const Nickname = styled.span`
  font-weight: ${FONT.Bold};
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

export const CounterBox = styled(ButtonBox)`
  gap: 20px;
  flex-wrap: nowrap;
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
  background-color: ${COLOR.Gray1};
`;
