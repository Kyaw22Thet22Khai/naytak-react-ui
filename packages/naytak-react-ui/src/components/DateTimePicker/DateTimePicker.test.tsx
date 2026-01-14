import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import { DateTimePicker } from "./DateTimePicker";

describe("DateTimePicker", () => {
  it("renders input and opens calendar on focus", () => {
    render(<DateTimePicker />);
    const input = screen.getByPlaceholderText(/select date/i);
    expect(input).toBeInTheDocument();
    fireEvent.focus(input);
    expect(screen.getByRole("dialog", { hidden: true })).toBeInTheDocument();
  });

  it("selects a date and calls onChange", () => {
    const handleChange = jest.fn();
    render(<DateTimePicker onChange={handleChange} />);
    const input = screen.getByPlaceholderText(/select date/i);
    fireEvent.focus(input);
    // Click the first available date cell
    const dateCell = screen
      .getAllByRole("cell")
      .find((cell) => cell.textContent && !isNaN(Number(cell.textContent)));
    if (dateCell) {
      fireEvent.click(dateCell);
      expect(handleChange).toHaveBeenCalled();
    }
  });

  it("shows time picker when timePicker is true", () => {
    render(<DateTimePicker timePicker />);
    const input = screen.getByPlaceholderText(/select date/i);
    fireEvent.focus(input);
    expect(screen.getByText(":")).toBeInTheDocument();
  });

  it("respects minDate and maxDate", () => {
    const minDate = new Date(2099, 0, 10);
    const maxDate = new Date(2099, 0, 15);
    render(
      <DateTimePicker
        minDate={minDate}
        maxDate={maxDate}
        value={new Date(2099, 0, 12)}
      />
    );
    fireEvent.focus(screen.getByPlaceholderText(/select date/i));
    const disabledCells = screen
      .getAllByRole("cell")
      .filter((cell) => cell.className.includes("dtp-disabled"));
    expect(disabledCells.length).toBeGreaterThan(0);
  });
});
