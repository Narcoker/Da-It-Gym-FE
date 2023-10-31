import * as S from "../SearchUesr/SearchUser.style";
import Nav from "../../components/Nav/Nav";
import * as Icon from "../../components/Icon";
import * as COLOR from "../../constants/color";
import Searchinfo from "../../components/SearchInfo/SearchInfo";

function SearchUser() {
  return (
    <>
      <Nav type="top" />
      <S.Container>
        <S.SearchContainer>
          <S.SearchInput
            type="text"
            placeholder="유저를 검색해주세요"
            className="search-input"
          />
          <S.Icon>
            <Icon.Search size="24" color={`${COLOR.Gray2}`} />
          </S.Icon>
        </S.SearchContainer>
        <S.Users>
          <Searchinfo
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmI-Yk_hVcYEhVxOMceoNG9eo3sJlKBLYRfQ&usqp=CAU"
            userName="가나다"
            info="설명글"
            inbodyScore={120}
          />
        </S.Users>
      </S.Container>
      <Nav type="home" />
    </>
  );
}

export default SearchUser;
