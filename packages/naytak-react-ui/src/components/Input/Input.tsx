import { forwardRef, useId, InputHTMLAttributes, ReactNode } from "react";

type NativeInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, "size">;

export type InputSize = "sm" | "md" | "lg";

export interface InputProps extends NativeInputProps {
  label?: string;
  inline?: boolean;
  addonBefore?: ReactNode;
  addonAfter?: ReactNode;
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
    addonBefore,
    addonAfter,
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
    addonBefore || addonAfter ? "field-group" : null,
    containerClassName,
  ]
    .filter(Boolean)
    .join(" ");

  const inputClasses = [
    "input",
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
      <div className="field-control">
        {iconStart ? (
          <span className="input-icon input-icon-start" aria-hidden="true">
            {iconStart}
          </span>
        ) : null}
        {addonBefore ? (
          <span className="addon addon-prefix">{addonBefore}</span>
        ) : null}
        <input id={inputId} ref={ref} className={inputClasses} {...props} />
        {addonAfter ? (
          <span className="addon addon-suffix">{addonAfter}</span>
        ) : null}
        {iconEnd ? (
          <span className="input-icon input-icon-end" aria-hidden="true">
            {iconEnd}
          </span>
        ) : null}
      </div>
    </div>
  );
});
