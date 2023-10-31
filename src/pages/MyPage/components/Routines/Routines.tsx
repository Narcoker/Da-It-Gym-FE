import RoutineUser from "../../../../components/RoutineUser/RoutineUser";
import * as S from "./Routines.style";

export default function Routines() {
  return (
    <S.RoutineUsers>
      <RoutineUser
        src=""
        userName="user-nick"
        info="자기소개 입니다"
        likeCount="20"
        shareCount="20"
        timeAgo="4시간 전"
        label="3분할"
      />
      <RoutineUser
        src=""
        userName="user-nick"
        info="자기소개 입니다"
        likeCount="20"
        shareCount="20"
        timeAgo="4시간 전"
        label="3분할"
      />
    </S.RoutineUsers>
  );
}
