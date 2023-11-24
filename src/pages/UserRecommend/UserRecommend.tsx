import { useState, useEffect } from "react";
import Nav from "../../components/Nav/Nav";
import * as S from "./UserRecommend.style";
import * as Icon from "../../components/Icon";
import * as COLOR from "../../constants/color";
import FollowUser from "../../components/FollowUser/FollowUser";
import useProfileAPI from "../../api/useProfileAPI";
import FeedDiaryEmpty from "../../components/FeedEmptyDataUI/FeedDiaryEmpty";

export interface Users {
  userImg: string;
  userName: string;
  info: string;
  inbodyScore: number;
}
// const tempUsers = [
//   {
//     userImg:
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmI-Yk_hVcYEhVxOMceoNG9eo3sJlKBLYRfQ&usqp=CAU",
//     userName: "가나다",
//     info: "설명글",
//     inbodyScore: 120,
//   },
//   {
//     userImg:
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmI-Yk_hVcYEhVxOMceoNG9eo3sJlKBLYRfQ&usqp=CAU",
//     userName: "가나다",
//     info: "설명글",
//     inbodyScore: 120,
//   },
//   {
//     userImg:
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmI-Yk_hVcYEhVxOMceoNG9eo3sJlKBLYRfQ&usqp=CAU",
//     userName: "가나다",
//     info: "설명글",
//     inbodyScore: 120,
//   },
//   {
//     userImg:
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmI-Yk_hVcYEhVxOMceoNG9eo3sJlKBLYRfQ&usqp=CAU",
//     userName: "가나다",
//     info: "설명글",
//     inbodyScore: 120,
//   },
//   {
//     userImg:
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmI-Yk_hVcYEhVxOMceoNG9eo3sJlKBLYRfQ&usqp=CAU",
//     userName: "가나다",
//     info: "설명글",
//     inbodyScore: 120,
//   },
//   {
//     userImg:
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmI-Yk_hVcYEhVxOMceoNG9eo3sJlKBLYRfQ&usqp=CAU",
//     userName: "가나다",
//     info: "설명글",
//     inbodyScore: 120,
//   },
//   {
//     userImg:
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmI-Yk_hVcYEhVxOMceoNG9eo3sJlKBLYRfQ&usqp=CAU",
//     userName: "가나다",
//     info: "설명글",
//     inbodyScore: 120,
//   },
//   {
//     userImg:
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmI-Yk_hVcYEhVxOMceoNG9eo3sJlKBLYRfQ&usqp=CAU",
//     userName: "가나다",
//     info: "설명글",
//     inbodyScore: 120,
//   },
// ];

export default function UserRecommend() {
  const [users, setUsers] = useState<Users[]>([]);
  const { requestKakaoFriends } = useProfileAPI();

  useEffect(() => {
    requestKakaoFriends(setUsers);
  }, []);

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

        <S.UsersContainer>
          {users.length > 0 ? (
            users.map((user) => (
              <S.Users>
                <FollowUser
                  src={user.userImg}
                  userName={user.userName}
                  info={user.info}
                  inbodyScore={user.inbodyScore}
                />
              </S.Users>
            ))
          ) : (
            <FeedDiaryEmpty>추천 친구가 없습니다</FeedDiaryEmpty>
          )}
        </S.UsersContainer>
      </S.Container>

      <Nav type="home" />
    </>
  );
}
