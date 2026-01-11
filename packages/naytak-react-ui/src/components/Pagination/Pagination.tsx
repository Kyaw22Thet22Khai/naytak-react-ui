import React from "react";
import "./Pagination.css";

export type PaginationShape = "rounded" | "borderless";
export type PaginationSize = "sm" | "md" | "lg";

export interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  siblingCount?: number;
  className?: string;
  size?: PaginationSize;
  shape?: PaginationShape;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
  siblingCount = 1,
  className = "",
  size = "md",
  shape = "rounded",
}) => {
  if (totalPages <= 1) return null;

  const range = (start: number, end: number): number[] =>
    Array.from({ length: end - start + 1 }, (_, i) => start + i);

  const getPageNumbers = (): Array<number | "dots"> => {
    const totalNumbers = siblingCount * 2 + 5;

    if (totalPages <= totalNumbers) {
      return range(1, totalPages);
    }

    const leftSibling = Math.max(currentPage - siblingCount, 2);
    const rightSibling = Math.min(currentPage + siblingCount, totalPages - 1);

    const showLeftDots = leftSibling > 2;
    const showRightDots = rightSibling < totalPages - 1;

    const pages: Array<number | "dots"> = [1];

    if (showLeftDots) pages.push("dots");

    for (let i = leftSibling; i <= rightSibling; i++) {
      pages.push(i);
    }

    if (showRightDots) pages.push("dots");

    pages.push(totalPages);

    return pages;
  };

  return (
    <nav
      className={[
        "pagination",
        `pagination--${size}`,
        `pagination--${shape}`,
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      aria-label="Pagination">
      {/* Previous */}
      <button
        type="button"
        className="pagination__arrow"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        aria-label="Previous page">
        ‹
      </button>

      {/* Pages */}
      {getPageNumbers().map((page, index) =>
        page === "dots" ? (
          <span key={`dots-${index}`} className="pagination__dots">
            …
          </span>
        ) : (
          <button
            key={page}
            type="button"
            className={`pagination__page${
              page === currentPage ? " pagination__page--active" : ""
            }`}
            onClick={() => onPageChange(page)}
            aria-current={page === currentPage ? "page" : undefined}>
            {page}
          </button>
        )
      )}

      {/* Next */}
      <button
        type="button"
        className="pagination__arrow"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        aria-label="Next page">
        ›
      </button>
    </nav>
  );
};

export default Pagination;
