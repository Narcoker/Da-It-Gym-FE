import styled from "styled-components";
import * as COLOR from "../../constants/color";
import * as FONT from "../../constants/font";
export const RecoveryWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 85%;
  margin: 0 auto;
  position: relative;
`;
export const TitleWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-bottom: 12px;
  padding-left: 8px;
`;

export const InputTitle = styled.div`
  font-weight: ${FONT.Bold};
`;

export const NoticeContents = styled.div`
  display: flex;
  margin-top: 10px;
  padding: 50px 50px 50px 50px;
  padding-left: 8px;
  border: 1px double ${COLOR.Gray2};
  border-radius: 5px;
  text-align: center;
  justify-content: center;
  line-height: 24px;
`;

export const Line = styled.div`
  width: 100%;
  margin: 0 auto;
  border: 1px solid ${COLOR.Gray1};
  margin: 16px 0px;
`;
export const SkipComment = styled.div`
  width: 100%;
  font-size: ${FONT.XS};
  color: ${COLOR.Gray3};
`;
