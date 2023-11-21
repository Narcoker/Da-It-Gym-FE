import { useState } from "react";
import * as S from "./CommentElement.style";
import { PropsComments, CommentsDataProps } from "../Comments";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { commentIdState, replyTargetState } from "../../../recoil/commentState";
import TagParser from "./TagParser";
import { userInfoState } from "../../../recoil/userInfoState";
import useFeedDiaryDetailAPI from "../../../api/useFeedDiaryDetailAPI";
import { useLocation, useParams } from "react-router";
import CommentReply from "./CommentReply";

interface CommentProps {
  data: PropsComments;
  textareaRef: React.RefObject<HTMLTextAreaElement>;
  totalAuthority: boolean;
  commentsData: CommentsDataProps;
  setCommentsData: React.Dispatch<React.SetStateAction<CommentsDataProps>>;
  setCommentCount: React.Dispatch<React.SetStateAction<number>>;
  flag: boolean;
}
export interface replyCommentProps {
  childCommnentsCnt: number;
  authority: boolean;
  childComments: replyElements[];
}
interface replyElements {
  childCommentId: number;
  nickname: string;
  imageUrl: string;
  childComment: string;
}

function CommentElement({
  data,
  textareaRef,
  totalAuthority,
  setCommentsData,
  setCommentCount,
  flag,
}: CommentProps) {
  const userInfo = useRecoilValue(userInfoState);
  const userNickname = userInfo?.nickname;
  const location = useLocation();
  const id = useParams();
  const [replySpread, setReplySpread] = useState(false);
  const setReplyTarget = useSetRecoilState(replyTargetState);
  const setCommentId = useSetRecoilState(commentIdState);
  const [spreadCommentId, setSpreadCommentId] = useState(-1);
  const { requestDeleteFeedDiaryComments } = useFeedDiaryDetailAPI();

  const handleDeleteComment = (commentId: number, type: string) => {
    console.log("삭제", commentId);

    if (location.pathname.startsWith("/feed/routine")) {
      requestDeleteFeedDiaryComments("routines", Number(id.routineId), commentId);
      if (type === "댓글") {
        setCommentsData((prev: CommentsDataProps) => ({
          ...prev,
          comments: prev.comments?.filter((data) => data.commentId !== commentId),
        }));
        setCommentCount((prev) => prev - 1);
      }
    } else if (location.pathname.startsWith("/feed/diary")) {
      requestDeleteFeedDiaryComments("feed-journals", Number(id.id), commentId);
      if (type === "댓글") {
        setCommentsData((prev: CommentsDataProps) => ({
          ...prev,
          comments: prev.comments?.filter((data) => data.commentId !== commentId),
        }));
        setCommentCount((prev) => prev - 1);
      }
    }
  };

  // console.log("🤖", commentsData);
  const handleReply = (commentId: number, nickname: string) => {
    // commentId: 댓글을 달려고 하는 것, nickname: 댓글 다는 대상
    // console.log("대댓글 버튼", commentId, nickname);
    setCommentId(commentId);
    setReplyTarget(nickname);
    textareaRef.current?.focus();
  };

  const handleSpreadReply = (commentId: number) => {
    setReplySpread((prev) => !prev);
    setSpreadCommentId(commentId);
    //🔥 API호출 해당 commentId에 해당하는 ReplyData 불러오기 setReplyData에 담아오기
    // requestCommentsReplyData(commentId);
  };

  return (
    <div>
      <S.CommentBox>
        <S.ContentsBox>
          <S.UserImgBox>
            <S.UserImg src={data.imageUrl} alt={data.commentId?.toString()} />
          </S.UserImgBox>
          <S.Contents>
            <S.Nickname>{data.nickname}</S.Nickname>
            <TagParser parsingText={data.comment} />
          </S.Contents>
        </S.ContentsBox>
        <S.ReplyDeleteWrapper>
          {(totalAuthority || userNickname === data.nickname) && (
            <S.Delete onClick={() => handleDeleteComment(data.commentId, "댓글")}>
              삭제
            </S.Delete>
          )}
          <S.Reply onClick={() => handleReply(data.commentId, data.nickname)}>
            댓글 달기
          </S.Reply>
        </S.ReplyDeleteWrapper>
        {data.childrenCnt >= 1 && (
          <>
            <S.ReplySpreadBox>
              <>
                <S.Line />
                <S.ReplySpread onClick={() => handleSpreadReply(data.commentId)}>
                  {replySpread ? "답글 숨기기" : `대댓글 보기 (${data.childrenCnt}개)`}
                </S.ReplySpread>
              </>
            </S.ReplySpreadBox>

            {replySpread && (
              <CommentReply
                totalAuthority={totalAuthority}
                userNickname={userNickname}
                handleReply={handleReply}
                id={id}
                flag={flag}
                spreadCommentId={spreadCommentId}
                data={data}
              />
            )}
          </>
        )}
      </S.CommentBox>
    </div>
  );
}

export default CommentElement;

// const ReplyData: PropsCommentsData = {
//   authority: true,
//   commentCnt: 3,
//   childComments: [
//     {
//       commentId: 1,
//       nickname: "김준서",
//       imageUrl: "https://thumb.photo-ac.com/9a/9a20d2e68bb6667a2ab1a9b8a9216f13_t.jpeg",
//       comment: "운동 잘하시네요",
//       childrenCnt: 10,
//     },
//     {
//       commentId: 2,
//       nickname: "한승재",
//       imageUrl:
//         "https://i.pinimg.com/1200x/d9/75/af/d975afd69d42e095c13e418f8916b1b0.jpg",
//       comment: "그럼요",
//       childrenCnt: 0,
//     },
//     {
//       commentId: 3,
//       nickname: "이정준",
//       imageUrl: "https://thumb.photo-ac.com/9a/9a20d2e68bb6667a2ab1a9b8a9216f13_t.jpeg",
//       comment:
//         "@comments 운동 잘하시네요, 운동법 관련해서 DM 보내고 싶은데 보내도 괜찮을까요?운동 잘하시네요, 운동법 관련해서 DM 보내고 싶은데 보내도 괜찮을까요?운동 잘하시네요, 운동법 관련해서 DM 보내고 싶은데 보내도 괜찮을까요?",
//       childrenCnt: 10,
//     },
//   ],
// };
