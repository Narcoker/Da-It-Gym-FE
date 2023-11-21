import * as Icon from "../../components/Icon";
import * as COLOR from "../../constants/color";
import * as S from "./SearchUser.style";
import FollowUser from "../../components/FollowUser/FollowUser";
import { ChangeEvent, useEffect, useRef, useState } from "react";
import { User, useUserAPI } from "../../api/useUserAPI";
import useDebounce from "../../hooks/useDebounce";

function SearchUser() {
  const [users, setUsers] = useState<User[]>([]);
  const [inputNickname, setInputNickname] = useState("");
  const debounceInputNickname = useDebounce(inputNickname, 200);
  const { requestSearchUser } = useUserAPI();
  const targetRef = useRef<HTMLDivElement>(null);
  const page = useRef(0);
  const hasNext = useRef(true);

  const handleChangeSearchInput = (e: ChangeEvent<HTMLInputElement>) => {
    setInputNickname(e.target.value);
  };

  useEffect(() => {
    const requestSearchUserWrapper = async () => {
      if (debounceInputNickname !== "") {
        page.current = 0;
        const response = await requestSearchUser(debounceInputNickname, page.current);
        response.userResponses && setUsers(response.userResponses);
        page.current = page.current + 1;
        hasNext.current = response.hasNext;
      }
    };
    requestSearchUserWrapper();
  }, [debounceInputNickname]);

  useEffect(() => {
    let observer: IntersectionObserver;
    if (targetRef.current) {
      const onIntersect = async (
        [entry]: IntersectionObserverEntry[],
        observer: IntersectionObserver,
      ) => {
        if (hasNext.current && entry.isIntersecting) {
          observer.unobserve(entry.target);
          const response = await requestSearchUser(debounceInputNickname, page.current);
          response.userResponses &&
            setUsers((prev) => [...prev, ...response.userResponses]);
          page.current = page.current + 1;
          hasNext.current = response.hasNext;
          observer.observe(entry.target);
        }
      };
      observer = new IntersectionObserver(onIntersect, { threshold: 1 }); // 추가된 부분
      observer.observe(targetRef.current);
    }
    return () => observer && observer.disconnect();
  }, []);

  return (
    <S.Container>
      <S.Title>유저 검색</S.Title>
      <S.SearchContainer>
        <S.SearchInput
          type="text"
          placeholder="유저를 검색해주세요"
          className="search-input"
          value={inputNickname}
          onChange={handleChangeSearchInput}
        />
        <S.Icon>
          <Icon.Search size="24" color={`${COLOR.Gray2}`} />
        </S.Icon>
      </S.SearchContainer>

      <S.UsersContainer>
        {users.map((user) => (
          <S.Users key={user.nickname}>
            <FollowUser
              src={user.userProfileImageUrl}
              userName={user.nickname}
              info={user.introduction}
              inbodyScore={user.inbodyScore}
            />
          </S.Users>
        ))}
        <div ref={targetRef} />
      </S.UsersContainer>
    </S.Container>
  );
}

export default SearchUser;
