import styled from "styled-components";
import * as COLOR from "../../../constants/color";
import * as FONT from "../../../constants/font";
interface Props {
  duplicate: string;
  check: boolean;
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
  color: ${(props) =>
    props.duplicate === "사용가능" && props.check ? `${COLOR.Green2}` : `${COLOR.Red}`};
  font-size: ${FONT.XS};
`;
