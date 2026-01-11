import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Button } from "./Button";

describe("Button", () => {
  it("renders with text and handles click", async () => {
    const user = userEvent.setup();
    const onClick = vi.fn();

    render(<Button onClick={onClick}>Click Me</Button>);

    const btn = screen.getByRole("button", { name: /click me/i });
    expect(btn).toBeInTheDocument();

    await user.click(btn);
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it("applies variant styles", () => {
    render(<Button variant="secondary">Secondary</Button>);
    const btn = screen.getByRole("button", { name: /secondary/i });
    expect(btn.className).toContain("ui-btn--secondary");
  });

  it("applies size classes (default md)", () => {
    render(<Button>Default</Button>);
    const btn = screen.getByRole("button", { name: /default/i });
    expect(btn.className).toContain("ui-btn--md");
  });

  it("supports explicit sizes sm and lg", () => {
    const { rerender } = render(<Button size="sm">Small</Button>);
    let btn = screen.getByRole("button", { name: /small/i });
    expect(btn.className).toContain("ui-btn--sm");

    rerender(<Button size="lg">Large</Button>);
    btn = screen.getByRole("button", { name: /large/i });
    expect(btn.className).toContain("ui-btn--lg");
  });

  it("applies outlined style with variant", () => {
    render(
      <Button variant="primary" outlined>
        Outlined
      </Button>
    );
    const btn = screen.getByRole("button", { name: /outlined/i });
    expect(btn.className).toContain("ui-btn--outline");
    expect(btn.className).toContain("ui-btn--primary");
  });

  it("applies radius classes (default md and explicit)", () => {
    const { rerender } = render(<Button>Radius Default</Button>);
    let btn = screen.getByRole("button", { name: /radius default/i });
    expect(btn.className).toContain("ui-btn--radius-md");

    rerender(<Button radius="none">Square</Button>);
    btn = screen.getByRole("button", { name: /square/i });
    expect(btn.className).toContain("ui-btn--radius-none");

    rerender(<Button radius="full">Pill</Button>);
    btn = screen.getByRole("button", { name: /pill/i });
    expect(btn.className).toContain("ui-btn--radius-full");
  });
});
