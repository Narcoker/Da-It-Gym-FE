import styled from "styled-components";
import * as FONT from "../../../../constants/font";
import * as COLOR from "../../../../constants/color";

export const FooterNav = styled.nav`
  position: fixed;
  width: 100%;
  max-width: 600px;
  height: 60px;
  background-color: ${COLOR.Primary};
  bottom: 0;
  display: flex;
  z-index: 100;
`;

export const RestTime = styled.div`
  flex: 1;
`;
export const TimeWrapper = styled.div`
  flex: 1;
  margin: 10px;
  border-right: 1px solid ${COLOR.White};
`;

export const ButtonBox = styled.div`
  flex: 1;
  display: flex;
  width: 100%;
  gap: 10px;
  align-items: center;
  justify-content: center;
`;

export const Icon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 32px;
  width: 32px;
  border-radius: 5px;
  background-color: ${COLOR.Yellow};
  cursor: pointer;
`;

export const StartIcon = styled(Icon)`
  background-color: ${COLOR.Green2};
`;

export const CheckIcon = styled(Icon)`
  background-color: ${COLOR.Sub2};
`;

export const TimeText = styled.div`
  color: ${COLOR.White};
  font-size: ${FONT.S};
  font-weight: ${FONT.Bold};
`;

export const Time = styled.div`
  color: ${COLOR.White};
  text-align: center;
  font-weight: ${FONT.Bold};
  font-size: ${FONT.L};
  padding-top: 5px;
`;
