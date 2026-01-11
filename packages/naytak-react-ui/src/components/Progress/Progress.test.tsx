import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";

// Component to test
import Progress, { ProgressProps } from "./Progress";

describe("Progress", () => {
  it("renders linear progress with correct value", () => {
    render(<Progress value={60} type="linear" color="primary" />);
    expect(screen.getByText("60%"));
  });

  it("renders circular progress with correct value", () => {
    render(<Progress value={75} type="circular" color="success" />);
    expect(screen.getByText("75%"));
  });

  it("applies color class", () => {
    const { container } = render(
      <Progress value={40} type="linear" color="danger" />
    );
    expect(container.firstChild).toHaveClass("progress--danger");
  });
});
