import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Radio } from "./Radio";

describe("Radio", () => {
  it("renders with label and size class", () => {
    render(<Radio label="Option" size="lg" name="group" />);
    const input = screen.getByRole("radio");
    expect(input).toHaveClass("ui-radio", "ui-radio--lg");
    const label = screen.getByText("Option");
    expect(label).toBeInTheDocument();
  });
});
