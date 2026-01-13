import { ReactNode, HTMLAttributes } from "react";

export interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * When true, the container spans the full width without a max-width.
   */
  fluid?: boolean;
  children?: ReactNode;
  className?: string;
}

export function Container({
  fluid = false,
  children,
  className,
  ...props
}: ContainerProps) {
  const classes = ["ui-container", fluid ? "container-fluid" : null, className]
    .filter(Boolean)
    .join(" ");
  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
}
