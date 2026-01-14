import { ReactNode, Children, isValidElement, cloneElement } from "react";

export interface InputGroupProps {
  children: ReactNode;
  className?: string;
  size?: "sm" | "md" | "lg";
}

export interface InputGroupAddonProps {
  children: ReactNode;
  className?: string;
  position?: "prefix" | "suffix";
}

export function InputGroup({
  children,
  className = "",
  size = "md",
}: InputGroupProps) {
  const enhancedChildren = Children.map(children, (child) => {
    if (isValidElement(child)) {
      const element = child as React.ReactElement<{ size?: string }>;

      if (
        (element.type as any).displayName === "Input" &&
        (element.props.size === undefined || element.props.size === null)
      ) {
        return cloneElement(element, { size });
      }
    }
    return child;
  });

  return (
    <div
      className={["input-group", size ? `input-group-${size}` : null, className]
        .filter(Boolean)
        .join(" ")}>
      {enhancedChildren}
    </div>
  );
}

export function InputGroupAddon({
  children,
  className = "",
  position,
}: InputGroupAddonProps) {
  return (
    <span
      className={[
        "input-group-addon",
        position === "prefix" ? "input-group-addon-prefix" : "",
        position === "suffix" ? "input-group-addon-suffix" : "",
        className,
      ]
        .filter(Boolean)
        .join(" ")}>
      {children}
    </span>
  );
}
