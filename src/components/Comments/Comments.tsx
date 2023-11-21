import * as S from "./Comments.style";
import * as Icon from "../../components/Icon";
import * as COLOR from "../../constants/color";
import CommentInput from "./components/CommentInput";
import CommentElement from "./components/CommentElement";
import { useEffect, useRef, useState } from "react";
import useFeedDiaryDetailAPI from "../../api/useFeedDiaryDetailAPI";
import { useLocation, useParams } from "react-router";

export interface CommentsDataProps {
  authority: boolean;
  commentCnt: number;
  comments?: PropsComments[];
  childComments?: PropsComments[];
  totalPage?: number;
  currentPage?: number;
}
export interface PropsComments {
  commentId: number;
  nickname: string;
  imageUrl: string;
  comment: string;
  childrenCnt: number;
}

function Comments() {
  const [commentsData, setCommentsData] = useState<CommentsDataProps>({
    authority: true,
    commentCnt: 0,
    totalPage: 0,
    currentPage: 0,
    comments: [],
  });

  // 🔥 Comment(댓글) 데이터 받아오기
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const [page, setPage] = useState<number>(0);
  const [flag, setFlag] = useState<boolean>(false);
  const [commentCount, setCommentCount] = useState<number>(0);
  const location = useLocation();
  const id = useParams();
  const { requestFeedComments } = useFeedDiaryDetailAPI();
  const handleRequestFeedCommentsData = async (page: number) => {
    if (location.pathname.startsWith("/feed/routine")) {
      await requestFeedComments("routines", Number(id.routineId), page, setCommentsData);
    } else if (location.pathname.startsWith("/feed/diary")) {
      await requestFeedComments("feed-journals", Number(id.id), page, setCommentsData);
    }
  };
  const handleNextPageCommentsData = () => {
    console.log(page, commentsData.totalPage);
    if (commentsData.totalPage && page + 1 < commentsData.totalPage) {
      setPage((page) => page + 1);
    }
    console.log("page", page);
  };

  useEffect(() => {
    handleRequestFeedCommentsData(page);
  }, [page, flag]);
  console.log("commentsData", commentsData);
  useEffect(() => {
    setCommentCount(commentsData.commentCnt);
  }, [commentsData.commentCnt]);

  return (
    <>
      <S.CommentTotalCount>댓글 {commentCount}개</S.CommentTotalCount>
      <S.CommentsWrapper>
        {commentsData.comments &&
          commentsData.comments.map((data) => (
            <CommentElement
              data={data}
              textareaRef={textareaRef}
              totalAuthority={commentsData.authority}
              commentsData={commentsData}
              setCommentsData={setCommentsData}
              setCommentCount={setCommentCount}
              flag={flag}
            />
          ))}
        <S.PlusIcon onClick={handleNextPageCommentsData}>
          <Icon.AddCircle color={COLOR.Gray4} size="32" />
        </S.PlusIcon>
      </S.CommentsWrapper>
      <CommentInput
        textareaRef={textareaRef}
        commentsData={commentsData}
        setCommentsData={setCommentsData}
        setFlag={setFlag}
        setCommentCount={setCommentCount}
      />
    </>
  );
}

export default Comments;

// const commentData = {
//   authority: false,
//   commentCnt: 3,
//   comments: [
//     {
//       commentId: 1,
//       nickname: "조재균",
//       imageUrl: "https://thumb.photo-ac.com/9a/9a20d2e68bb6667a2ab1a9b8a9216f13_t.jpeg",
//       comment: "운동 잘하시네요",
//       childrenCnt: 3,
//     },
//     {
//       commentId: 2,
//       nickname: "헬린이",
//       imageUrl:
//         "https://i.pinimg.com/1200x/d9/75/af/d975afd69d42e095c13e418f8916b1b0.jpg",
//       comment: "@조재균",
//       childrenCnt: 0,
//     },
//     {
//       commentId: 3,
//       nickname: "조재균",
//       imageUrl: "https://thumb.photo-ac.com/9a/9a20d2e68bb6667a2ab1a9b8a9216f13_t.jpeg",
//       comment:
//         "@조재균 운동 잘하시네요, 운동법 관련해서 DM 보내고 싶은데 보내도 괜찮을까요?운동 잘하시네요, 운동법 관련해서 DM 보내고 싶은데 보내도 괜찮을까요?운동 잘하시네요, 운동법 관련해서 DM 보내고 싶은데 보내도 괜찮을까요?",
//       childrenCnt: 3,
//     },
//     {
//       commentId: 4,
//       nickname: "헬린이",
//       imageUrl:
//         "https://i.pinimg.com/1200x/d9/75/af/d975afd69d42e095c13e418f8916b1b0.jpg",
//       comment: "이 포스트 너무 좋아요!",
//       childrenCnt: 2,
//     },
//   ],
// };
