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

const base = "btn";
const variants: Record<ButtonVariant, string> = {
  primary: "btn-primary",
  secondary: "btn-secondary",
  ghost: "btn-ghost",
  success: "btn-success",
  warning: "btn-warning",
  danger: "btn-danger",
  info: "btn-info",
  dark: "btn-dark",
  light: "btn-light",
};
const sizes: Record<ButtonSize, string> = {
  sm: "btn-sm",
  md: "btn-md",
  lg: "btn-lg",
};
const radii: Record<ButtonRadius, string> = {
  none: "btn-radius-none",
  sm: "btn-radius-sm",
  md: "btn-radius-md",
  lg: "btn-radius-lg",
  full: "btn-radius-full",
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
      outlined ? "btn-outline" : null,
      className,
    ]
      .filter(Boolean)
      .join(" ");
    return <button ref={ref} className={classes} {...props} />;
  }
);
