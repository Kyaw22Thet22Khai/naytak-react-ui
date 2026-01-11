import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";

// Component to test
import Badge, { BadgeProps } from "./Badge";

describe("Badge", () => {
  it("renders with children", () => {
    render(<Badge>Sample</Badge>);
    expect(screen.getByText("Sample")).toBeInTheDocument();
  });

  it("applies color class", () => {
    const { container } = render(<Badge color="primary">Test</Badge>);
    expect(container.firstChild).toHaveClass("badge--primary");
  });
});
