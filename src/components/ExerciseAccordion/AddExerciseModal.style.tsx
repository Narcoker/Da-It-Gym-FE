import styled from "styled-components";
import * as FONT from "../../constants/font";
import * as COLOR from "../../constants/color";

export const Overlay = styled.div`
  position: fixed;
  width: 100%;
  height: 100vh;
  background-color: ${COLOR.Shadow};
  top: 0;
  left: 0;
  z-index: 100;
`;

export const Wrapper = styled.div`
  position: absolute;
  width: 340px;

  background-color: ${COLOR.White};
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: ${FONT.L};
  font-weight: ${FONT.Bold};
  text-align: center;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 4px ${COLOR.Shadow};
`;

export const PartsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  flex-wrap: wrap;
`;

export const ExercisePartLabelWrapper = styled.span``;

export const ExercisesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: left;
  gap: 20px;
  height: 400px;
  overflow: auto;
  padding: 20px 0;
`;

export const ExerciseCardWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;

export const ButtonBox = styled.div`
  display: flex;
  gap: 10px;
`;
