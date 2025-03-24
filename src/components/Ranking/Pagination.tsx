interface PaginationProps {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  totalPages,
  currentPage,
  onPageChange,
}) => {
  if (totalPages <= 1) return null;

  const pagesPerGroup = 4;          // 한 번에 보여줄 페이지 수 (1, 2, 3, 4)
  const currentGroup = Math.floor(currentPage / pagesPerGroup);
  const startPage = currentGroup * pagesPerGroup;
  const endPage = Math.min(startPage + pagesPerGroup, totalPages);

  return (
    <div className="flex justify-center items-center gap-2">
      <button
        onClick={() => {
          if (startPage > 0) onPageChange(startPage - 1);
        }}
        disabled={startPage === 0}
        className={`font-Regular ${startPage === 0 ? 'text-lightGray cursor-not-allowed' : 'text-black hover:underline'}`}
      >
        이전
      </button>
      {Array.from({ length: endPage - startPage }, (_, index) => {
        const page = startPage + index;
        return (
          <button
            key={page}
            onClick={() => onPageChange(page)}
            className={`font-Bold ${
              currentPage === page
                ? 'text-black underline font-Bold'
                : 'text-grey hover:text-black'
            }`}
          >
            {page + 1}
          </button>
        );
      })}
      <button
        className={`${
          endPage >= totalPages
            ? 'text-lightGray cursor-not-allowed'
            : 'text-black'
        }`}
        onClick={() => {
          if (endPage < totalPages) onPageChange(endPage);
        }}
        disabled={endPage >= totalPages}
      >
        다음
      </button>
    </div>
  );
};
export default Pagination;
