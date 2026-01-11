import { describe, expect, it } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";

// Component to test
import Tooltip, { TooltipProps } from "./Tooltip";

describe("Tooltip", () => {
  const defaultProps: TooltipProps = {
    content: "Tooltip text",
    children: <button>Hover me</button>,
  };

  it("renders children", () => {
    render(<Tooltip {...defaultProps} />);
    expect(screen.getByText("Hover me")).toBeInTheDocument();
  });

  it("shows tooltip on hover", () => {
    render(<Tooltip {...defaultProps} />);
    fireEvent.mouseEnter(screen.getByText("Hover me"));
    expect(screen.getByText("Tooltip text")).toBeInTheDocument();
  });

  it("hides tooltip on mouse leave", () => {
    render(<Tooltip {...defaultProps} />);
    const trigger = screen.getByText("Hover me");
    fireEvent.mouseEnter(trigger);
    fireEvent.mouseLeave(trigger);
    expect(screen.queryByText("Tooltip text")).toBeNull();
  });
});
