import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Navbar } from "./Navbar";

describe("Navbar", () => {
  it("renders title and actions", () => {
    render(
      <Navbar title="Dashboard">
        <button>Action</button>
      </Navbar>
    );

    expect(screen.getByText("Dashboard")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /action/i })).toBeInTheDocument();
  });
});
