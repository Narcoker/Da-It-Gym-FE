import * as S from "./CommentHeader.style";

function CommentHeader() {
  const commentCnt = 11;
  return (
    <S.CommentHeaderWrapper>
      <S.CommentCntBox>댓글 {commentCnt}개</S.CommentCntBox>
    </S.CommentHeaderWrapper>
  );
}

export default CommentHeader;
