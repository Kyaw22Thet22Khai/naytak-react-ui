import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Sidebar, SidebarItem } from "./Sidebar";

describe("Sidebar", () => {
  it("renders items with labels when expanded", () => {
    render(
      <Sidebar collapsed={false}>
        <SidebarItem label="Home" />
        <SidebarItem label="Settings" />
      </Sidebar>
    );

    expect(
      screen.getByRole("navigation", { name: /sidebar/i })
    ).toBeInTheDocument();
    expect(screen.getByText("Home")).toBeInTheDocument();
    expect(screen.getByText("Settings")).toBeInTheDocument();
  });

  it("hides labels visually when collapsed", () => {
    render(
      <Sidebar collapsed>
        <SidebarItem label="Home" />
      </Sidebar>
    );

    const label = screen.getByText("Home");
    // Visually hidden via 'sr-only' class
    expect(label.className).toMatch(/sr-only/);
  });

  it("applies active styles on active item", () => {
    render(
      <Sidebar>
        <SidebarItem label="Home" active />
      </Sidebar>
    );

    const item = screen.getByRole("button", { name: /home/i });
    expect(item.className).toContain("ui-sidebar-item--active");
  });
});
