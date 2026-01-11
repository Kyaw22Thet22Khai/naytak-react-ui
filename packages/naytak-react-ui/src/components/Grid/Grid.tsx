import React, { ReactNode } from "react";
import "./Grid.css";

export type GridBreakpoint = 1 | 2 | 3 | 4 | 0 | 0.5 | 8 | 12;
export type GridColumnSpacing =
  | GridBreakpoint
  | {
      xs?: GridBreakpoint;
      sm?: GridBreakpoint;
      md?: GridBreakpoint;
      lg?: GridBreakpoint;
      xl?: GridBreakpoint;
    };

export interface GridProps {
  container?: boolean;
  fluid?: boolean;
  className?: string;
  children?: ReactNode;
  style?: React.CSSProperties;
  spacing?: GridBreakpoint;
  rowSpacing?: 1 | 2 | 3 | 4;
  columnSpacing?: GridColumnSpacing;
}

export const Grid: React.FC<GridProps> = ({
  container = false,
  fluid = false,
  className = "",
  children,
  style,
  spacing = 0,
  rowSpacing,
  columnSpacing,
}) => {
  const spacingClass = spacing ? `grid-spacing-${spacing}` : "";
  const rowSpacingClass = rowSpacing ? `grid-row-spacing-${rowSpacing}` : "";
  let colSpacingClasses: string[] = [];
  if (columnSpacing) {
    if (typeof columnSpacing === "object") {
      if (columnSpacing.xs)
        colSpacingClasses.push(`grid-col-spacing-xs-${columnSpacing.xs}`);
      if (columnSpacing.sm)
        colSpacingClasses.push(`grid-col-spacing-sm-${columnSpacing.sm}`);
      if (columnSpacing.md)
        colSpacingClasses.push(`grid-col-spacing-md-${columnSpacing.md}`);
      if (columnSpacing.lg)
        colSpacingClasses.push(`grid-col-spacing-lg-${columnSpacing.lg}`);
      if (columnSpacing.xl)
        colSpacingClasses.push(`grid-col-spacing-xl-${columnSpacing.xl}`);
    } else {
      colSpacingClasses.push(`grid-col-spacing-xs-${columnSpacing}`);
    }
  }
  const classes = [
    container ? (fluid ? "grid-container-fluid" : "grid-container") : "",
    spacingClass,
    rowSpacingClass,
    ...colSpacingClasses,
    className,
  ]
    .filter(Boolean)
    .join(" ");
  return (
    <div className={classes} style={style}>
      {children}
    </div>
  );
};

export interface GridItemProps {
  xs?: number;
  sm?: number;
  md?: number;
  lg?: number;
  xl?: number;
  className?: string;
  children?: ReactNode;
  style?: React.CSSProperties;
  spacing?: 0 | 0.5 | 1 | 2 | 3 | 4 | 8 | 12;
}

export const GridItem: React.FC<GridItemProps> = ({
  xs = 12,
  sm,
  md,
  lg,
  xl,
  className = "",
  children,
  style,
  spacing = 0,
}) => {
  const getColClass = (prefix: string, value?: number) =>
    value ? `grid-col-${prefix}-${value}` : "";
  const spacingClass = spacing ? `grid-item-spacing-${spacing}` : "";
  const classes = [
    getColClass("xs", xs),
    getColClass("sm", sm),
    getColClass("md", md),
    getColClass("lg", lg),
    getColClass("xl", xl),
    spacingClass,
    className,
  ]
    .filter(Boolean)
    .join(" ");
  return (
    <div className={classes} style={style}>
      {children}
    </div>
  );
};
