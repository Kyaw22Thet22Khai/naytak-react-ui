import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { SearchSelect } from "./SearchSelect";

describe("SearchSelect", () => {
  it("renders label and datalist options", () => {
    render(
      <SearchSelect
        label="Fruit"
        options={[
          { label: "Apple", value: "apple" },
          { label: "Banana", value: "banana" },
        ]}
        placeholder="Type to search"
      />
    );

    const label = screen.getByText("Fruit");
    expect(label).toBeInTheDocument();

    const input = screen.getByPlaceholderText("Type to search");
    expect(input).toBeInTheDocument();

    const listId = input.getAttribute("list");
    expect(listId).toBeTruthy();
    const datalist = document.getElementById(listId!);
    expect(datalist?.tagName.toLowerCase()).toBe("datalist");
    expect(datalist?.children.length).toBe(2);
  });

  it("applies size via input classes", () => {
    const { rerender } = render(
      <SearchSelect options={[{ label: "A", value: "a" }]} size="sm" />
    );
    let input = screen.getByRole("combobox");
    expect(input.className).toContain("ui-input--sm");

    rerender(<SearchSelect options={[{ label: "A", value: "a" }]} size="lg" />);
    input = screen.getByRole("combobox");
    expect(input.className).toContain("ui-input--lg");
  });
});
