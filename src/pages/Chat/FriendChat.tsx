import { useNavigate } from "react-router";
import * as S from "./FriendChat.style";
import { useTimeCalculate } from "../../api/useTimeCalculate";

interface Props {
  name: string;
  src: string;
  message: string;
  readCount: number;
  createdAt: string;
}

function FriendChat({ name, src, message, readCount, createdAt }: Props) {
  const navigate = useNavigate();
  const timeCalculator = useTimeCalculate();

  const handleClickProfileImg = () => {
    navigate(`/profile/${name}?section=routines`);
  };

  return (
    <S.Container>
      <S.MessageWrapper>
        <S.ProfileImgWrapper onClick={handleClickProfileImg}>
          <S.ProfileImg src={src} alt={src} />
        </S.ProfileImgWrapper>
        <S.MessageInfoWrapper>
          <S.Name>{name}</S.Name>
          <S.Message>
            {message.split("\n").map((line) => (
              <p key={new Date().getMilliseconds()}>{line}</p>
            ))}
          </S.Message>
          {readCount === 1 && <S.IsRead>안읽음</S.IsRead>}
          <S.CreatedAt>{timeCalculator(createdAt)}</S.CreatedAt>
        </S.MessageInfoWrapper>
      </S.MessageWrapper>
    </S.Container>
  );
}

export default FriendChat;
