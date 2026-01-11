import React from "react";
import "./Progress.css";

export type ProgressColor =
  | "primary"
  | "secondary"
  | "success"
  | "danger"
  | "warning";
export type ProgressType = "linear" | "circular";

export interface ProgressProps {
  value: number; // 0-100
  type?: ProgressType;
  color?: ProgressColor;
  size?: number; // for circular
}

const Progress: React.FC<ProgressProps> = ({
  value,
  type = "linear",
  color = "primary",
  size = 48,
}) => {
  if (type === "circular") {
    const radius = (size - 8) / 2;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (value / 100) * circumference;
    return (
      <div
        className={`progress-circular progress--${color}`}
        style={{ width: size, height: size }}>
        <svg width={size} height={size}>
          <circle
            className="progress-circular-bg"
            cx={size / 2}
            cy={size / 2}
            r={radius}
            strokeWidth={8}
            fill="none"
          />
          <circle
            className="progress-circular-bar"
            cx={size / 2}
            cy={size / 2}
            r={radius}
            strokeWidth={8}
            fill="none"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
          />
        </svg>
        <span className="progress-circular-label">{Math.round(value)}%</span>
      </div>
    );
  }
  // Linear
  return (
    <div className={`progress-linear progress--${color}`}>
      <div className="progress-linear-bar" style={{ width: `${value}%` }} />
      <span className="progress-linear-label">{Math.round(value)}%</span>
    </div>
  );
};

export default Progress;
