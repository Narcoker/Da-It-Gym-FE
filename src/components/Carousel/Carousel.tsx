import { useEffect, useState } from "react";
import * as Icon from "../Icon";
import * as S from "./Carousel.style";
interface Props {
  list: List[];
}
interface List {
  id: number;
  url: string;
}

function Carousel({ list }: Props) {
  console.log("list", list);
  const ImgLength = list.length;
  const [currentIndex, setCurrentIndex] = useState(0);
  const handlePrev = () => {
    console.log(currentIndex);
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    } else if (currentIndex <= 0) {
      setCurrentIndex(ImgLength - 1);
    }
  };
  const handleNext = () => {
    console.log(currentIndex);
    if (currentIndex < ImgLength - 1) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      setCurrentIndex(0);
    }
  };
  useEffect(() => {}, [currentIndex]);
  console.log("ImgLength", ImgLength);
  return (
    <>
      <S.CarouselWrapper>
        <S.CarouselListBox ImgLength={ImgLength} currentIndex={currentIndex}>
          {list.map((data) => {
            return (
              <>
                <S.CarouselElement src={data.url} alt={`img${data.id}`} />
              </>
            );
          })}
        </S.CarouselListBox>
        {ImgLength > 1 && (
          <S.IconBox>
            <S.IconLeftArrow onClick={handlePrev}>
              <Icon.LeftArrow color="white" size="24" />
            </S.IconLeftArrow>
            <S.IconRightArrow onClick={handleNext}>
              <Icon.RightArrow color="white" size="24" />
            </S.IconRightArrow>
          </S.IconBox>
        )}
        <S.DotBox>
          {list.map((data, index) => {
            return (
              <S.Dot key={index} index={index} currentIndex={currentIndex}>
                ●
              </S.Dot>
            );
          })}
        </S.DotBox>
      </S.CarouselWrapper>
    </>
  );
}

export default Carousel;
