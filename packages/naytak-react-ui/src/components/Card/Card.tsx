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
    "ui-card",
    size ? `ui-card--${size}` : null,
    variant !== "default" ? `ui-card--${variant}` : null,
    interactive ? "ui-card--interactive" : null,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div ref={ref} className={rootCls} {...props}>
      {(title || subtitle) && (
        <div className="ui-card__header">
          {title ? <div className="ui-card__title">{title}</div> : null}
          {subtitle ? (
            <div className="ui-card__subtitle">{subtitle}</div>
          ) : null}
        </div>
      )}
      <div className="ui-card__body">{children}</div>
      {footer ? <div className="ui-card__footer">{footer}</div> : null}
    </div>
  );
});
