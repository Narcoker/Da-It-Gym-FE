import Nav from "../../components/Nav/Nav";
import * as Icon from "../../components/Icon";
import * as COLOR from "../../constants/color";
import * as S from "./ChatSearchUser.style";
import FollowUser from "../../components/FollowUser/FollowUser";
import { useEffect, useState } from "react";

interface User {
  userImg: string;
  userName: string;
  info: string;
  inbodyScore: number;
}
const tempUsers = [
  {
    userImg:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmI-Yk_hVcYEhVxOMceoNG9eo3sJlKBLYRfQ&usqp=CAU",
    userName: "가나다",
    info: "설명글",
    inbodyScore: 120,
  },
  {
    userImg:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmI-Yk_hVcYEhVxOMceoNG9eo3sJlKBLYRfQ&usqp=CAU",
    userName: "가나다",
    info: "설명글",
    inbodyScore: 120,
  },
  {
    userImg:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmI-Yk_hVcYEhVxOMceoNG9eo3sJlKBLYRfQ&usqp=CAU",
    userName: "가나다",
    info: "설명글",
    inbodyScore: 120,
  },
  {
    userImg:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmI-Yk_hVcYEhVxOMceoNG9eo3sJlKBLYRfQ&usqp=CAU",
    userName: "가나다",
    info: "설명글",
    inbodyScore: 120,
  },
  {
    userImg:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmI-Yk_hVcYEhVxOMceoNG9eo3sJlKBLYRfQ&usqp=CAU",
    userName: "가나다",
    info: "설명글",
    inbodyScore: 120,
  },
  {
    userImg:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmI-Yk_hVcYEhVxOMceoNG9eo3sJlKBLYRfQ&usqp=CAU",
    userName: "가나다",
    info: "설명글",
    inbodyScore: 120,
  },
  {
    userImg:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmI-Yk_hVcYEhVxOMceoNG9eo3sJlKBLYRfQ&usqp=CAU",
    userName: "가나다",
    info: "설명글",
    inbodyScore: 120,
  },
  {
    userImg:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmI-Yk_hVcYEhVxOMceoNG9eo3sJlKBLYRfQ&usqp=CAU",
    userName: "가나다",
    info: "설명글",
    inbodyScore: 120,
  },
];

function ChatSearchUser() {
  const [users, setUsers] = useState<User[]>([]);
  useEffect(() => {
    setUsers(tempUsers);
  }, []);

  return (
    <>
      <Nav type="top" />
      <S.Container>
        <S.Title>유저 검색</S.Title>
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

        <S.UsersContainer>
          {users.map((user) => (
            <S.Users>
              <FollowUser
                src={user.userImg}
                userName={user.userName}
                info={user.info}
                inbodyScore={user.inbodyScore}
              />
            </S.Users>
          ))}
        </S.UsersContainer>
      </S.Container>

      <Nav type="chat" />
    </>
  );
}

export default ChatSearchUser;
