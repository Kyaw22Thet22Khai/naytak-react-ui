export { TableHead } from "./TableHead";
export type { TableHeadProps } from "./TableHead";
export { TableBody } from "./TableBody";
export type { TableBodyProps } from "./TableBody";
// Table.tsx
import React from "react";

export type TableType = "hoverable" | "bordered" | "resposive" | "small";

export interface TableProps extends React.TableHTMLAttributes<HTMLTableElement> {
  type?: TableType;
  children: React.ReactNode;
}

export const Table: React.FC<TableProps> = ({
  type,
  children,
  className = "",
  ...props
}) => {
  const typeClass = type ? `table-${type}` : "";
  return (
    <table className={`table ${typeClass} ${className}`.trim()} {...props}>
      {children}
    </table>
  );
};
