import formatNum from "../utils/formatNum";
function PageNum({ totalPages, setPage, currentPage }) {
  return (
    <div className="flex gap-2 justify-center h-10 text-xs ">
      {Array.from({ length: totalPages }, (_, index) => (
        <button
          key={index}
          onClick={() => setPage(index + 1)}
          className={
            currentPage === index + 1
              ? "bg-primary text-white w-8  h-8 rounded-sm text-center cursor-pointer"
              : "bg-surface text-text w-8 h-8 rounded-sm text-center cursor-pointer"
          }
        >
          {formatNum(index + 1)}
        </button>
      ))}
    </div>
  );
}

export default PageNum;
