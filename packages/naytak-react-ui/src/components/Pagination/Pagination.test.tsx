import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Pagination, { PaginationProps } from "./Pagination";
import { describe, it, expect, vi } from "vitest";

describe("Pagination", () => {
  const setup = (props: Partial<PaginationProps> = {}) => {
    const onPageChange = vi.fn();
    const utils = render(
      <Pagination
        currentPage={props.currentPage ?? 1}
        totalPages={props.totalPages ?? 5}
        onPageChange={onPageChange}
        siblingCount={props.siblingCount}
        className={props.className}
      />
    );
    return { ...utils, onPageChange };
  };

  it("renders correct number of pages", () => {
    const { getByText } = setup({ totalPages: 3 });
    expect(getByText("1")).toBeInTheDocument();
    expect(getByText("2")).toBeInTheDocument();
    expect(getByText("3")).toBeInTheDocument();
  });

  it("calls onPageChange when a page is clicked", () => {
    const { getByText, onPageChange } = setup({
      currentPage: 1,
      totalPages: 3,
    });
    fireEvent.click(getByText("2"));
    expect(onPageChange).toHaveBeenCalledWith(2);
  });

  it("disables previous button on first page", () => {
    const { getByLabelText } = setup({ currentPage: 1 });
    expect(getByLabelText("Previous Page")).toBeDisabled();
  });

  it("disables next button on last page", () => {
    const { getByLabelText } = setup({ currentPage: 5, totalPages: 5 });
    expect(getByLabelText("Next Page")).toBeDisabled();
  });

  it("shows dots when pages are truncated", () => {
    const { getAllByText } = setup({ currentPage: 5, totalPages: 20 });
    expect(getAllByText("...").length).toBeGreaterThan(0);
  });
});
