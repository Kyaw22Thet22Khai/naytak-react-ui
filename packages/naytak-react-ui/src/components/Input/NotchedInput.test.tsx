import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { NotchedInput } from "../../index";

describe("NotchedInput", () => {
  it("renders label in legend and input inside fieldset", () => {
    render(<NotchedInput label="Username" placeholder="Enter username" />);

    const labelText = screen.getByText("Username");
    const legend = labelText.closest("legend");
    expect(legend).not.toBeNull();
    expect(legend?.tagName.toLowerCase()).toBe("legend");

    const input = screen.getByPlaceholderText("Enter username");
    expect(input).toBeInTheDocument();
    expect(input).toHaveClass("ui-input");
  });

  it("applies size class on fieldset", () => {
    render(<NotchedInput label="Small" size="sm" />);
    const legend = screen.getByText("Small");
    const fieldset = legend.closest("fieldset");
    expect(fieldset).toHaveClass("ui-notched--sm");
  });
});
