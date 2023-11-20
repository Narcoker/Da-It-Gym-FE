import { useNavigate } from "react-router";
import * as S from "./MyChat.style";
import { useTimeCalculate } from "../../api/useTimeCalculate";

interface Props {
  name: string;
  imageUrl: string;
  message: string;
  readCount: number;
  createdAt: string;
}

function MyChat({ name, imageUrl, message, readCount, createdAt }: Props) {
  const navigate = useNavigate();
  const timeCalculator = useTimeCalculate();

  const handleClickProfileImg = () => {
    navigate(`/profile/${name}?section=routines`);
  };
  return (
    <S.Container>
      <S.MessageWrapper>
        <S.ProfileImgWrapper onClick={handleClickProfileImg}>
          <S.ProfileImg src={imageUrl} alt={imageUrl} />
        </S.ProfileImgWrapper>
        <S.MessageInfoWrapper>
          <S.Name>{name}</S.Name>
          <S.Message>
            {message.split("\n").map((line, index) => (
              <S.Line key={index}>{line}</S.Line>
            ))}
          </S.Message>
          {readCount === 1 && <S.IsRead>안읽음</S.IsRead>}
          <S.CreatedAt>{timeCalculator(createdAt)}</S.CreatedAt>
        </S.MessageInfoWrapper>
      
      </S.MessageWrapper>
    </S.Container>
  );
}

export default MyChat;
