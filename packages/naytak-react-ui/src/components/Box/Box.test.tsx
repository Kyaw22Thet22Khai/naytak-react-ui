import React from "react";
import { render } from "@testing-library/react";
import { Box } from "./Box";

describe("Box", () => {
  it("renders children", () => {
    const { getByText } = render(<Box>Content</Box>);
    expect(getByText("Content")).toBeInTheDocument();
  });

  it("applies custom className", () => {
    const { container } = render(<Box className="custom" />);
    expect(container.firstChild).toHaveClass("naytak-box");
    expect(container.firstChild).toHaveClass("custom");
  });

  it("renders as a different element", () => {
    const { container } = render(<Box as="section" />);
    expect(container.querySelector("section")).toBeInTheDocument();
  });
});
