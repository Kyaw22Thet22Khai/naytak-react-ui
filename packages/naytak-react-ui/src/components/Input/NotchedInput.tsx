import { forwardRef, InputHTMLAttributes } from "react";

export type NotchedSize = "sm" | "md" | "lg";

export interface NotchedInputProps extends Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "size"
> {
  label: string;
  size?: NotchedSize;
  className?: string;
}

export const NotchedInput = forwardRef<HTMLInputElement, NotchedInputProps>(
  function NotchedInput({ label, size = "md", className, ...props }, ref) {
    const fieldsetCls = [
      "notched-fieldset",
      size ? `notched-${size}` : null,
      className,
    ]
      .filter(Boolean)
      .join(" ");

    return (
      <div className="notched-field">
        <fieldset className={fieldsetCls}>
          <legend className="notched-label">
            <span className="notched-label-text">{label}</span>
          </legend>
          <input ref={ref} className="input" {...props} />
        </fieldset>
      </div>
    );
  }
);
