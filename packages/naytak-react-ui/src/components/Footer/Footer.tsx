import { ReactNode } from "react";

export interface FooterProps {
  children?: ReactNode;
  className?: string;
}

export function Footer({ children, className }: FooterProps) {
  const classes = ["footer", className].filter(Boolean).join(" ");
  return (
    <footer className={classes} role="contentinfo">
      {children}
    </footer>
  );
}
