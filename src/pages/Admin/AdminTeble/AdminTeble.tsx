import React, { useState } from "react";
import * as S from "./AdminTeble.style";
import * as Icon from "../../../components/Icon";
import * as COLOR from "../../../constants/color";
import Button from "../../../components/Button/Button";
import UserDetailModal from "../../../components/UserDetailModal/UserDetailModal";

interface Member {
  no: number; // 순서
  id: string; // 아이디
  name: string; // 이름
  grade: string; // 등급
  joinDate: string; // 가입일자
  status: string; // 상태
  refusalReason?: string; // 거부 사유
  details: string; // 회원상세정보
  approvalId: string;
}

interface CertificationAndAwards {
  certification: string;
  certificationProof: string;
  awards: string;
  awardsProof: string;
}

interface AdminTableProps {
  members: Member[];
}

const AdminTable: React.FC<AdminTableProps> = ({ members }) => {
  const [selectedMember, setSelectedMember] = useState<Member | null>(null);

  const certificationAndAwards: CertificationAndAwards = {
    certification: "자격증 정보",
    certificationProof: "자격증 증빙 자료",
    awards: "수상 경력 정보",
    awardsProof: "수상 경력 증빙 자료",
  };

  // "보기" 클릭 시 상세 모달 열기
  const handleViewClick = (member: Member) => {
    setSelectedMember(member);
  };

  // 모달 닫기
  const handleCloseModal = () => {
    setSelectedMember(null);
  };

  return (
    <>
      <S.AdminContainer>
        <S.SearchContainer>
          <S.SearchInput type="text" className="search-input" />
          <S.Icon>
            <Icon.Search size="22" color={COLOR.Sub2} />
          </S.Icon>
        </S.SearchContainer>
        <S.Table>
          <thead>
            <tr>
              <S.Th>No</S.Th>
              <S.Th>이메일</S.Th>
              <S.Th>닉네임</S.Th>
              <S.Th>등급</S.Th>
              <S.Th>가입일</S.Th>
              <S.Th>상태</S.Th>
              <S.Th>보기</S.Th>
            </tr>
          </thead>
          <tbody>
            {members.map((member) => (
              <tr key={member.no}>
                <S.Td>{member.no}</S.Td>
                <S.Td>{member.id}</S.Td>
                <S.Td>{member.name}</S.Td>
                <S.Td>{member.grade}</S.Td>
                <S.Td>{member.joinDate}</S.Td>
                <S.Td>{member.status}</S.Td>
                <S.Td>
                  <Button
                    onClick={() => handleViewClick(member)}
                    display="block"
                    type="border"
                    size="medium"
                  >
                    보기
                  </Button>
                </S.Td>
              </tr>
            ))}
          </tbody>
        </S.Table>
        {selectedMember && (
          <UserDetailModal
            member={selectedMember}
            certificationAndAwards={certificationAndAwards}
            onClose={handleCloseModal}
            // onApprove={handleApproveClick}
          />
        )}
      </S.AdminContainer>
    </>
  );
};

export default AdminTable;
