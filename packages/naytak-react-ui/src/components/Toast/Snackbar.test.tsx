import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";

// Component to test
import Snackbar, { SnackbarProps } from "./Snackbar";

describe("Snackbar", () => {
  const defaultProps: SnackbarProps = {
    message: "Test message",
    open: true,
    autoHideDuration: 1000,
    onClose: vi.fn(),
  };

  it("renders message when open", () => {
    render(<Snackbar {...defaultProps} />);
    expect(screen.getByText("Test message")).toBeInTheDocument();
  });

  it("does not render when not open", () => {
    render(<Snackbar {...defaultProps} open={false} />);
    expect(screen.queryByText("Test message")).toBeNull();
  });

  it("calls onClose when close button is clicked", () => {
    render(<Snackbar {...defaultProps} />);
    fireEvent.click(screen.getByLabelText("Close"));
    expect(defaultProps.onClose).toHaveBeenCalled();
  });

  it("auto hides after duration", () => {
    vi.useFakeTimers();
    render(<Snackbar {...defaultProps} />);
    vi.advanceTimersByTime(1000);
    expect(defaultProps.onClose).toHaveBeenCalled();
    vi.useRealTimers();
  });
});
