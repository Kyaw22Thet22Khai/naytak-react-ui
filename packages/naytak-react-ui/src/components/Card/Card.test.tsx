import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Card } from "./Card";

describe("Card", () => {
  it("renders title and body and applies size class", () => {
    render(
      <Card title="Hello" size="lg">
        Content
      </Card>
    );
    expect(screen.getByText("Hello")).toBeInTheDocument();
    expect(screen.getByText("Content")).toBeInTheDocument();
    const root = screen.getByText("Content").closest(".ui-card");
    expect(root?.className).toContain("ui-card--lg");
  });

  it("renders footer when provided", () => {
    render(<Card footer={<span>Footer</span>}>X</Card>);
    expect(screen.getByText("Footer")).toBeInTheDocument();
  });

  it("applies variant and interactive classes", () => {
    const { rerender } = render(<Card variant="outlined">V</Card>);
    let root = screen.getByText("V").closest(".ui-card");
    expect(root?.className).toContain("ui-card--outlined");

    rerender(
      <Card variant="elevated" interactive>
        V
      </Card>
    );
    root = screen.getByText("V").closest(".ui-card");
    expect(root?.className).toContain("ui-card--elevated");
    expect(root?.className).toContain("ui-card--interactive");
  });
});
