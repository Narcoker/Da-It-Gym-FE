import styled from "styled-components";
import * as COLOR from "../../constants/color";
export const FeedDetailWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 60px 0px;
`;
export const FeedDetailHeaderWrapper = styled.div`
  display: flex;
`;
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
