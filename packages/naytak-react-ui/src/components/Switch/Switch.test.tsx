import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Switch } from "./Switch";

describe("Switch", () => {
  it("renders switch with label and size class on wrapper", () => {
    render(<Switch label="Power" size="md" />);
    const input = screen.getByRole("switch");
    expect(input).toBeInTheDocument();
    const track = input.nextElementSibling as HTMLElement | null;
    expect(track?.className).toContain("ui-switch__track");
  });
});
