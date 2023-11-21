import { useNavigate } from "react-router";
import { useTimeCalculate } from "../../api/useTimeCalculate";
import * as S from "./FeedDetailHeader.style";

interface FeedDetailHeaderProps {
  url: string;
  nickname: string;
  uploadTime: string;
}
function FeedDetailHeader({ url, nickname, uploadTime }: FeedDetailHeaderProps) {
  const timeCalculator = useTimeCalculate();
  const navigate = useNavigate();

  const handleNav = (destination: string) => {
    navigate(destination);
  };
  return (
    <S.FeedDetailHeaderWrapper>
      <S.LeftBox>
        <S.UserBox onClick={() => handleNav(`/profile/${nickname}?section=routines`)}>
          <S.UserImg src={url} alt="userImg" />
          <S.UserNickName>{nickname}</S.UserNickName>
        </S.UserBox>
        <S.UploadTime>{timeCalculator(uploadTime)}</S.UploadTime>
      </S.LeftBox>
    </S.FeedDetailHeaderWrapper>
  );
}

export default FeedDetailHeader;
