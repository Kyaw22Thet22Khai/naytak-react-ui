import { forwardRef, useId, InputHTMLAttributes, ReactNode } from "react";

type NativeInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, "size">;

export type InputSize = "sm" | "md" | "lg";

export interface InputProps extends NativeInputProps {
  label?: string;
  inline?: boolean;
  iconStart?: ReactNode;
  iconEnd?: ReactNode;
  size?: InputSize;
  containerClassName?: string;
  labelClassName?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  {
    id,
    label,
    inline = false,
    iconStart,
    iconEnd,
    size = "md",
    containerClassName,
    labelClassName,
    className,
    ...props
  },
  ref
) {
  const autoId = useId();
  const inputId = id ?? `input-${autoId}`;

  const fieldClasses = [
    "field",
    inline ? "field-inline" : null,
    containerClassName,
  ]
    .filter(Boolean)
    .join(" ");

  const inputClasses = [
    "form-control",
    size ? `input-${size}` : null,
    iconStart ? "input-icon-start" : null,
    iconEnd ? "input-icon-end" : null,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={fieldClasses}>
      {label ? (
        <label
          className={["field-label", labelClassName].filter(Boolean).join(" ")}
          htmlFor={inputId}>
          {label}
        </label>
      ) : null}
      {iconStart ? (
        <span className="input-icon input-icon-start" aria-hidden="true">
          {iconStart}
        </span>
      ) : null}
      {/* Input group (addonBefore/addonAfter) removed */}
      <input id={inputId} ref={ref} className={inputClasses} {...props} />
      {iconEnd ? (
        <span className="input-icon input-icon-end" aria-hidden="true">
          {iconEnd}
        </span>
      ) : null}
    </div>
  );
});
