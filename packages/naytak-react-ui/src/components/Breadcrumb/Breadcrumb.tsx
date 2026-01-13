import { HTMLAttributes } from "react";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export type BreadcrumbSize = "sm" | "md";

export interface BreadcrumbProps extends HTMLAttributes<HTMLElement> {
  items: BreadcrumbItem[];
  separator?: string;
  ariaLabel?: string;
  className?: string;
  size?: BreadcrumbSize;
}

export function Breadcrumb({
  items,
  separator = "/",
  ariaLabel = "Breadcrumb",
  size = "md",
  className,
  ...props
}: BreadcrumbProps) {
  const classes = [
    "breadcrumb",
    size === "sm" ? "breadcrumb-sm" : "breadcrumb-md",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <nav className={classes} aria-label={ariaLabel} {...props}>
      <ol className="breadcrumb-list">
        {items.map((item, idx) => {
          const isLast = idx === items.length - 1;
          return (
            <li key={`${item.label}-${idx}`} className="breadcrumb-item">
              {item.href && !isLast ? (
                <a href={item.href} className="breadcrumb-link">
                  {item.label}
                </a>
              ) : (
                <span
                  className="breadcrumb-current"
                  aria-current={isLast ? "page" : undefined}>
                  {item.label}
                </span>
              )}
              {!isLast && (
                <span className="breadcrumb-separator" aria-hidden="true">
                  {separator}
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
