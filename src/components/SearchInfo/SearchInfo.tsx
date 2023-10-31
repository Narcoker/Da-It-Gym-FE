import * as S from "./SearchInfo.style";

interface Props {
  src: string;
  userName: string;
  info: string;
  inbodyScore: number;
}

function Searchinfo({ src, userName, info, inbodyScore }: Props) {
  const infomation = info.slice(0, Math.min(30, info.length));
  return (
    <S.SearchinfoWrapper>
      <S.SearchinfoUserImg src={src} alt={src} />
      <S.UserBox>
        <S.SearchInfoUserName>
          <S.SearchInfoName> {userName}</S.SearchInfoName>
          <S.SearchInfo>{infomation}</S.SearchInfo>
        </S.SearchInfoUserName>
        <S.InbodyBox>
          <S.InbodyTitle>인바디</S.InbodyTitle>
          <S.InbodyScore>{inbodyScore}</S.InbodyScore>
        </S.InbodyBox>
      </S.UserBox>
    </S.SearchinfoWrapper>
  );
}

export default Searchinfo;