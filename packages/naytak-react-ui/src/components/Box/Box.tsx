import React from "react";
import "./Box.css";

export interface BoxProps extends React.HTMLAttributes<HTMLDivElement> {
  as?: React.ElementType;
  children?: React.ReactNode;
}

/**
 * Box is a basic layout component that renders a div by default.
 * It accepts all standard div props and can be rendered as a different element via the `as` prop.
 */
export const Box: React.FC<BoxProps> = ({
  as: Component = "div",
  children,
  ...rest
}) => {
  return (
    <Component className="naytak-box" {...rest}>
      {children}
    </Component>
  );
};

export default Box;
