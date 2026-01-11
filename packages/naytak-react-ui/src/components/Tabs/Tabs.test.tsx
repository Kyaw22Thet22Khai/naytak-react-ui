import { describe, it, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";

// Component to test
import { Tabs, TabPanel } from "./Tabs";

const items = [
  { label: "Tab 1", value: "tab1" },
  { label: "Tab 2", value: "tab2" },
  { label: "Tab 3", value: "tab3", disabled: true },
];

describe("Tabs", () => {
  it("renders tab labels and panels", () => {
    render(
      <Tabs items={items} defaultValue="tab1">
        <TabPanel value="tab1">Panel 1</TabPanel>
        <TabPanel value="tab2">Panel 2</TabPanel>
      </Tabs>
    );
    expect(screen.getByRole("tab", { name: /tab 1/i })).toBeInTheDocument();
    expect(screen.getByRole("tabpanel")).toHaveTextContent("Panel 1");
  });

  it("switches panels on click", () => {
    render(
      <Tabs items={items} defaultValue="tab1">
        <TabPanel value="tab1">Panel 1</TabPanel>
        <TabPanel value="tab2">Panel 2</TabPanel>
      </Tabs>
    );
    fireEvent.click(screen.getByRole("tab", { name: /tab 2/i }));
    expect(screen.getByRole("tabpanel")).toHaveTextContent("Panel 2");
  });

  it("does not switch to disabled tab", () => {
    render(
      <Tabs items={items} defaultValue="tab1">
        <TabPanel value="tab1">Panel 1</TabPanel>
        <TabPanel value="tab2">Panel 2</TabPanel>
        <TabPanel value="tab3">Panel 3</TabPanel>
      </Tabs>
    );
    fireEvent.click(screen.getByRole("tab", { name: /tab 3/i }));
    expect(screen.getByRole("tabpanel")).toHaveTextContent("Panel 1");
  });

  it("supports keyboard navigation", () => {
    render(
      <Tabs items={items} defaultValue="tab1">
        <TabPanel value="tab1">Panel 1</TabPanel>
        <TabPanel value="tab2">Panel 2</TabPanel>
        <TabPanel value="tab3">Panel 3</TabPanel>
      </Tabs>
    );
    const tablist = screen.getByRole("tablist");
    tablist.focus();
    fireEvent.keyDown(tablist, { key: "ArrowRight" });
    expect(screen.getByRole("tabpanel")).toHaveTextContent("Panel 2");
    fireEvent.keyDown(tablist, { key: "ArrowRight" });
    // Skips disabled tab3, wraps to tab1
    expect(screen.getByRole("tabpanel")).toHaveTextContent("Panel 1");
    fireEvent.keyDown(tablist, { key: "ArrowLeft" });
    // Wraps to tab2
    expect(screen.getByRole("tabpanel")).toHaveTextContent("Panel 2");
  });
});
