import React from "react";

// Styles
import "./Avatar.css";

// Components
import Avatar, { AvatarProps } from "./Avatar";

export interface AvatarGroupProps {
  children: React.ReactNode;
  max?: number; // max avatars to show, rest as "+N"
  spacing?: number; // px overlap
}

const AvatarGroup: React.FC<AvatarGroupProps> = ({
  children,
  max = 5,
  spacing = -12,
}) => {
  const childArray = React.Children.toArray(children).filter(
    React.isValidElement
  ) as React.ReactElement[];
  const visibleAvatars = childArray.slice(0, max);
  const extraCount = childArray.length - max;
  return (
    <div
      className="avatar-group"
      style={{ display: "flex", alignItems: "center" }}>
      {visibleAvatars.map((child, i) => (
        <div
          key={i}
          style={{
            marginLeft: i === 0 ? 0 : spacing,
            zIndex: childArray.length - i,
          }}>
          {child}
        </div>
      ))}
      {extraCount > 0 && (
        <div
          className="avatar avatar--md avatar--rounded avatar-group-extra"
          style={{ marginLeft: spacing, zIndex: 0 }}>
          +{extraCount}
        </div>
      )}
    </div>
  );
};

export default AvatarGroup;
