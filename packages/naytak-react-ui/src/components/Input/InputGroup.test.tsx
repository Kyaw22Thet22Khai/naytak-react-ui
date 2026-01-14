import { render } from "@testing-library/react";
import { InputGroup } from "./InputGroup";

describe("InputGroup", () => {
  it("renders children and applies className", () => {
    const { getByTestId } = render(
      <InputGroup className="custom-class" data-testid="group">
        <input type="text" />
        <span className="input-group-addon">@</span>
        <input type="text" />
      </InputGroup>
    );
    const group = getByTestId("group");
    expect(group).toBeInTheDocument();
    expect(group).toHaveClass("input-group");
    expect(group).toHaveClass("custom-class");
    expect(group.querySelectorAll("input").length).toBe(2);
    expect(group.querySelector(".input-group-addon")).toBeInTheDocument();
  });

  it("applies size class", () => {
    const { getByTestId } = render(
      <InputGroup size="lg" data-testid="group-lg">
        <input type="text" />
      </InputGroup>
    );
    const group = getByTestId("group-lg");
    expect(group).toHaveClass("input-group-lg");
  });
});
