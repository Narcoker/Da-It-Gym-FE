import FollowUser from "../../../../components/FollowUser/FollowUser";
import * as S from "./FollowModal.style";
import * as Icon from "../../../../components/Icon";
import * as COLOR from "../../../../constants/color";
import { FollowType } from "../UserProfile/UserProfile";

interface Props {
  type: FollowType;
  setFollowType: React.Dispatch<React.SetStateAction<FollowType>>;
}

export default function FollowModal({ type, setFollowType }: Props) {
  const cancelHandler = () => {
    setFollowType("");
  };
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
          <FollowUser
            src=""
            userName="user-nick"
            info="description...."
            inbodyScore={120}
          />
          <FollowUser
            src=""
            userName="user-nick"
            info="description...."
            inbodyScore={120}
          />
          <FollowUser
            src=""
            userName="user-nick"
            info="description...."
            inbodyScore={120}
          />
          <FollowUser
            src=""
            userName="user-nick"
            info="description...."
            inbodyScore={120}
          />
          <FollowUser
            src=""
            userName="user-nick"
            info="description...."
            inbodyScore={120}
          />
          <FollowUser
            src=""
            userName="user-nick"
            info="description...."
            inbodyScore={120}
          />
          <FollowUser
            src=""
            userName="user-nick"
            info="description...."
            inbodyScore={120}
          />
        </S.Users>
      </S.Wrapper>
    </S.Overlay>
  );
}
