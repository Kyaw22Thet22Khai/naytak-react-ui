import { forwardRef, InputHTMLAttributes, ReactNode, useId } from "react";

export type SwitchSize = "sm" | "md" | "lg";

export interface SwitchProps extends Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "type" | "size"
> {
  label?: ReactNode;
  size?: SwitchSize;
  containerClassName?: string;
  labelClassName?: string;
}

export const Switch = forwardRef<HTMLInputElement, SwitchProps>(function Switch(
  {
    label,
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
  const inputId = id ?? `ui-switch-${autoId}`;

  const fieldClasses = ["ui-field", containerClassName]
    .filter(Boolean)
    .join(" ");
  const wrapperClasses = [
    "ui-switch",
    size ? `ui-switch--${size}` : null,
    labelClassName,
  ]
    .filter(Boolean)
    .join(" ");

  const inputClasses = ["ui-switch__input", className]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={fieldClasses}>
      <div className="ui-field__control">
        <label className={wrapperClasses} htmlFor={inputId}>
          <input
            ref={ref}
            id={inputId}
            type="checkbox"
            role="switch"
            className={inputClasses}
            {...props}
          />
          <span className="ui-switch__track" aria-hidden="true" />
          {label ? <span className="ui-switch__label">{label}</span> : null}
        </label>
      </div>
    </div>
  );
});
