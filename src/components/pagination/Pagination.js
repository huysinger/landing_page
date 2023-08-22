import React from "react";
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
        className="p-2 rounded-full hover:bg-gray-300 bg-gray-200 cursor-pointer"
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

        return (
          <button
            key={index}
            className="cursor-pointer mx-4 focus:border border-solid border-gray-300 rounded p-2"
            onClick={() => onPageChange(pageNumber)}
          >
            {pageNumber}
          </button>
        );
      })}
      <li
        className="p-2 rounded-full hover:bg-gray-300 bg-gray-200 cursor-pointer"
        onClick={onNext}
      >
        <AiOutlineDoubleRight />
      </li>
    </ul>
  );
};
export default Pagination;
