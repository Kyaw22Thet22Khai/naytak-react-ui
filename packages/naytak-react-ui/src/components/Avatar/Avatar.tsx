import React from "react";
import "./Avatar.css";

export type AvatarSize = "sm" | "md" | "lg";

export type AvatarVariant = "square" | "rounded";

export type AvatarColor =
  | "primary"
  | "secondary"
  | "success"
  | "warning"
  | "danger"
  | "dark"
  | "light";

export interface AvatarProps {
  size?: AvatarSize;
  text?: string; // Letters or words to show
  image?: string; // Image URL
  alt?: string; // Alt text for image
  variant?: AvatarVariant; // Shape of avatar
  color?: AvatarColor; // Background color for text avatar
}

const sizeMap = {
  sm: 32,
  md: 48,
  lg: 72,
};

const getInitials = (str?: string) => {
  if (!str) return "";
  const words = str.trim().split(/\s+/);
  if (words.length === 1) {
    return words[0].slice(0, 2).toUpperCase();
  }
  return words
    .map((w) => w[0])
    .join("")
    .toUpperCase();
};

const Avatar: React.FC<AvatarProps> = ({
  size = "md",
  text,
  image,
  alt,
  variant = "rounded",
  color = "secondary",
}) => {
  const dimension = sizeMap[size] || sizeMap.md;
  const borderRadius = variant === "square" ? "8px" : "50%";
  const colorClass = image ? "" : `avatar--${color}`;
  return (
    <div
      className={`avatar avatar--${size} avatar--${variant} ${colorClass}`}
      style={{ width: dimension, height: dimension, borderRadius }}>
      {image ? (
        <img
          src={image}
          alt={alt || text || "avatar"}
          className="avatar-img"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            borderRadius,
          }}
        />
      ) : (
        <span className="avatar-text">{getInitials(text)}</span>
      )}
    </div>
  );
};

export default Avatar;
