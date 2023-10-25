import styled from "styled-components";
import * as FONT from "../../constants/font";
import * as COLOR from "../../constants/color";

export const ExerciseWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 10px;
  padding-left: 25px;
  font-weight: ${FONT.Regular};
  font-size: ${FONT.S};
  align-items: center;
`;

export const ExerciseHeaderWrapper = styled(ExerciseWrapper)`
  padding-top: 20px;
`;
export const Title = styled.span`
  padding-bottom: 10px;
  flex: 1;
  text-align: center;
  width: 60px;
`;

export const ExerciseLeft = styled.div`
  display: flex;
  gap: 30px;
  flex-basis: 210px;
`;

export const ExerciseRight = styled.label`
  width: 32px;
  text-align: center;
`;

export const Record = styled.span`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3px;
  width: 60px;
`;

export const NumberInput = styled.input`
  width: 40px;
  border: none;
  font-size: ${FONT.S};
  padding: 5px 0;
  text-align: center;
  border-radius: 5px;
  cursor: pointer;

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  &:focus {
    outline: 2px solid ${COLOR.Primary};
  }
`;

export const Checkbox = styled.div`
  flex: 1;
  text-align: center;
  width: 100%;
  height: 20px;
  border-radius: 5px;
  background-color: ${COLOR.Gray2};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CheckboxHide = styled.input`
  display: none;

  &:checked + div {
    background-color: ${COLOR.Primary};
  }
`;
