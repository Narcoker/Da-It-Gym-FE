import styled from "styled-components";
import * as COLOR from "../../constants/color";
import * as FONT from "../../constants/font";

export const CommentTotalCount = styled.div`
  flex: 1;
  font-size: ${FONT.L};
  padding: 5px 15px;
`;
export const CommentsWrapper = styled.div`
  width: 100%;
  max-height: 500px;
  overflow-y: scroll;
`;

export const CommentBox = styled.div`
  padding: 5px 15px;
`;

export const ContentsBox = styled.div`
  display: flex;
  flex: 1;
  gap: 12px;
  padding: 0 auto;
`;
export const UserImgBox = styled.div`
  width: 52px;
  height: 52px;
`;
export const UserImg = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 10px;
`;
export const Contents = styled.div`
  flex: 1;
  background-color: ${COLOR.Sub1};
  padding: 20px 13px;
  border-radius: 5px;
  line-height: 18px;
  font-size: ${FONT.S};
`;
export const Nickname = styled.div`
  display: inline-block;
  font-weight: ${FONT.Bold};
  color: ${COLOR.Sub3};
  margin-right: 3px;
`;
export const ReplyDeleteWrapper = styled.div`
  display: flex;
  flex: 1;
  justify-content: right;
  margin-top: 5px;
  gap: 10px;
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
