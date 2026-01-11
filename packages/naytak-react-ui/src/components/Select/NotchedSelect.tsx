import { forwardRef, SelectHTMLAttributes } from "react";

export type NotchedSelectSize = "sm" | "md" | "lg";

export interface NotchedSelectProps extends Omit<
  SelectHTMLAttributes<HTMLSelectElement>,
  "size"
> {
  label: string;
  size?: NotchedSelectSize;
}

export const NotchedSelect = forwardRef<HTMLSelectElement, NotchedSelectProps>(
  function NotchedSelect(
    { label, size = "md", className, children, ...props },
    ref
  ) {
    const fieldsetCls = [
      "ui-notched__fieldset",
      size ? `ui-notched--${size}` : null,
    ]
      .filter(Boolean)
      .join(" ");

    const selectCls = [
      "ui-select",
      size ? `ui-select--${size}` : null,
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
          <select ref={ref} className={selectCls} {...props}>
            {children}
          </select>
        </fieldset>
      </div>
    );
  }
);
