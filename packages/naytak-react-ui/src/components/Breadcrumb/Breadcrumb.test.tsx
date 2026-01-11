import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Breadcrumb } from "./Breadcrumb";
import type { BreadcrumbSize } from "./Breadcrumb";

describe("Breadcrumb", () => {
  const items = [
    { label: "Home", href: "/" },
    { label: "Library", href: "/library" },
    { label: "Data" },
  ];

  it("renders navigation with aria-label", () => {
    render(<Breadcrumb items={items} ariaLabel="Breadcrumb" />);
    expect(
      screen.getByRole("navigation", { name: /breadcrumb/i })
    ).toBeInTheDocument();
  });

  it("renders links for non-current items and marks last as current", () => {
    render(<Breadcrumb items={items} />);
    const homeLink = screen.getByRole("link", { name: /home/i });
    expect(homeLink).toHaveAttribute("href", "/");

    const current = screen.getByText(/data/i);
    expect(current).toHaveAttribute("aria-current", "page");
  });

  it("renders separators between items", () => {
    render(<Breadcrumb items={items} separator="/" />);
    const separators = screen.getAllByText("/");
    expect(separators.length).toBe(items.length - 1);
  });

  it("applies size classes", () => {
    const { container: sm } = render(
      <Breadcrumb items={items} size={"sm" as BreadcrumbSize} />
    );
    expect(sm.firstChild).toHaveClass("ui-breadcrumb--sm");

    const { container: md } = render(<Breadcrumb items={items} />);
    expect(md.firstChild).toHaveClass("ui-breadcrumb--md");
  });
});
