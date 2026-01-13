import { ReactNode } from "react";

export interface NavbarProps {
  title?: string;
  children?: ReactNode;
  className?: string;
}

export function Navbar({ title, children, className }: NavbarProps) {
  const classes = ["navbar", className].filter(Boolean).join(" ");
  return (
    <header className={classes} role="banner">
      <div className="navbar-title" aria-label={title || "Navbar"}>
        {title}
      </div>
      <div className="navbar-actions">{children}</div>
    </header>
  );
}
