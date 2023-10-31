import * as S from "./UserContent.style";
import * as Icon from "../../../../components/Icon";
import * as COLOR from "../../../../constants/color";
import { useSearchParams } from "react-router-dom";
import Routines from "../Routines/Routines";
import Inbody from "../Inbody/Inbody";
import Bookmark from "../Bookmark/Bookmark";
import Diaries from "../Diaries/Diaries";

export default function UserContent() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("section");

  return (
    <S.ContentWrapper>
      <S.ContentMenuHeader>
        <S.IconWrapper to="/my?section=routines">
          {query === "routines" ? (
            <S.IconActivate>
              <Icon.Routines size="24" color={`${COLOR.Primary}`} />
            </S.IconActivate>
          ) : (
            <S.Icon>
              <Icon.Routines size="24" color={`${COLOR.Gray2}`} />
            </S.Icon>
          )}
        </S.IconWrapper>
        <S.IconWrapper to="/my?section=diary">
          {query === "diary" ? (
            <S.IconActivate>
              <Icon.ExerciseLogs size="24" color={`${COLOR.Primary}`} />
            </S.IconActivate>
          ) : (
            <S.Icon>
              <Icon.ExerciseLogs size="24" color={`${COLOR.Gray2}`} />
            </S.Icon>
          )}
        </S.IconWrapper>
        <S.IconWrapper to="/my?section=bookmark">
          {query === "bookmark" ? (
            <S.IconActivate>
              <Icon.BookMark size="24" color={`${COLOR.Primary}`} />
            </S.IconActivate>
          ) : (
            <S.Icon>
              <Icon.BookMark size="24" color={`${COLOR.Gray2}`} />
            </S.Icon>
          )}
        </S.IconWrapper>
        <S.IconWrapper to="/my?section=inbody">
          {query === "inbody" ? (
            <S.IconActivate>
              <Icon.Inbody size="24" color={`${COLOR.Primary}`} />
            </S.IconActivate>
          ) : (
            <S.Icon>
              <Icon.Inbody size="24" color={`${COLOR.Gray2}`} />
            </S.Icon>
          )}
        </S.IconWrapper>
      </S.ContentMenuHeader>
      <S.Contents>
        {query === "routines" && <Routines />}
        {query === "diary" && <Diaries />}
        {query === "bookmark" && <Bookmark />}
        {query === "inbody" && <Inbody score={120} />}
      </S.Contents>
    </S.ContentWrapper>
  );
}
