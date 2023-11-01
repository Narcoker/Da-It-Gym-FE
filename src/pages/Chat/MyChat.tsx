import * as S from "./MyChat.style";

interface Props {
  name: string;
  src: string;
  message: string;
}

function MyChat({ name, src, message }: Props) {
  return (
    <S.Container>
      <S.ProfileImgWrapper>
        <S.ProfileImg src={src} alt={src} />
        <S.MessageInfoWrapper>
          <S.Name>{name}</S.Name>
          <S.Message>
            {message.split("\n").map((line, index) => (
              <p key={index}>{line}</p>
            ))}
          </S.Message>
        </S.MessageInfoWrapper>
      </S.ProfileImgWrapper>
    </S.Container>
  );
}

export default MyChat;
