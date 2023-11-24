import styled from "styled-components";
import * as FONT from "../../constants/font";
import * as COLOR from "../../constants/color";

export const AccordionContainer = styled.div`
  max-width: 100%;
  margin: 30px;
  margin-top: 80px;
  max-height: 90vh;
  overflow-y: auto;
`;

export const AccordionTitle = styled.h1`
  font-size: ${FONT.L};
  margin-bottom: 20px;
  margin-top: 20px;
`;

export const Img = styled.div`
  position: static;
`;

export const Gradient = styled.div`
  width: 100%;
  height: 150px;
  border-radius: 5px;
  background: linear-gradient(
    180deg,
    rgba(71, 122, 255, 0.6) 24%,
    rgba(128, 54, 222, 0.6) 95%
  );
`;

export const GridentTitle = styled.div`
  color: ${COLOR.White};
  padding: 10px;
  top: 30px;
  font-size: ${FONT.XL};
  font-size: ${FONT.Regular};
  position: relative;
  text-align: center;
`;

export const Center = styled.div`
  border: 1px solid ${COLOR.Gray1};
  border-radius: 5px;
  position: static;
  margin-top: 15px;
`;

export const Gtitle = styled.h1`
  align-items: center;
  color: ${COLOR.Gray4};
  font-size: ${FONT.S};
  margin-top: 10px;
  margin-bottom: 10px;
  padding: 5px;
  position: relative;
`;
