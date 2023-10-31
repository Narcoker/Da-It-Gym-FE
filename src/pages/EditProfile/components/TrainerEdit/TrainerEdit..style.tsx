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

export const ContentList = styled.div`
  display: flex;
  gap: 10px;
`;
export const Content = styled.span`
  flex: 1;
  font-size: ${FONT.S};
  font-weight: ${FONT.Bold};
  text-align: center;
  padding: 5px;
`;

export const TrainerInput = styled.input`
  flex: 1;
  width: 100%;
  outline: none;
  border-radius: 5px;
  border: 1px solid ${COLOR.Gray2};
  &:focus {
    border: 1px solid ${COLOR.Primary};
  }
  margin-top: 10px;
  margin-bottom: 10px;
  padding: 5px;
`;

export const CertButtonBox = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-top: 20px;
  gap: 10px;
`;

export const Contents = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
