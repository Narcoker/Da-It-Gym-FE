import React from "react";
import { useAxios } from "./useAxios";
import { Member } from "../pages/Admin/component/AdminTable";
import { MemberDetail } from "../components/UserDetailModal/UserDetailModal";

export default function useAdminAPI() {
  const API_URL = import.meta.env.VITE_API_URL;
  const axios = useAxios();

  //승인, 거부
  const requestPatchApprovalsModify = (
    approvalId: number,
    refusalReason: string,
    selectedStatus: string,
    nickname: string, // 닉네임 정보 추가
  ) => {
    const payload = {
      reason: refusalReason,
      approvalStatus: selectedStatus,
      nickname: nickname, // 닉네임 정보 추가
    };
    axios
      .patch(`${API_URL}/api/admins/approvals/${approvalId}`, payload)
      .then((response) => {
        console.log(response);
        refusalReason;
      })
      .catch((error) => {
        console.log(error);
      });
  };

  //승인 요청 상세 보기
  const requestGetApprovalDetails = (
    approvalId: number,
    setRefusalReason: React.Dispatch<React.SetStateAction<string>>,
    setSelectedStatus: React.Dispatch<React.SetStateAction<string>>,
    setMemberDetail: React.Dispatch<React.SetStateAction<MemberDetail | undefined>>,
  ) => {
    axios
      .get(`${API_URL}/api/admins/approvals/${approvalId}`)
      .then((response) => {
        console.log(response);
        setMemberDetail(response.data.data);
        setSelectedStatus(response.data.data.approval.approvalStatus);
        setRefusalReason(response.data.data.approval.reason);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  //승인 요청 목록 불러오기
  const requestGetApprovals = async (
    page: number,
    size: number,
    nickname: string,
    setTotalPages: React.Dispatch<React.SetStateAction<number>>,
    setApprovalData: React.Dispatch<React.SetStateAction<Member[]>>,
    sortDirection?: string,
  ) => {
    await axios
      .get(
        `${API_URL}/api/admins/approvals?page=${page}&size=${size}&nickname=${nickname}`,
      )
      .then((response) => {
        console.log("리스폰스", response);
        setTotalPages(response.data.data.totalPage);
        const sortedData = [...response.data.data.approvals].sort((a, b) => {
          const columnA = a.approvalId; // 'approvalId' 컬럼에 접근
          const columnB = b.approvalId;

          // 정렬 방향과 값을 비교합니다.
          if (sortDirection === "asc") {
            return columnA < columnB ? -1 : 1;
          } else {
            return columnA > columnB ? -1 : 1;
          }
        });
        setApprovalData(sortedData);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return { requestPatchApprovalsModify, requestGetApprovals, requestGetApprovalDetails };
}
