import React, { useState, useEffect } from "react";
import { usePagination, DOTS } from "./usePagination";
import { AiOutlineDoubleLeft, AiOutlineDoubleRight } from "react-icons/ai";

const Pagination = (props) => {
  const {
    onPageChange,
    totalCount,
    siblingCount = 1,
    currentPage,
    pageSize,
  } = props;
  const [activePage, setActivePage] = useState(currentPage);
  useEffect(() => {
    setActivePage(currentPage);
  }, [currentPage]);
  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  });
  if (paginationRange.length < 2) {
    return null;
  }

  const onNext = () => {
    if (currentPage < lastPage) {
      onPageChange(currentPage + 1);
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }
  };
  const onPrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }
  };
  let lastPage = paginationRange[paginationRange.length - 1];

  return (
    <ul className="flex items-center mt-4">
      <li
        className="p-2 rounded-full hover:bg-gray-200 active:bg-gray-300 cursor-pointer"
        onClick={onPrevious}
      >
        <AiOutlineDoubleLeft />
      </li>
      {paginationRange.map((pageNumber, index) => {
        if (pageNumber === DOTS) {
          return (
            <li
              key={index}
              className="pagination-item dots"
            >
              &#8230;
            </li>
          );
        }
        const isActive = pageNumber === activePage;
        return (
          <button
            key={index}
            className={`cursor-pointer mx-4 rounded-full p-2 ${
              isActive
                ? "bg-gray-400 text-white"
                : "hover:bg-gray-200 active:bg-gray-300"
            }`}
            onClick={() => {
              onPageChange(pageNumber);
              setActivePage(pageNumber);
            }}
          >
            {pageNumber}
          </button>
        );
      })}
      <li
        className="p-2 rounded-full hover:bg-gray-200 active:bg-gray-300 cursor-pointer"
        onClick={onNext}
      >
        <AiOutlineDoubleRight />
      </li>
    </ul>
  );
};
export default Pagination;
