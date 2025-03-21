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

  console.log('Total Pages:', totalPages);
  console.log('Current Page:', currentPage);
  return (
    <div>
      <button
        className={`${currentPage === 0 ? 'bg-gray-200 cursor-not-allowed' : 'bg-gray-800'}`}
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 0}
      >
        이전
      </button>
      {Array.from({ length: totalPages }, (_, index) => (
        <button key={index} onClick={() => onPageChange(index)}>
          {index + 1}
        </button>
      ))}
      <button>다음</button>
    </div>
  );
};
export default Pagination;
