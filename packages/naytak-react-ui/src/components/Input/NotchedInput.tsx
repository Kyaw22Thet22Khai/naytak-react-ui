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
      "ui-notched__fieldset",
      size ? `ui-notched--${size}` : null,
      className,
    ]
      .filter(Boolean)
      .join(" ");

    return (
      <div className="ui-notched-field">
        <fieldset className={fieldsetCls}>
          <legend className="ui-notched__label">
            <span className="ui-notched__label-text">{label}</span>
          </legend>
          <input ref={ref} className="ui-input" {...props} />
        </fieldset>
      </div>
    );
  }
);
