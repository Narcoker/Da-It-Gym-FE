import styled from "styled-components";
import * as COLOR from "../../constants/color";

export const FeedDetailHeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  color: ${COLOR.Gray2};
`;

export const LeftBox = styled.div`
  display: flex;
  align-items: center;
  margin: 11px 0px 11px 15px;
`;
export const UserImg = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 10px;
  margin-right: 14px;
`;
export const UploadTime = styled.div``;
export const IconBox = styled.div`
  display: flex;
  align-items: center;
`;
export const UserNickName = styled.div`
  color: ${COLOR.Black};
  margin-right: 15px;
`;
export const IconBookMark = styled.div`
  margin-right: 15px;
  cursor: pointer;
`;
export const IconHeart = styled.div`
  margin-right: 15px;
  cursor: pointer;
`;
export const IconTrash = styled.div`
  margin-right: 15px;
  cursor: pointer;
`;
