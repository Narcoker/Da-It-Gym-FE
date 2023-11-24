import { useState, useEffect } from "react";
import Nav from "../../components/Nav/Nav";
import * as S from "./UserRecommend.style";
import FollowUser from "../../components/FollowUser/FollowUser";
import useProfileAPI from "../../api/useProfileAPI";
import FeedDiaryEmpty from "../../components/FeedEmptyDataUI/FeedDiaryEmpty";

export interface User {
  nickName: string;
  imageUrl: string;
  intro: string;
  score: number;
}

export default function UserRecommend() {
  const [users, setUsers] = useState<User[]>([]);
  const { requestKakaoFriends } = useProfileAPI();

  useEffect(() => {
    requestKakaoFriends(setUsers);
  }, []);

  return (
    <>
      <Nav type="top" />
      <S.Container>
        <S.UsersContainer>
          {users.length > 0 ? (
            users.map((user) => (
              <S.Users>
                <FollowUser
                  src={user.imageUrl}
                  userName={user.nickName}
                  info={user.intro}
                  inbodyScore={user.score}
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
