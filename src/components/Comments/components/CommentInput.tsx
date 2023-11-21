import Button from "../../Button/Button";
import * as Icon from "../../../components/Icon";
import * as FONT from "../../../constants/font";
import * as COLOR from "../../../constants/color";
import * as S from "./CommentInput.style";
import { useRecoilState, useRecoilValue } from "recoil";
import { commentIdState, replyTargetState } from "../../../recoil/commentState";
import React, { useEffect, useState } from "react";
import { PropsComments, CommentsDataProps } from "../Comments";
import { toast } from "react-toastify";
import { userInfoState } from "../../../recoil/userInfoState";
import useFeedDiaryDetailAPI from "../../../api/useFeedDiaryDetailAPI";
import { useLocation, useParams } from "react-router";

interface Props {
  textareaRef: React.RefObject<HTMLTextAreaElement>;
  commentsData: CommentsDataProps;
  setCommentsData: React.Dispatch<React.SetStateAction<CommentsDataProps>>;
  setFlag: React.Dispatch<React.SetStateAction<boolean>>;
  setCommentCount: React.Dispatch<React.SetStateAction<number>>;
}

function CommentInput({
  textareaRef,
  commentsData,
  setCommentsData,
  setFlag,
  setCommentCount,
}: Props) {
  // 로그인 유저 정보
  const userInfo = useRecoilValue(userInfoState);
  const userNickname = userInfo?.nickname;
  const userImage = userInfo?.userProfileImgUrl;
  const location = useLocation();
  const id = useParams();
  //
  const [replyTarget, setReplyTarget] = useRecoilState(replyTargetState);
  const [commentId, setCommentId] = useRecoilState(commentIdState);
  const [text, setText] = useState<string>("");
  const { requestPostFeedComments } = useFeedDiaryDetailAPI();
  const handleSubmit = async (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();

    //댓글 달기를 누르지 않을 경우 새로 위로 데이터 추가해주면 된다.
    if (text.trim() !== "") {
      if (commentId === -1 && replyTarget === "") {
        if (location.pathname.startsWith("/feed/routine")) {
          await requestPostFeedComments("routines", Number(id.routineId), text);
        } else if (location.pathname.startsWith("/feed/diary")) {
          await requestPostFeedComments("feed-journals", Number(id.id), text);
        }
        setCommentCount((prev) => prev + 1);
        const newComment: PropsComments = {
          commentId: 1,
          nickname: userNickname,
          imageUrl: userImage,
          comment: text,
          childrenCnt: 0,
        };
        if (commentsData.comments) {
          setCommentsData({
            authority: commentsData?.authority,
            commentCnt: commentsData?.commentCnt,
            comments: [newComment, ...commentsData.comments],
          });
        } else {
          setCommentsData({
            authority: commentsData?.authority,
            commentCnt: commentsData?.commentCnt,
            comments: [newComment],
          });
        }
      } else {
        if (location.pathname.startsWith("/feed/routine")) {
          setFlag(true); // -> 🚨 대댓글 다시 불러와주는 녀석
          await requestPostFeedComments(
            "routines",
            Number(id.routineId),
            text,
            commentId,
          );
        } else if (location.pathname.startsWith("/feed/diary")) {
          setFlag(true); //-> 🚨 대댓글 다시 불러와주는 녀석
          await requestPostFeedComments("feed-journals", Number(id.id), text, commentId);
        }
      }
      setFlag(false);
    } else {
      toast.error("내용을 입력해주세요");
    }

    //🔥 메세지 전송 API
    setText("");
  };
  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };
  useEffect(() => {
    setText(" ");
    if (replyTarget) {
      setText(`@${replyTarget} `);
    }
  }, [replyTarget]);

  //대댓글을 눌렀다가 지웠을 경우에 replyTarget과 commentId값이 남아 있게 된다.
  useEffect(() => {
    if (text === "" && commentId !== -1 && replyTarget !== "") {
      setCommentId(-1);
      setReplyTarget("");
    }
  }, [text, commentId, replyTarget]);

  return (
    <S.InputWrapper>
      <S.TextareaStyle
        placeholder="메시지를 입력해주세요"
        value={text}
        onChange={handleTextChange}
        ref={textareaRef}
      />
      <Button display="block" type="fill" size="medium" onClickWithEvent={handleSubmit}>
        <S.IconDiv>
          <Icon.Messenger color={COLOR.White} size={FONT.L} />
        </S.IconDiv>
      </Button>
    </S.InputWrapper>
  );
}

export default CommentInput;
