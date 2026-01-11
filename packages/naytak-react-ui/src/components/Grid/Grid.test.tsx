import React from "react";
import { render } from "@testing-library/react";
import { Grid, GridItem } from "./Grid";
import { describe, it, expect } from "vitest";

describe("Grid", () => {
  it("renders a container div with children", () => {
    const { getByText } = render(
      <Grid container>
        <div>Child</div>
      </Grid>
    );
    expect(getByText("Child")).toBeInTheDocument();
  });

  it("applies fluid class when fluid is true", () => {
    const { container } = render(
      <Grid container fluid>
        Fluid
      </Grid>
    );
    expect(container.firstChild).toHaveClass("grid-container-fluid");
  });

  it("applies container class when container is true", () => {
    const { container } = render(<Grid container>Container</Grid>);
    expect(container.firstChild).toHaveClass("grid-container");
  });
});

describe("GridItem", () => {
  it("renders with correct xs class", () => {
    const { container } = render(<GridItem xs={6}>Half</GridItem>);
    expect(container.firstChild).toHaveClass("grid-col-xs-6");
  });

  it("renders with correct md class", () => {
    const { container } = render(<GridItem md={4}>Third</GridItem>);
    expect(container.firstChild).toHaveClass("grid-col-md-4");
  });

  it("renders with multiple breakpoint classes", () => {
    const { container } = render(
      <GridItem xs={12} md={6} lg={3}>
        Multi
      </GridItem>
    );
    expect(container.firstChild).toHaveClass("grid-col-xs-12");
    expect(container.firstChild).toHaveClass("grid-col-md-6");
    expect(container.firstChild).toHaveClass("grid-col-lg-3");
  });
});
