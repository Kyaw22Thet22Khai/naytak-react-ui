import { ReactNode } from "react";
import { Container } from "../Container/Container";

export interface ContentProps {
  children?: ReactNode;
  className?: string;
  /** Use fluid container (full width) */
  fluid?: boolean;
}

export function Content({ children, className, fluid = true }: ContentProps) {
  const classes = ["ui-content", className].filter(Boolean).join(" ");
  return (
    <Container className={classes} role="main" fluid={fluid}>
      {children}
    </Container>
  );
}
