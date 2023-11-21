import { useEffect, useState } from "react";
import * as S from "./CommentReply.style";
import TagParser from "./TagParser";
import { replyCommentProps } from "./CommentElement";
import useFeedDiaryDetailAPI from "../../../api/useFeedDiaryDetailAPI";
import { Params } from "react-router";
import { PropsComments } from "../Comments";

interface CommentReplyProps {
  totalAuthority: boolean;
  userNickname: string;
  handleReply: (commentId: number, nickname: string) => void;
  id: Readonly<Params<string>>;
  data: PropsComments;
  spreadCommentId: number;
  flag: boolean;
}

function CommentReply({
  totalAuthority,
  userNickname,
  handleReply,
  id,
  data,
  flag,
  spreadCommentId,
}: CommentReplyProps) {
  const { requestDeleteFeedDiaryComments, requestFeedCommentsReply } =
    useFeedDiaryDetailAPI();

  const [replyData, setReplyData] = useState<replyCommentProps>({
    childCommnentsCnt: 0,
    authority: false,
    childComments: [],
  });

  const handleDeleteCommentReply = (commentId: number) => {
    console.log("삭제", commentId);

    if (location.pathname.startsWith("/feed/routine")) {
      requestDeleteFeedDiaryComments("routines", Number(id.routineId), commentId);
      {
        setReplyData((prev: replyCommentProps) => ({
          ...prev,
          childComments: prev.childComments?.filter(
            (data) => data.childCommentId !== commentId,
          ),
        }));
      }
    } else if (location.pathname.startsWith("/feed/diary")) {
      requestDeleteFeedDiaryComments("feed-journals", Number(id.id), commentId);
      {
        setReplyData((prev: replyCommentProps) => ({
          ...prev,
          childComments: prev.childComments?.filter(
            (data) => data.childCommentId !== commentId,
          ),
        }));
      }
    }
  };
  const requestCommentsReplyData = async (commentId: number) => {
    if (location.pathname.startsWith("/feed/routine")) {
      await requestFeedCommentsReply(
        "routines",
        Number(id.routineId),
        commentId,
        setReplyData,
      );
    } else if (location.pathname.startsWith("/feed/diary")) {
      await requestFeedCommentsReply(
        "feed-journals",
        Number(id.id),
        commentId,
        setReplyData,
      );
    }
  };
  useEffect(() => {
    requestCommentsReplyData(spreadCommentId);
  }, [flag]);
  return (
    <S.ReplyCommentWrapper>
      {replyData.childComments.map((reply) => (
        <>
          <S.ReplyCommentBox>
            <S.UserImgBox>
              <S.UserImg src={reply.imageUrl} alt={reply.childCommentId.toString()} />
            </S.UserImgBox>
            <S.ReplyContents>
              <S.Nickname>{reply.nickname}</S.Nickname>
              <TagParser parsingText={reply.childComment} />
            </S.ReplyContents>
          </S.ReplyCommentBox>
          <S.ReplyDeleteWrapper>
            {(totalAuthority || userNickname === reply.nickname) && (
              <S.Delete onClick={() => handleDeleteCommentReply(reply.childCommentId)}>
                삭제
              </S.Delete>
            )}
            <S.Reply onClick={() => handleReply(data.commentId, reply.nickname)}>
              댓글 달기
            </S.Reply>
          </S.ReplyDeleteWrapper>
        </>
      ))}
    </S.ReplyCommentWrapper>
  );
}

export default CommentReply;
