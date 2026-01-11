import React from "react";
import "./Badge.css";

export type BadgeColor =
  | "primary"
  | "secondary"
  | "success"
  | "warning"
  | "danger"
  | "dark"
  | "light";

export type BadgeVariant = "normal" | "pill" | "outline";

export type BadgeSize = "sm" | "md" | "lg";

export interface BadgeProps {
  color?: BadgeColor;
  size?: BadgeSize;
  variant?: BadgeVariant;
  className?: string;
  children?: React.ReactNode;
}

const Badge: React.FC<BadgeProps> = ({
  color = "secondary",
  size = "md",
  variant = "normal",
  className = "",
  children,
}) => {
  return (
    <span
      className={[
        "badge",
        `badge--${color}`,
        `badge--${size}`,
        `badge--${variant}`,
        className,
      ]
        .filter(Boolean)
        .join(" ")}>
      {children}
    </span>
  );
};

export default Badge;
