import React from "react";
import "./Pagination.css";

import type { PaginationShape } from "./Pagination";

export interface TablePaginationProps {
  count: number; // total items
  page: number; // zero-based page index
  rowsPerPage: number;
  onPageChange: (newPage: number) => void;
  onRowsPerPageChange?: (rowsPerPage: number) => void;
  rowsPerPageOptions?: number[];
  labelRowsPerPage?: string;
  className?: string;
  shape?: PaginationShape;
}

const TablePagination: React.FC<TablePaginationProps> = ({
  count,
  page,
  rowsPerPage,
  onPageChange,
  onRowsPerPageChange,
  rowsPerPageOptions = [10, 25, 50, 100],
  labelRowsPerPage = "Rows per page",
  className = "",
  shape = "rounded",
}) => {
  const totalPages = Math.max(1, Math.ceil(count / rowsPerPage));

  const from = count === 0 ? 0 : page * rowsPerPage + 1;
  const to = Math.min(count, (page + 1) * rowsPerPage);

  const handlePrev = () => {
    if (page > 0) onPageChange(page - 1);
  };

  const handleNext = () => {
    if (page < totalPages - 1) onPageChange(page + 1);
  };

  return (
    <div
      className={["table-pagination", `table-pagination--${shape}`, className]
        .filter(Boolean)
        .join(" ")}>
      {/* Rows per page */}
      <span className="table-pagination__text">{labelRowsPerPage}</span>

      <select
        className="table-pagination__select"
        value={rowsPerPage}
        onChange={(e) => onRowsPerPageChange?.(Number(e.target.value))}
        aria-label={labelRowsPerPage}>
        {rowsPerPageOptions.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>

      {/* Range info */}
      <span className="table-pagination__text">
        {from}–{to} of {count}
      </span>

      {/* Previous */}
      <button
        type="button"
        className="pagination__arrow"
        onClick={handlePrev}
        disabled={page === 0}
        aria-label="Previous page">
        ‹
      </button>

      {/* Next */}
      <button
        type="button"
        className="pagination__arrow"
        onClick={handleNext}
        disabled={page >= totalPages - 1}
        aria-label="Next page">
        ›
      </button>
    </div>
  );
};

export default TablePagination;
