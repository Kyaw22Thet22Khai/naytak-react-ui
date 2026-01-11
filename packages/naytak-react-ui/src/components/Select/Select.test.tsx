import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Select } from "./Select";

describe("Select", () => {
  it("renders with label and options", () => {
    render(
      <Select
        label="Pick"
        options={[
          { label: "One", value: "1" },
          { label: "Two", value: "2" },
        ]}
      />
    );
    const label = screen.getByText("Pick");
    expect(label).toBeInTheDocument();
    const select = screen.getByRole("combobox");
    expect(select).toBeInTheDocument();
    expect(select).toHaveClass("ui-select");
    expect((select as HTMLSelectElement).options.length).toBe(2);
  });

  it("applies size classes", () => {
    const { rerender } = render(
      <Select size="sm" options={[{ label: "One", value: "1" }]} />
    );
    let select = screen.getByRole("combobox");
    expect(select.className).toContain("ui-select--sm");

    rerender(<Select size="lg" options={[{ label: "One", value: "1" }]} />);
    select = screen.getByRole("combobox");
    expect(select.className).toContain("ui-select--lg");
  });

  it("renders inline layout when inline=true", () => {
    render(
      <Select label="Inline" inline options={[{ label: "One", value: "1" }]} />
    );
    const container = screen.getByText("Inline").closest(".ui-field");
    expect(container?.className).toContain("ui-field--inline");
  });
});
