import * as S from "./FeedDetailHeader.style";
import * as Icon from "../../components/Icon";
import * as COLOR from "../../constants/color";

interface FeedDetailHeaderProps {
  url: string;
  nickname: string;
  uploadTime: string;
  onClickBookMark: () => void;
  onClickHeart: () => void;
  onClickTrash: () => void;
}
function FeedDetailHeader({
  url,
  nickname,
  uploadTime,
  onClickBookMark,
  onClickHeart,
  onClickTrash,
}: FeedDetailHeaderProps) {
  return (
    <S.FeedDetailHeaderWrapper>
      <S.LeftBox>
        <S.UserImg src={url} alt="userImg" />
        <S.UserNickName>{nickname}</S.UserNickName>
        <S.UploadTime>{uploadTime}</S.UploadTime>
      </S.LeftBox>
      <S.IconBox>
        <S.IconBookMark
          onClick={() => {
            onClickBookMark();
          }}
        >
          <Icon.BookMark color={COLOR.Gray2} />
        </S.IconBookMark>
        <S.IconHeart
          onClick={() => {
            onClickHeart();
          }}
        >
          <Icon.Heart size="18" color={COLOR.Gray2} />
        </S.IconHeart>
        {/* Trash 버튼은 작성한 사람이 본인일때만 가능함 */}
        <S.IconTrash
          onClick={() => {
            onClickTrash();
          }}
        >
          <Icon.Trash color={COLOR.Gray2} />
        </S.IconTrash>
      </S.IconBox>
    </S.FeedDetailHeaderWrapper>
  );
}

export default FeedDetailHeader;
