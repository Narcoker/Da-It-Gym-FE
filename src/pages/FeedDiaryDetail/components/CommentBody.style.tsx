import styled from "styled-components";

export const CommentBodyWrapper = styled.div`
  padding: 15px;
  width: 600px;
  height: 600px;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;
