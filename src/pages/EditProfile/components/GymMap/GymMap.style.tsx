import styled from "styled-components";
import * as COLOR from "../../../../constants/color";
import * as FONT from "../../../../constants/font";
import { Map } from "react-kakao-maps-sdk";

export const SearchInputBox = styled.div`
  display: flex;
  width: 100%;
  padding: 20px;
  gap: 5px;
`;

export const SearchInput = styled.input`
  flex: 1;
  padding-left: 10px;
  border-radius: 5px;
  outline: none;
  border: 1px solid ${COLOR.Gray1};
  &:focus {
    border: 1px solid ${COLOR.Primary};
  }
`;

export const MapWrapper = styled.div`
  padding: 0 20px;
  width: 100%;
  padding-bottom: 20px;
  /* display: none; */
`;

export const MapStyle = styled(Map)`
  width: 100%;
  height: 300px;
  position: static;
`;

export const MarkerInfo = styled.div`
  min-width: 150px;
  width: fit-content;
  padding: 10px;
  background-color: ${COLOR.Primary};
  border: none;
  color: ${COLOR.White};
  text-align: center;
  position: relative;
  white-space: nowrap;
`;

export const Square = styled.div`
  position: absolute;
  top: 99%;
  left: 50%;
  width: 12px;
  height: 12px;
  background-color: ${COLOR.Primary};
  transform: translate(-50%, -50%) rotate(45deg);
`;

export const GymLists = styled.div`
  height: 300px;
  background-color: ${COLOR.White};
  overflow-y: scroll;
  padding: 20px;
`;

export const NoList = styled.div`
  height: 300px;
  background-color: ${COLOR.White};
  padding: 20px;
  font-size: ${FONT.L};
  font-weight: ${FONT.Bold};
  color: ${COLOR.Gray2};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const GymList = styled.label`
  display: flex;
  align-items: center;
  gap: 5px;
  background-color: ${COLOR.White};
  font-size: ${FONT.S};
  padding: 15px 25px;
  cursor: pointer;
  transition: 0.3s;
  border-radius: 10px;
  &:hover {
    background-color: ${COLOR.Sub1};
  }
`;

export const HideRadio = styled.input`
  display: none;

  &:checked + label {
    background-color: ${COLOR.Sub1};
  }
`;
