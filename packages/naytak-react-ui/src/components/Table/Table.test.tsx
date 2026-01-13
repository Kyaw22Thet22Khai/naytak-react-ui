import React from "react";
import { render, screen } from "@testing-library/react";
import { Table, TableType } from "./Table";

describe("Table", () => {
  it("renders children correctly", () => {
    render(
      <Table>
        <tbody>
          <tr>
            <td>Cell</td>
          </tr>
        </tbody>
      </Table>
    );
    expect(screen.getByText("Cell")).toBeInTheDocument();
  });

  it("applies type className", () => {
    const types: TableType[] = ["hoverable", "bordered", "resposive", "small"];
    types.forEach((type) => {
      const { container } = render(
        <Table type={type}>
          <tbody>
            <tr>
              <td>{type}</td>
            </tr>
          </tbody>
        </Table>
      );
      expect(container.querySelector("table")).toHaveClass(`table-${type}`);
    });
  });
});
