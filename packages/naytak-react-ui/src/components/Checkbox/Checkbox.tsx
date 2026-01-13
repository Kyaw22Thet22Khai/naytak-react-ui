import { forwardRef, InputHTMLAttributes, ReactNode, useId } from "react";

export type CheckboxSize = "sm" | "md" | "lg";

export interface CheckboxProps extends Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "type" | "size"
> {
  label?: ReactNode;
  inline?: boolean;
  size?: CheckboxSize;
  containerClassName?: string;
  labelClassName?: string;
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  function Checkbox(
    {
      label,
      inline = false,
      size = "md",
      containerClassName,
      labelClassName,
      className,
      id,
      ...props
    },
    ref
  ) {
    const autoId = useId();
    const inputId = id ?? `checkbox-${autoId}`;

    const fieldClasses = [
      "field",
      inline ? "field-inline" : null,
      containerClassName,
    ]
      .filter(Boolean)
      .join(" ");

    const inputClasses = [
      "checkbox",
      size ? `checkbox-${size}` : null,
      className,
    ]
      .filter(Boolean)
      .join(" ");

    return (
      <div className={fieldClasses}>
        <div className="field-control">
          <label
            className={["choice", labelClassName].filter(Boolean).join(" ")}
            htmlFor={inputId}>
            <input
              ref={ref}
              id={inputId}
              type="checkbox"
              className={inputClasses}
              {...props}
            />
            {label ? <span className="ui-choice__label">{label}</span> : null}
          </label>
        </div>
      </div>
    );
  }
);
