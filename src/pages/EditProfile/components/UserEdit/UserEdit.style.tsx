import styled from "styled-components";
import * as FONT from "../../../../constants/font";
import * as COLOR from "../../../../constants/color";

export const Wrapper = styled.div`
  margin-top: 60px;
  padding: 20px 30px;
`;

export const ButtonBox = styled.div`
  display: flex;
  width: 100%;
  gap: 15px;
  padding: 30px 0px;
`;

export const PlaceWrapper = styled.div`
  padding: 20px 0;
`;

export const Title = styled.h3`
  padding-left: 10px;
  font-weight: ${FONT.Bold};
  padding-bottom: 10px;
`;

export const Place = styled.div`
  width: 100%;
  height: 48px;
  border-radius: 5px;
  cursor: pointer;
  position: relative;
  border: 1px solid ${COLOR.Gray1};
`;

export const GymName = styled.span`
  line-height: 48px;
  padding-left: 15px;
  color: ${COLOR.Gray2};
`;

export const Icon = styled.div`
  position: absolute;
  right: 15px;
  top: 50%;
  transform: translateY(-50%);
`;

export const ProfileWrapper = styled.div`
  display: flex;
  padding-bottom: 20px;
`;

export const ProfileImg = styled.img`
  width: 64px;
  height: 64px;
  border-radius: 20px;
`;

export const ProfileImgWrapper = styled.label``;

export const File = styled.input`
  display: none;
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
