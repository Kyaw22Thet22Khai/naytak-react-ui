import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { NotchedSelect } from "./NotchedSelect";

describe("NotchedSelect", () => {
  it("renders legend label and select inside fieldset", () => {
    render(
      <NotchedSelect label="Role">
        <option>Admin</option>
        <option>User</option>
      </NotchedSelect>
    );

    const labelText = screen.getByText("Role");
    const legend = labelText.closest("legend");
    expect(legend).not.toBeNull();

    const select = screen.getByRole("combobox");
    expect(select).toBeInTheDocument();
    expect(select).toHaveClass("ui-select");
  });

  it("applies size class on fieldset and select", () => {
    render(
      <NotchedSelect label="Small" size="sm">
        <option>1</option>
      </NotchedSelect>
    );
    const legend = screen.getByText("Small");
    const fieldset = legend.closest("fieldset");
    expect(fieldset).toHaveClass("ui-notched--sm");

    const select = screen.getByRole("combobox");
    expect(select.className).toContain("ui-select--sm");
  });
});
