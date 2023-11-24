import * as S from "./Admin.style";
import AdminTable from "../Admin/component/AdminTable";

const Admin: React.FC = () => {
  return (
    <S.AdminContainer>
      <S.Title>트레이너 요청 회원 조회</S.Title>
      <AdminTable />
    </S.AdminContainer>
  );
};

export default Admin;
