import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Container } from "./Container";

describe("Container", () => {
  it("renders children", () => {
    render(
      <Container>
        <span>Inside</span>
      </Container>
    );
    expect(screen.getByText(/inside/i)).toBeInTheDocument();
  });

  it("applies base class", () => {
    const { container } = render(<Container />);
    expect(container.firstChild).toHaveClass("ui-container");
  });

  it("applies fluid modifier when fluid is true", () => {
    const { container } = render(<Container fluid />);
    expect(container.firstChild).toHaveClass("ui-container--fluid");
  });
});
