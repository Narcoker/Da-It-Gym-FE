import * as S from "./FriendChat.style";

interface Props {
  name: string;
  src: string;
  message: string;
}

function FriendChat({ name, src, message }: Props) {
  return (
    <S.Container>
      <S.ProfileImgWrapper>
        <S.ProfileImg src={src} alt={src} />
        <S.MessageInfoWrapper>
          <S.Name>{name}</S.Name>
          <S.Message>
            {message.split("\n").map((line) => (
              <p key={new Date().getMilliseconds()}>{line}</p>
            ))}
          </S.Message>
        </S.MessageInfoWrapper>
      </S.ProfileImgWrapper>
    </S.Container>
  );
}

export default FriendChat;
