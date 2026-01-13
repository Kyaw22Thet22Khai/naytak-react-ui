import React from "react";
import "./List.css";

export interface ListItemProps {
  children: React.ReactNode;
  className?: string;
}

export const ListItem: React.FC<ListItemProps> = ({ children, className }) => (
  <li className={className ? `ntk-list-item ${className}` : "ntk-list-item"}>
    {children}
  </li>
);
