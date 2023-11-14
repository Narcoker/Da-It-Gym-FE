import FollowUser from "../../../../components/FollowUser/FollowUser";
import * as S from "./FollowModal.style";
import * as Icon from "../../../../components/Icon";
import * as COLOR from "../../../../constants/color";
import { FollowType } from "../UserProfile/UserProfile";
import { useEffect, useState } from "react";
import useProfileAPI from "../../../../api/useProfileAPI";
import { useParams } from "react-router";

interface Props {
  type: FollowType;
  setFollowType: React.Dispatch<React.SetStateAction<FollowType>>;
}

export interface FollowUser {
  imageUrl: string;
  nickname: string;
  intro: string;
  score: number;
}

export default function FollowModal({ type, setFollowType }: Props) {
  const cancelHandler = () => {
    setFollowType("");
  };
  const { requestFollowList, requestFollowerList } = useProfileAPI();
  const [users, setUsers] = useState<FollowUser[]>([]);

  const params = useParams();

  useEffect(() => {
    if (type === "follow") {
      requestFollowList(params.nickname as string, setUsers);
    } else {
      requestFollowerList(params.nickname as string, setUsers);
    }
  }, []);
  return (
    <S.Overlay>
      <S.Wrapper>
        <S.Header>
          {type === "follow" ? "팔로우" : "팔로워"}
          <S.Icon onClick={cancelHandler}>
            <Icon.Exit size="20" color={`${COLOR.Gray2}`} />
          </S.Icon>
        </S.Header>
        <S.Users>
          {users.length > 0 ? (
            users.map(({ imageUrl, nickname, intro, score }) => (
              <FollowUser
                src={imageUrl}
                userName={nickname}
                info={intro}
                inbodyScore={score}
              />
            ))
          ) : (
            <S.Span>유저가 없습니다</S.Span>
          )}
        </S.Users>
      </S.Wrapper>
    </S.Overlay>
  );
}
