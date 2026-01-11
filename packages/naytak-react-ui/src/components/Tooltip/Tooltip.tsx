import React, { useState, ReactNode } from "react";
import "./Tooltip.css";

export interface TooltipProps {
  content: ReactNode;
  children: ReactNode;
  position?: "top" | "right" | "bottom" | "left";
}

const Tooltip: React.FC<TooltipProps> = ({
  content,
  children,
  position = "top",
}) => {
  const [visible, setVisible] = useState(false);

  return (
    <div
      className="tooltip-wrapper"
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
      onFocus={() => setVisible(true)}
      onBlur={() => setVisible(false)}
      tabIndex={0}>
      {children}
      {visible && (
        <div className={`tooltip tooltip--${position}`}>{content}</div>
      )}
    </div>
  );
};

export default Tooltip;
