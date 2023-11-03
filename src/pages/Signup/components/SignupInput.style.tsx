import styled from "styled-components";
import * as COLOR from "../../../constants/color";
import * as FONT from "../../../constants/font";
interface Props {
  duplicate: boolean;
}
export const SignupInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 100%;
`;

export const SignupDuplicate = styled.div<Props>`
  flex: 1;
  gap: 5px;
  padding: 5px 0px 0px 10px;
  color: ${(props) => (props.duplicate ? `${COLOR.Red}` : `${COLOR.Green2}`)};
  font-size: ${FONT.XS};
`;
