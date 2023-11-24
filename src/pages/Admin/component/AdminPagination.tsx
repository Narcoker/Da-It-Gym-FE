import * as S from "./AdminPagination.style";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  onPageChange: (newPage: number) => void;
}

const AdminPagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  setCurrentPage,
  onPageChange,
}) => {
  const renderPageNumbers = (currentPage: number) => {
    const pageNumbers = [];
    let nowPage;
    if (totalPages >= 10) {
      nowPage = currentPage > totalPages - 9 ? totalPages - 9 : currentPage;
    } else {
      nowPage = 1;
    }
    console.log(nowPage);
    for (let i = nowPage; i <= Math.min(totalPages, 9 + nowPage); i++) {
      const isActive = currentPage === i;
      pageNumbers.push(
        <S.PageBtn
          key={i}
          onClick={() => setCurrentPage(i)}
          className={isActive ? "active" : ""}
        >
          {i}
        </S.PageBtn>,
      );
    }
    return pageNumbers;
  };
  console.log("현재페이지", currentPage);
  return (
    <S.Pagination>
      {currentPage > 1 && (
        <S.ArrowBtn
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          {"<<"}
        </S.ArrowBtn>
      )}
      {renderPageNumbers(currentPage)}
      {totalPages - 10 >= currentPage && (
        <S.ArrowBtn
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          {">>"}
        </S.ArrowBtn>
      )}
    </S.Pagination>
  );
};

export default AdminPagination;
