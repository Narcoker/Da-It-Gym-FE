import { useState, useEffect } from "react";
import * as S from "./AdminTable.style";
import * as Icon from "../../../components/Icon";
import * as COLOR from "../../../constants/color";
import Button from "../../../components/Button/Button";
import UserDetailModal from "../../../components/UserDetailModal/UserDetailModal";
import useAdminAPI from "../../../api/useAdminAPI";
import Pagination from "./AdminPagination";

export interface Member {
  approvalId: number; //승인 id
  approvalStatus: string; // 승인상태
  email: string; // 이메일
  joinAt: string; // 가입일자
  nickname: string; // 닉네임
  role: string; // 트레이너, 일반, 관리자
  withdraw: boolean; //탈퇴여부
}

function AdminTable() {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [searchText, setSearchText] = useState("");
  const [currentPage, setCurrentPage] = useState<number>(1); // 현재 페이지 번호
  const itemsPerPage = 10; // 페이지당 아이템 수
  const [totalPages, setTotalPages] = useState<number>(0);
  const [approvalData, setApprovalData] = useState<Member[]>([]);
  const [approvalId, setApprovalId] = useState<number>(-1);
  const [searchResultEmpty, setSearchResultEmpty] = useState<boolean>(false);
  const [sortColumn, setSortColumn] = useState<string>("approvalId");
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc");

  // const sortedData = [...approvalData].sort((a, b) => {
  //   const columnA = a.approvalId; // 'approvalId' 컬럼에 접근
  //   const columnB = b.approvalId;

  //   // 정렬 방향과 값을 비교합니다.
  //   if (sortDirection === "asc") {
  //     return columnA < columnB ? -1 : 1;
  //   } else {
  //     return columnA > columnB ? -1 : 1;
  //   }
  // });

  const handleSortClick = (column: string) => {
    // 동일한 컬럼이 다시 클릭되면 정렬 방향을 토글합니다.
    if (column === sortColumn) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      // 클릭한 컬럼을 정렬 컬럼으로 설정하고 기본적으로 오름차순으로 설정합니다.
      setSortColumn(column);
      setSortDirection("asc");
    }
  };

  const handleViewClick = (id: number) => {
    setApprovalId(id);
    setModalOpen(true);
  };

  const { requestGetApprovals } = useAdminAPI();

  const handleSearchClick = () => {
    requestGetApprovals(currentPage, itemsPerPage, searchText, setTotalPages, (data) => {
      setApprovalData(data);
      setSearchResultEmpty(data.length === 0); // 검색 결과가 없을 때 true로 설정
    });
  };

  useEffect(() => {
    if (approvalId) {
      console.log(searchText);
    }
  }, [searchText, approvalId, itemsPerPage]);

  useEffect(() => {
    requestGetApprovals(
      currentPage,
      itemsPerPage,
      searchText,
      setTotalPages,
      (data) => {
        setApprovalData(data);
        setSearchResultEmpty(data.length === 0); // 검색 결과가 없을 때 true로 설정
      },
      sortDirection,
    );
  }, [searchText, currentPage, sortDirection]);

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
    requestGetApprovals(newPage, itemsPerPage, searchText, setTotalPages, (data) => {
      setApprovalData(data);
      setSearchResultEmpty(data.length === 0); // 검색 결과가 없을 때 true로 설정
    });
  };

  const handleStatusUpdate = (approvalId: number, newStatus: string) => {
    // 추가된 함수
    setApprovalData((prevData) =>
      prevData.map((member) =>
        member.approvalId === approvalId
          ? { ...member, approvalStatus: newStatus }
          : member,
      ),
    );
  };

  // const renderNoColumn = (currentPage: number, itemsPerPage: number) => {
  //   return (currentPage - 1) * itemsPerPage + 1;
  // };

  return (
    <>
      <S.AdminContainer>
        <S.SearchContainer>
          <S.SearchInput
            type="text"
            className="search-input"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            placeholder="닉네임 검색"
          />
          <S.Icon>
            <div onClick={handleSearchClick}>
              <Icon.Search size="22" color={COLOR.Sub2} />
            </div>
          </S.Icon>
        </S.SearchContainer>
        <S.Table>
          <thead>
            <tr>
              <S.Th onClick={() => handleSortClick("approvalId")}>No</S.Th>
              <S.Th onClick={() => handleSortClick("nickname")}>닉네임</S.Th>
              <S.Th onClick={() => handleSortClick("email")}>이메일</S.Th>
              <S.Th onClick={() => handleSortClick("role")}>등급</S.Th>
              <S.Th onClick={() => handleSortClick("joinAt")}>가입일</S.Th>
              <S.Th onClick={() => handleSortClick("approvalStatus")}>승인상태</S.Th>
              <S.Th>보기</S.Th>
            </tr>
          </thead>
          <tbody>
            {searchResultEmpty ? (
              <tr>
                <S.Td colSpan={7}>검색된 닉네임이 없습니다</S.Td>
              </tr>
            ) : (
              approvalData.map((member) => (
                <tr key={member.approvalId}>
                  <S.Td>{member.approvalId}</S.Td>
                  <S.Td>
                    {member.nickname.length > 8
                      ? `${member.nickname.substring(0, 8)}...`
                      : member.nickname}
                  </S.Td>
                  <S.Td>{member.email}</S.Td>
                  <S.Td>{member.role}</S.Td>
                  <S.Td>{member.joinAt.toString()}</S.Td>
                  <S.Td>{member.approvalStatus}</S.Td>
                  <S.Td>
                    <Button
                      onClick={() => handleViewClick(member.approvalId)}
                      display="block"
                      type="border"
                      size="medium"
                    >
                      보기
                    </Button>
                  </S.Td>
                </tr>
              ))
            )}
          </tbody>
        </S.Table>
        {modalOpen && (
          <UserDetailModal
            setModalOpen={setModalOpen}
            approvalId={approvalId}
            onStatusChange={handleStatusUpdate} // Callback 전달
          />
        )}
      </S.AdminContainer>

      {/* 페이지네이션 컴포넌트 추가 */}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
        setCurrentPage={setCurrentPage}
      />
    </>
  );
}

export default AdminTable;
