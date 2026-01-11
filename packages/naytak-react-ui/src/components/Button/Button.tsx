import { forwardRef, ButtonHTMLAttributes } from "react";

export type ButtonVariant =
  | "primary"
  | "secondary"
  | "ghost"
  | "success"
  | "warning"
  | "danger"
  | "info"
  | "dark"
  | "light";
export type ButtonSize = "sm" | "md" | "lg";
export type ButtonRadius = "none" | "sm" | "md" | "lg" | "full";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  outlined?: boolean;
  radius?: ButtonRadius;
}

const base = "ui-btn";
const variants: Record<ButtonVariant, string> = {
  primary: "ui-btn--primary",
  secondary: "ui-btn--secondary",
  ghost: "ui-btn--ghost",
  success: "ui-btn--success",
  warning: "ui-btn--warning",
  danger: "ui-btn--danger",
  info: "ui-btn--info",
  dark: "ui-btn--dark",
  light: "ui-btn--light",
};
const sizes: Record<ButtonSize, string> = {
  sm: "ui-btn--sm",
  md: "ui-btn--md",
  lg: "ui-btn--lg",
};
const radii: Record<ButtonRadius, string> = {
  none: "ui-btn--radius-none",
  sm: "ui-btn--radius-sm",
  md: "ui-btn--radius-md",
  lg: "ui-btn--radius-lg",
  full: "ui-btn--radius-full",
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  function Button(
    {
      variant = "primary",
      size = "md",
      outlined = false,
      radius = "md",
      className,
      ...props
    },
    ref
  ) {
    const classes = [
      base,
      variants[variant],
      sizes[size],
      radii[radius],
      outlined ? "ui-btn--outline" : null,
      className,
    ]
      .filter(Boolean)
      .join(" ");
    return <button ref={ref} className={classes} {...props} />;
  }
);
