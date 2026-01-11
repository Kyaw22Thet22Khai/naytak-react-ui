import React, { useEffect } from "react";
import "./Snackbar.css";

export type SnackbarColor =
  | "primary"
  | "secondary"
  | "success"
  | "danger"
  | "warning";

export type SnackbarPosition =
  | "top-right"
  | "top-center"
  | "top-left"
  | "bottom-right"
  | "bottom-center"
  | "bottom-left";

export interface SnackbarProps {
  message: string;
  open: boolean;
  autoHideDuration?: number;
  onClose?: () => void;
  color?: SnackbarColor;
  position?: SnackbarPosition;
}

const Snackbar: React.FC<SnackbarProps> = ({
  message,
  open,
  autoHideDuration = 3000,
  onClose,
  color = "primary",
  position = "bottom-center",
}) => {
  useEffect(() => {
    if (open && autoHideDuration > 0) {
      const timer = setTimeout(() => {
        onClose && onClose();
      }, autoHideDuration);
      return () => clearTimeout(timer);
    }
  }, [open, autoHideDuration, onClose]);

  if (!open) return null;

  return (
    <div className={`snackbar snackbar--${color} snackbar--${position}`}>
      {message}
      <button className="snackbar-close" onClick={onClose} aria-label="Close">
        ×
      </button>
    </div>
  );
};

export default Snackbar;
