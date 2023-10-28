import styled from "styled-components";
import * as COLOR from "../../constants/color";
import * as FONT from "../../constants/font";

export const Footer = styled.footer`
  display: flex;
  font-size: ${FONT.XS};
  color: ${COLOR.Gray2};
  justify-content: center;
  gap: 5px;
  padding: 30px;
  margin-bottom: 60px;
  align-items: center;
`;

export const Button = styled.button`
  border: none;
  font-size: ${FONT.XS};
  color: ${COLOR.Gray2};
  background-color: transparent;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

export const Span = styled.span``;
