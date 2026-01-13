import { forwardRef, HTMLAttributes, ReactNode } from "react";

export type CardSize = "sm" | "md" | "lg";

export type CardVariant = "default" | "outlined" | "elevated";

export interface CardProps extends Omit<
  HTMLAttributes<HTMLDivElement>,
  "title"
> {
  title?: ReactNode;
  subtitle?: ReactNode;
  footer?: ReactNode;
  size?: CardSize;
  variant?: CardVariant;
  interactive?: boolean;
}

export const Card = forwardRef<HTMLDivElement, CardProps>(function Card(
  {
    title,
    subtitle,
    footer,
    size = "md",
    variant = "default",
    interactive = false,
    className,
    children,
    ...props
  },
  ref
) {
  const rootCls = [
    "card",
    size ? `card-${size}` : null,
    variant !== "default" ? `card-${variant}` : null,
    interactive ? "card-interactive" : null,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div ref={ref} className={rootCls} {...props}>
      {(title || subtitle) && (
        <div className="card-header">
          {title ? <div className="card-title">{title}</div> : null}
          {subtitle ? <div className="card-subtitle">{subtitle}</div> : null}
        </div>
      )}
      <div className="card-body">{children}</div>
      {footer ? <div className="card-footer">{footer}</div> : null}
    </div>
  );
});
