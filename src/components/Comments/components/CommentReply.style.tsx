import styled from "styled-components";
import * as COLOR from "../../../constants/color";
import * as FONT from "../../../constants/font";
export const ReplyDeleteWrapper = styled.div`
  display: flex;
  flex: 1;
  justify-content: right;
  margin-top: 5px;
  gap: 10px;
`;
export const UserImgBox = styled.div`
  width: 35px;
  height: 35px;
`;
export const UserImg = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 10px;
`;
export const Nickname = styled.div`
  display: inline-block;
  font-weight: ${FONT.Bold};
  color: ${COLOR.Black};
  margin-right: 3px;
`;
export const Delete = styled.div`
  font-size: ${FONT.XS};
  color: ${COLOR.Red};
  cursor: pointer;
`;
export const Reply = styled.div`
  font-size: ${FONT.XS};
  color: ${COLOR.Gray2};
  cursor: pointer;
`;

export const PlusIcon = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  cursor: pointer;
  margin: 10px 0px 20px 0px;
`;

export const ReplySpreadBox = styled.div`
  display: flex;
  justify-content: right;
  font-size: ${FONT.XS};
  color: ${COLOR.Gray2};
  gap: 5px;
  margin-top: 15px;
`;
export const Line = styled.div`
  flex: 0.85;
  border-top: 1px solid ${COLOR.Gray1};
`;
export const ReplySpread = styled.div`
  cursor: pointer;
`;
export const ReplyCommentWrapper = styled.div``;
export const ReplyCommentBox = styled.div`
  flex: 1;
  display: flex;
  justify-content: right;
  padding: 3px;
  gap: 12px;
`;
export const ReplyContents = styled.div`
  flex: 0.85;
  gap: 12px;
  padding: 0 auto;
  background-color: ${COLOR.Gray0};
  padding: 20px 13px;
  border-radius: 5px;
  line-height: 18px;
  font-size: ${FONT.S};
`;
