import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { DashboardLayout } from "./DashboardLayout";
import { SidebarItem } from "../Sidebar/Sidebar";
import { Button } from "../Button/Button";

describe("DashboardLayout", () => {
  it("renders composed layout elements", () => {
    render(
      <DashboardLayout
        title="Admin"
        sidebar={
          <>
            <SidebarItem label="Home" active />
            <SidebarItem label="Settings" />
          </>
        }
        navbarActions={<Button>New</Button>}
        footer={<span>© 2026</span>}>
        <h1>Welcome</h1>
      </DashboardLayout>
    );

    expect(screen.getByText("Admin")).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: /welcome/i })
    ).toBeInTheDocument();
    expect(screen.getByText(/2026/)).toBeInTheDocument();
  });
});
