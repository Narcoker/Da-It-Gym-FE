import styled from "styled-components";
import * as COLOR from "../../constants/color";
import * as FONT from "../../constants/font";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 60px;
`;

export const CalendarWrapper = styled.div`
  display: flex;
  box-shadow: 0 4px 4px ${COLOR.Shadow};
  border-radius: 10px;
`;

export const Header = styled.header`
  font-weight: ${FONT.Bold};
  font-size: ${FONT.L};
  padding: 30px;
  padding-top: 50px;
`;

export const ButtonBox = styled.div`
  display: flex;
  width: 100%;
  max-width: 350px;
  gap: 10px;
  padding: 50px 0;
`;
