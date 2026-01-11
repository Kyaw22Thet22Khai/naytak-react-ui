import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Checkbox } from "./Checkbox";

describe("Checkbox", () => {
  it("renders with label and size class", () => {
    render(<Checkbox label="Accept" size="sm" />);
    const input = screen.getByRole("checkbox");
    expect(input).toHaveClass("ui-checkbox", "ui-checkbox--sm");
    const label = screen.getByText("Accept");
    expect(label).toBeInTheDocument();
  });
});
