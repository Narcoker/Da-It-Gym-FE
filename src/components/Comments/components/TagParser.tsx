import styled from "styled-components";
import * as COLOR from "../../../constants/color";
import { useNavigate } from "react-router";

interface TagParserProps {
  parsingText: string;
}

export default function TagParser({ parsingText }: TagParserProps) {
  //정규식
  const tag = /(@\S+)\s+([^@]+)/g;
  //filter(Boolean)은 falsy (예: false, 0, "", null, undefined, NaN) 값을 제거함
  const texts = parsingText?.split(tag).filter(Boolean);
  const navigate = useNavigate();
  const handeNavigate = (text: string) => {
    const destination = text.substring(1);
    navigate(`/profile/${destination}`);
  };

  return (
    <>
      {texts &&
        texts.map((text: string) =>
          text.startsWith("@") ? (
            <TagLinkDiv onClick={() => handeNavigate(text)}>{text} </TagLinkDiv>
          ) : (
            <Text>{text}</Text>
          ),
        )}
    </>
  );
}
const TagLinkDiv = styled.span`
  color: ${COLOR.Primary};
  cursor: pointer;
`;
const Text = styled.span``;
