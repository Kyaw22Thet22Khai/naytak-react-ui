import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Footer } from "./Footer";

describe("Footer", () => {
  it("renders children", () => {
    render(<Footer>© 2026 Naytak</Footer>);
    expect(screen.getByText(/2026/i)).toBeInTheDocument();
  });
});
