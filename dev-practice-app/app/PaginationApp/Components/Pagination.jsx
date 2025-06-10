import React from "react";

const Pagination = ({
  currentPage,
  noOfPages,
  handlePageChange,
  goToPrevPage,
  goToNextPage,
}) => {
  return (
    <div className="pagination-container">
      <button
        className="page-number"
        disabled={currentPage === 0}
        onClick={() => goToPrevPage()}
      >
        ◀
      </button>
      {[
        ...Array(noOfPages)
          .keys()
          .map((num) => (
            <button
              onClick={() => handlePageChange(num)}
              className={`page-number ${currentPage === num ? "active" : ""}`}
              key={num}
            >
              {num + 1}
            </button>
          )),
      ]}
      <button
        className="page-number"
        disabled={currentPage === noOfPages - 1}
        onClick={() => goToNextPage()}
      >
        ▶
      </button>
    </div>
  );
};

export default Pagination;
