import styled from "styled-components";
import * as COLOR from "../../../constants/color";
import * as FONT from "../../../constants/font";

export const SharePhotoWrapper = styled.div`
  margin-top: 100px;
  width: 100%;
  height: 600px;
  background-color: ${COLOR.Sub1};
  @media (max-width: 600px) {
    width: 100vw;
    height: 100vw;
  }
`;
export const SharePhotoBox = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const IconAddImg = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export const ShareTitle = styled.div`
  font-size: ${FONT.XXL};
  font-weight: ${FONT.Bold};
  color: ${COLOR.Primary};
  line-height: 42px;
  text-align: center;
`;
export const ImgInputForm = styled.form`
  display: flex;
  justify-content: right;
`;
export const InputFile = styled.input`
  display: none;
`;
export const AddLabel = styled.label`
  display: flex;
  width: 100px;
  height: 30px;
  cursor: pointer;
  justify-content: center;
  align-items: center;
  border: none;
  background-color: ${COLOR.Sub2};
  color: ${COLOR.White};
  font-size: ${FONT.S};
  border-radius: 5px;
  padding: 10px;
  &:hover {
    background-color: ${COLOR.Primary};
  }
`;
export const ImgBtnBox = styled.div`
  display: flex;
  justify-content: right;
  margin-top: 10px;
`;
export const ImgDelete = styled.div`
  display: flex;
  width: 100px;
  height: 30px;
  margin-right: 10px;
  cursor: pointer;
  justify-content: center;
  align-items: center;
  border: none;
  background-color: ${COLOR.Gray2};
  color: ${COLOR.White};
  font-size: ${FONT.S};
  border-radius: 5px;
  padding: 10px;
  &:hover {
    background-color: ${COLOR.Primary};
  }
`;
