import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Content } from "./Content";

describe("Content", () => {
  it("renders children", () => {
    render(
      <Content>
        <h1>Page Title</h1>
      </Content>
    );
    expect(
      screen.getByRole("heading", { name: /page title/i })
    ).toBeInTheDocument();
  });
});
