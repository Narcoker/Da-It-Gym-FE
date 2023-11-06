import Nav from "../../components/Nav/Nav";
import * as S from "./Admin.style";
import AdminTeble from "./AdminTeble/AdminTeble";

const membersData = [
  {
    no: 1,
    id: "user1",
    name: "쿼카",
    grade: "관리자",
    joinDate: "2023-01-01",
    status: "가입",
    details: "보기",
  },
  {
    no: 2,
    id: "user2",
    name: "득근득근",
    grade: "트레이너",
    joinDate: "2023-01-01",
    status: "승인 대기 중",
    details: "보기",
  },
];

const MemberPage: React.FC = () => {
  return (
    <>
      <Nav type="top" />
      <S.AdminContainer>
        <S.Title>회원 조회</S.Title>
        <AdminTeble members={membersData} />
      </S.AdminContainer>
      <Nav type="home" />
    </>
  );
};

export default MemberPage;
