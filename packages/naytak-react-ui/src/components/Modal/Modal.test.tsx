import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { Modal } from "./Modal";

describe("Modal", () => {
  it("does not render when open is false", () => {
    const { container } = render(<Modal open={false}>Content</Modal>);
    expect(container.firstChild).toBeNull();
  });

  it("renders when open is true with default size", () => {
    render(
      <Modal open={true} title="Title">
        Content
      </Modal>
    );
    expect(screen.getByText("Title")).toBeInTheDocument();
    expect(screen.getByText("Content")).toBeInTheDocument();
    const content = screen.getByText("Content").closest(".ui-modal__content");
    expect(content).toBeTruthy();
  });

  it("small and large sizes apply classes", () => {
    const { rerender } = render(
      <Modal open={true} size="small">
        Content
      </Modal>
    );
    let dialog = screen.getByRole("dialog");
    expect(dialog.className).toContain("ui-modal--sm");

    rerender(
      <Modal open={true} size="large">
        Content
      </Modal>
    );
    dialog = screen.getByRole("dialog");
    expect(dialog.className).toContain("ui-modal--lg");
  });

  it("overlay click calls onClose", () => {
    const onClose = vi.fn();
    render(
      <Modal open={true} onClose={onClose}>
        Content
      </Modal>
    );
    const overlay = document.querySelector(".ui-modal__overlay")!;
    fireEvent.click(overlay);
    expect(onClose).toHaveBeenCalled();
  });

  it("escape key calls onClose", () => {
    const onClose = vi.fn();
    render(
      <Modal open={true} onClose={onClose}>
        Content
      </Modal>
    );
    fireEvent.keyDown(document, { key: "Escape" });
    expect(onClose).toHaveBeenCalled();
  });
});
