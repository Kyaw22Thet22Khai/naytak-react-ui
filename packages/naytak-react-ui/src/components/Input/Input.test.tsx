import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Input } from "./Input";

describe("Input", () => {
  it("renders with label and associates via htmlFor", () => {
    render(<Input label="Email" placeholder="you@example.com" />);
    const label = screen.getByText(/email/i);
    const input = screen.getByPlaceholderText(/you@example.com/i);
    expect(label).toBeInTheDocument();
    expect(input).toBeInTheDocument();
    // Ensure association
    expect(label).toHaveAttribute("for", input.getAttribute("id")!);
  });

  it("renders inline layout when inline=true", () => {
    render(<Input label="Name" inline placeholder="Jane" />);
    const container = screen.getByText(/name/i).closest(".ui-field");
    expect(container?.className).toContain("ui-field--inline");
  });

  it("renders group with prefix and suffix", () => {
    render(
      <Input
        label="Website"
        addonBefore="https://"
        addonAfter=".com"
        placeholder="example"
      />
    );
    const prefix = screen.getByText("https://");
    const suffix = screen.getByText(".com");
    expect(prefix).toBeInTheDocument();
    expect(suffix).toBeInTheDocument();
  });

  it("applies size classes", () => {
    const { rerender } = render(<Input size="sm" placeholder="x" />);
    let input = screen.getByPlaceholderText("x");
    expect(input.className).toContain("ui-input--sm");

    rerender(<Input size="lg" placeholder="y" />);
    input = screen.getByPlaceholderText("y");
    expect(input.className).toContain("ui-input--lg");
  });

  it("renders iconStart and iconEnd elements", () => {
    render(
      <Input
        placeholder="icon"
        iconStart={<span>i</span>}
        iconEnd={<span>e</span>}
      />
    );
    const input = screen.getByPlaceholderText("icon");
    expect(input.className).toMatch(/ui-input--icon-start/);
    expect(input.className).toMatch(/ui-input--icon-end/);
  });
});
