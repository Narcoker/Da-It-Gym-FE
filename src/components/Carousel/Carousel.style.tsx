import styled from "styled-components";
import * as COLOR from "../../constants/color";
interface Props {
  ImgLength: number;
  currentIndex: number;
}
interface DotProps {
  index: number;
  currentIndex: number;
}
export const CarouselWrapper = styled.div`
  position: relative;
  overflow: hidden;

  width: 100%;
  /* 미디어 쿼리 썼을때 height를 100vw하면 되지 않을까 */
  height: 600px;
  margin: 0 auto;
  @media (max-width: 600px) {
    width: 100vw;
    height: 100vw;
  }
`;

export const CarouselListBox = styled.div<Props>`
  display: flex;
  width: ${(props) => `calc(100% * ${props.ImgLength})`};
  transform: ${(props) => `translateX(calc(-100%*${props.currentIndex}))`};
  transition: all 0.4s ease-in-out;
  /* 이 값이 현재 currentIndex를 계산해서 ListBox를 움직임 */
  width: 100%;
  height: 100%;
`;
export const CarouselElement = styled.img`
  width: 100%;
  height: 100%;
`;
export const IconBox = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0px 10px;
  text-align: center;
  align-items: center;
  width: 100%;
  position: absolute;

  z-index: 2;
  top: 50%;
`;
export const IconLeftArrow = styled.div`
  cursor: pointer;
`;
export const IconRightArrow = styled.div`
  cursor: pointer;
`;

export const DotBox = styled.div`
  position: absolute;
  display: flex;
  transform: translate(-50%, -50%);
  z-index: 2;
  bottom: 0;
  left: 50%;
`;
export const Dot = styled.div<DotProps>`
  color: ${(props) =>
    props.currentIndex === props.index ? `${COLOR.Gray1}` : `${COLOR.Gray4}`};

  font-size: 14px;
  margin: 0px 10px;
`;
