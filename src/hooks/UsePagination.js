import { useState } from "react";

const usePagination = (data, itemsPerPage = 5) => {
  const [currentPage, setPage] = useState(1);

  const totalPages = Math.ceil(data.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const currentItems = data.slice(startIndex, endIndex);

  return {
    currentItems,
    currentPage,
    totalPages,
    setPage,
  };
};

export default usePagination;
