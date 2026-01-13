import React from "react";
import "./List.css";

export interface ListProps {
  children: React.ReactNode;
  className?: string;
}

export const List: React.FC<ListProps> = ({ children, className }) => (
  <ul className={className ? `list ${className}` : "list"}>{children}</ul>
);
