import React, { useEffect, useState } from "react";
import * as S from "./UserDetailModal.style";
import Button from "../Button/Button";
import useAdminAPI from "../../api/useAdminAPI";
import { Member } from "../../pages/Admin/component/AdminTable";

interface UserDetailModalProps {
  approvalId: number;
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  onStatusChange: (approvalId: number, newStatus: string) => void;
}

export interface MemberDetail {
  approval: Member;
  reason: string;
  certifications: Certifications[];
  certificationImgs: string[];
  awards: Awards[];
  awardImgs: string[];
}

interface Certifications {
  name: string; //자격증 이름
  acquisitionAt: string; //취득날짜
}

interface Awards {
  name: string; //대회 이름
  awardAt: number; //참가 일자
  org: string; //주최
}

function UserDetailModal({
  setModalOpen,
  approvalId,
  onStatusChange,
}: UserDetailModalProps) {
  const [memberDetail, setMemberDetail] = useState<MemberDetail>();
  const [selectedStatus, setSelectedStatus] = useState<string>("");
  const [refusalReason, setRefusalReason] = useState<string>("");
  const [isConfirmButtonEnabled, setConfirmButtonEnabled] = useState<boolean>(false);
  const handleStatusChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedStatus(e.target.value);
    const comparedStatus = memberDetail?.approval.approvalStatus || "";
    if (comparedStatus !== e.target.value) {
      setConfirmButtonEnabled(true);
    } else {
      setConfirmButtonEnabled(false);
    }
  };

  const handleRefusalReasonChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setRefusalReason(e.target.value);
  };

  const { requestPatchApprovalsModify, requestGetApprovalDetails } = useAdminAPI();

  const handleConfirmClick = async () => {
    if (!memberDetail) return;
    try {
      await requestPatchApprovalsModify(
        Number(memberDetail.approval.approvalId),
        refusalReason,
        selectedStatus,
        memberDetail.approval.nickname, // 닉네임 정보를 API로 전달
      );
      memberDetail.approval.approvalStatus = selectedStatus;
      setConfirmButtonEnabled(false);
      onStatusChange(memberDetail.approval.approvalId, selectedStatus);
    } catch (error) {
      console.error("승인 상태 업데이트 오류:", error);
    }
    setModalOpen(false);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  console.log(memberDetail);
  console.log(refusalReason);

  useEffect(() => {
    requestGetApprovalDetails(
      approvalId,
      setRefusalReason,
      setSelectedStatus,
      setMemberDetail,
    );
  }, []);

  return (
    <>
      <S.Overlay />
      <S.Content>
        <S.Title>회원 상세 정보</S.Title>
        <S.Table>
          <S.TableBox>
            <S.Tr>
              <S.HeadTd>NO</S.HeadTd>
              <S.TableCell2>{memberDetail?.approval.approvalId}</S.TableCell2>
            </S.Tr>
            <S.Tr>
              <S.TableCell1>닉네임</S.TableCell1>
              <S.TableCell2>
                {memberDetail?.approval.nickname &&
                memberDetail.approval.nickname.length > 8
                  ? `${memberDetail.approval.nickname.substring(0, 8)}...`
                  : memberDetail?.approval.nickname}
              </S.TableCell2>
            </S.Tr>
            <S.Tr>
              <S.HeadTd>이메일</S.HeadTd>
              <S.TableCell2>{memberDetail?.approval.email}</S.TableCell2>
            </S.Tr>
            <S.Tr>
              <S.HeadTd>등급</S.HeadTd>
              <S.TableCell2>{memberDetail?.approval.role}</S.TableCell2>
            </S.Tr>
            <S.Tr>
              <S.HeadTd>가입일</S.HeadTd>
              <S.TableCell2>{memberDetail?.approval.joinAt}</S.TableCell2>
            </S.Tr>
            <S.Tr>
              <S.HeadTd>승인상태</S.HeadTd>
              <S.TableCell2>
                <select value={selectedStatus} onChange={handleStatusChange}>
                  <option value="승인 대기">승인 대기</option>
                  <option value="트레이너 승인">트레이너 승인</option>
                  <option value="승인 거부">승인 거부</option>
                </select>
              </S.TableCell2>
            </S.Tr>
            {selectedStatus === "승인 거부" && (
              <S.Tr>
                <S.HeadTd>거부 사유:</S.HeadTd>
                <S.TableCell2>
                  <S.Textarea
                    value={refusalReason}
                    onChange={handleRefusalReasonChange}
                    placeholder="거부 사유를 입력하세요"
                  />
                </S.TableCell2>
              </S.Tr>
            )}
          </S.TableBox>
        </S.Table>

        <S.Title>자격증 및 수상 경력</S.Title>
        <S.Table>
          <S.TableBox>
            <S.Tr>
              <S.HeadTd>자격증</S.HeadTd>
              <S.BodyTd>
                {memberDetail?.certifications.map((data, index) => (
                  <>
                    <S.TableRow key={`name-row-${index}`}>
                      <S.TableCell1>이름</S.TableCell1>
                      <S.TableCell2>{data.name}</S.TableCell2>
                    </S.TableRow>
                    <S.TableRow key={`date-row-${index}`}>
                      <S.TableCell1>취득일자</S.TableCell1>
                      <S.TableCell2>{data.acquisitionAt}</S.TableCell2>
                    </S.TableRow>
                  </>
                ))}
              </S.BodyTd>
            </S.Tr>
            <S.Tr>
              <S.HeadTd>자격증 증빙 자료</S.HeadTd>
              <S.BodyTd>
                <S.Td>
                  {memberDetail?.certificationImgs?.map((img) => (
                    <img src={img} style={{ width: "300px", height: "200px" }} />
                  ))}
                </S.Td>
              </S.BodyTd>
            </S.Tr>

            <S.Tr>
              <S.HeadTd>수상 경력</S.HeadTd>
              <S.BodyTd>
                {memberDetail?.awards.map((data, index) => (
                  <>
                    <S.TableRow key={`name-row-${index}`}>
                      <S.TableCell1>대회 이름</S.TableCell1>
                      <S.TableCell2>{data.name}</S.TableCell2>
                    </S.TableRow>
                    <S.TableRow key={`date-row-${index}`}>
                      <S.TableCell1>주최 일자</S.TableCell1>
                      <S.TableCell2>{data.awardAt}</S.TableCell2>
                    </S.TableRow>
                    <S.TableRow key={`date-row-${index}`}>
                      <S.TableCell1>주최</S.TableCell1>
                      <S.TableCell2>{data.org}</S.TableCell2>
                    </S.TableRow>
                  </>
                ))}
              </S.BodyTd>
            </S.Tr>
            <S.Tr>
              <S.HeadTd>수상 경력 증빙 자료</S.HeadTd>
              <S.BodyTd>
                <S.Td>
                  {memberDetail?.awardImgs?.map((img) => (
                    <img src={img} style={{ width: "300px", height: "200px" }} />
                  ))}
                </S.Td>
              </S.BodyTd>
            </S.Tr>
          </S.TableBox>
        </S.Table>
        <S.BtnBox>
          <S.ButtonContainer>
            <Button display="flex" type="fill" size="medium" onClick={handleCloseModal}>
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
          </S.ButtonContainer>
        </S.BtnBox>
      </S.Content>
    </>
  );
}

export default UserDetailModal;
