import React, { useState } from "react";
import * as S from "./UserDetailModal.style";
import Button from "../Button/Button";
import axios from "axios";

interface Member {
  no: number;
  id: string;
  name: string;
  grade: string;
  joinDate: string;
  status: string;
  refusalReason?: string;
  approvalId: string;
}

interface CertificationAndAwards {
  certification: string;
  certificationProof: string;
  awards: string;
  awardsProof: string;
}

interface UserDetailModalProps {
  member: Member;
  certificationAndAwards: CertificationAndAwards;
  onClose: () => void;
}

function UserDetailModal({
  member,
  certificationAndAwards,
  onClose,
}: UserDetailModalProps) {
  const [selectedStatus, setSelectedStatus] = useState<string>(member.status);
  const [refusalReason, setRefusalReason] = useState<string>(member.refusalReason || "");
  const [isConfirmButtonEnabled, setConfirmButtonEnabled] = useState<boolean>(false);

  const handleStatusChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedStatus(e.target.value);
    const comparedStatus = member.status;
    if (comparedStatus !== selectedStatus) {
      setConfirmButtonEnabled(true);
    }
  };

  const handleRefusalReasonChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setRefusalReason(e.target.value);
  };

  // 승인,거부 api
  const handleConfirmClick = () => {
    if (selectedStatus === "승인 거부") {
      axios
        .post(`/api/admins/approvals/${member.approvalId}/deny`, {
          reason: refusalReason,
        })
        .then((response) => {
          if (response.status === 200) {
            member.status = "승인 거부";
            member.refusalReason = refusalReason;
          }
        })
        .catch((error) => {
          console.error("API 호출 오류:", error);
        });
    } else if (selectedStatus === "트레이너 승인") {
      axios
        .post(`/api/admins/approvals/${member.approvalId}/ok`)
        .then((response) => {
          if (response.status === 200) {
            member.status = "트레이너 승인";
          }
        })
        .catch((error) => {
          console.error("API 호출 오류:", error);
        });
    }
    // 모달 닫기
    onClose();
  };

  return (
    <>
      <S.Overlay />
      <S.Content>
        <S.Title>회원 상세 정보</S.Title>
        <S.Table>
          <S.TableBox>
            <S.Tr>
              <S.HeadTd>번호</S.HeadTd>
              <S.Td>{member.no}</S.Td>
            </S.Tr>
            <S.Tr>
              <S.HeadTd>아이디</S.HeadTd>
              <S.Td>{member.id}</S.Td>
            </S.Tr>
            <S.Tr>
              <S.HeadTd>이름</S.HeadTd>
              <S.Td>{member.name}</S.Td>
            </S.Tr>
            <S.Tr>
              <S.HeadTd>등급</S.HeadTd>
              <S.Td>{member.grade}</S.Td>
            </S.Tr>
            <S.Tr>
              <S.HeadTd>가입일</S.HeadTd>
              <S.Td>{member.joinDate}</S.Td>
            </S.Tr>
            <S.Tr>
              <S.HeadTd>상태</S.HeadTd>
              <S.Td>
                <select value={selectedStatus} onChange={handleStatusChange}>
                  <option value="승인 대기">승인 대기</option>
                  <option value="트레이너 승인">트레이너 승인</option>
                  <option value="승인 거부">승인 거부</option>
                </select>
              </S.Td>
            </S.Tr>
            {selectedStatus === "승인 거부" && (
              <S.Tr>
                <S.HeadTd>거부 사유:</S.HeadTd>
                <S.Td>
                  <S.Textarea
                    value={refusalReason}
                    onChange={handleRefusalReasonChange}
                    placeholder="거부 사유를 입력하세요"
                  />
                </S.Td>
              </S.Tr>
            )}
          </S.TableBox>
        </S.Table>

        <S.Title>자격증 및 수상 경력</S.Title>
        <S.Table>
          <S.TableBox>
            <S.Tr>
              <S.HeadTd>자격증</S.HeadTd>
              <S.Td>{certificationAndAwards.certification}</S.Td>
            </S.Tr>
            <S.Tr>
              <S.HeadTd>자격증 증빙 자료</S.HeadTd>
              <S.Td>
                <img
                  src={certificationAndAwards.certificationProof}
                  alt={certificationAndAwards.certificationProof}
                  style={{ maxWidth: "100%", maxHeight: "200px" }}
                />
              </S.Td>
            </S.Tr>
            <S.Tr>
              <S.HeadTd>수상 경력</S.HeadTd>
              <S.Td>{certificationAndAwards.awards}</S.Td>
            </S.Tr>
            <S.Tr>
              <S.HeadTd>수상 경력 증빙 자료</S.HeadTd>
              <S.Td>
                <img
                  src={certificationAndAwards.awardsProof}
                  alt={certificationAndAwards.awardsProof}
                  style={{ maxWidth: "100%", maxHeight: "200px" }}
                />
              </S.Td>
            </S.Tr>
          </S.TableBox>
        </S.Table>
        <S.BtnBox>
          <Button display="flex" type="fill" size="medium" onClick={onClose}>
            뒤로
          </Button>
          <Button
            display="flex"
            type={isConfirmButtonEnabled ? "fill" : "deactivated"}
            size="medium"
            onClick={handleConfirmClick}
          >
            확인
          </Button>
        </S.BtnBox>
      </S.Content>
    </>
  );
}

export default UserDetailModal;
