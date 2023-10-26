import * as FONT from "../../../../constants/font";
import * as COLOR from "../../../../constants/color";
import styled from "styled-components";

export const TrainerWrapper = styled.div`
  padding: 0 30px;
  margin-top: 0;
  margin-bottom: 60px;
`;
export const ButtonBox = styled.div`
  display: flex;
  width: 100%;
  gap: 15px;
  padding: 30px 10px;
`;

export const TrainerProfile = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px;
`;

export const Title = styled.h3`
  font-weight: ${FONT.Bold};
`;

export const TrainerInputBox = styled.div`
  padding: 10px;
`;

export const ContentTitle = styled.div`
  font-weight: ${FONT.Bold};
  font-size: ${FONT.S};
  margin-bottom: 20px;
`;

export const ImageUploadBox = styled.label`
  display: flex;
  width: 100%;
  height: 200px;
  background-color: ${COLOR.Sub1};
  border-radius: 10px;
  border: 3px dashed ${COLOR.Primary};
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 10px;
`;

export const ImageBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Files = styled.input`
  display: none;
`;

export const ImageInfo = styled.span`
  font-size: ${FONT.S};
  color: ${COLOR.Primary};
`;

export const Img = styled.img`
  width: 100%;
`;

export const ImgWrapper = styled.div`
  position: relative;
`;

export const Icon = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
`;
