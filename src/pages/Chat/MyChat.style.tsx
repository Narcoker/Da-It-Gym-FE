import styled from "styled-components";
import * as COLOR from "../../constants/color";
import * as FONT from "../../constants/font";

export const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  position: relative;
  margin-bottom: 10px;
`;

export const ProfileImgWrapper = styled.div`
  display: flex; /* flex를 사용하여 내부 요소들을 가로로 배치 */
  flex-direction: row-reverse; /* 요소들을 오른쪽에서 왼쪽으로 배치 */
  align-items: flex-start; /* 상단에 정렬 */
`;

export const ProfileImg = styled.img`
  width: 64px;
  height: 64px;
  border-radius: 10px;
  background-color: ${COLOR.Gray1};
  margin-left: 10px; /* 이미지와 메시지 사이의 간격 조정 */
`;

export const MessageInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Name = styled.div`
  text-align: end;
  font-size: ${FONT.S};
  font-weight: ${FONT.Bold};
  margin-bottom: 5px;
`;

export const Message = styled.div`
  position: relative;
  max-width: 300px;
  border-radius: 10px;
  background-color: ${COLOR.Primary};
  padding: 10px;
  font-size: ${FONT.S};
  color: ${COLOR.White};
  word-wrap: break-word;

  &::after {
    content: "";
    position: absolute;
    width: 10px;
    height: 10px;
    background-color: ${COLOR.Primary};
    right: 0;
    top: 0;
    transform: rotate(90deg) skewY(20deg);
  }
`;
