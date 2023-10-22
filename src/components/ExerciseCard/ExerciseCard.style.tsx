import styled from "styled-components";
import * as FONT from "../../constants/font";
import * as COLOR from "../../constants/color";

export const Card = styled.div`
  width: 90%;
  padding: 16px 20px;
  font-weight: ${FONT.Bold};
  border-radius: 10px;
  box-shadow: 0 4px 4px ${COLOR.Shadow};
  transition: 0.3s;
  cursor: pointer;

  &:hover {
    background-color: ${COLOR.Sub1};
  }
`;

export const Part = styled.span`
  padding-left: 15px;
  font-size: ${FONT.S};
  color: ${COLOR.Gray3};
`;
