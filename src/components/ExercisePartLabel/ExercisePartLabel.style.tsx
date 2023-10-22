import styled from "styled-components";
import * as FONT from "../../constants/font";
import * as COLOR from "../../constants/color";

export const Label = styled.label``;

export const ExerciseLabel = styled.span`
  display: inline-block;
  height: 28px;
  border: 1px solid ${COLOR.Primary};
  color: ${COLOR.Primary};
  padding: 0 20px;
  min-width: 64px;
  text-align: center;
  line-height: 28px;
  border-radius: 50px;
  font-size: ${FONT.S};
  font-weight: ${FONT.Bold};
  cursor: pointer;
`;

export const PartLabel = styled(ExerciseLabel)`
  transition: 0.3s;
  padding: 0 10px;
  &:hover {
    background-color: ${COLOR.Primary};
    color: ${COLOR.White};
  }
`;

export const Radio = styled.input`
  display: none;
  &:checked + span {
    background-color: ${COLOR.Primary};
    color: ${COLOR.White};
  }
`;
