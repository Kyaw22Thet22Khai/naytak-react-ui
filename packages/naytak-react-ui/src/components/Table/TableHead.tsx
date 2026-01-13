import React from "react";

export type TableHeadColor = "primary" | "secondary" | "danger" | "dark";

export interface TableHeadProps extends React.HTMLAttributes<HTMLTableSectionElement> {
  children: React.ReactNode;
  color?: TableHeadColor;
}

export const TableHead: React.FC<TableHeadProps> = ({
  children,
  color,
  className = "",
  ...props
}) => {
  const colorClass = color ? `table-head-${color}` : "";
  return (
    <thead className={`${className} ${colorClass}`.trim()} {...props}>
      {children}
    </thead>
  );
};
