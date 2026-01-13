import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";

// Components to test
import { List } from "./List";
import { ListItem } from "./ListItem";

describe("List", () => {
  it("renders list items", () => {
    render(
      <List>
        <ListItem>Item 1</ListItem>
        <ListItem>Item 2</ListItem>
      </List>
    );
    expect(screen.getByText("Item 1")).toBeInTheDocument();
    expect(screen.getByText("Item 2")).toBeInTheDocument();
  });
});
