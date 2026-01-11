import { ReactNode } from "react";

export interface NavbarProps {
  title?: string;
  children?: ReactNode;
  className?: string;
}

export function Navbar({ title, children, className }: NavbarProps) {
  const classes = ["ui-navbar", className].filter(Boolean).join(" ");
  return (
    <header className={classes} role="banner">
      <div className="ui-navbar__title" aria-label={title || "Navbar"}>
        {title}
      </div>
      <div className="ui-navbar__actions">{children}</div>
    </header>
  );
}
