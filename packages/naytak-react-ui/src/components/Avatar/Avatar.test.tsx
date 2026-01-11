import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";

// Component to test
import Avatar, { AvatarProps } from "./Avatar";

describe("Avatar", () => {
  it("renders with text", () => {
    render(<Avatar text="AB" />);
    expect(screen.getByText("AB")).toBeInTheDocument();
  });

  it("applies size class", () => {
    const { container } = render(<Avatar text="CD" size="lg" />);
    expect(container.firstChild).toHaveClass("avatar--lg");
  });

  it("truncates long text", () => {
    render(<Avatar text="VeryLongNameThatShouldTruncate" size="sm" />);
    expect(screen.getByText(/VeryLongName/)).toBeInTheDocument();
  });
});
