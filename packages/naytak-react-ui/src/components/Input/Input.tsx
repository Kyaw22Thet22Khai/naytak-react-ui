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
  const inputId = id ?? `ui-input-${autoId}`;

  const fieldClasses = [
    "ui-field",
    inline ? "ui-field--inline" : null,
    addonBefore || addonAfter ? "ui-field--group" : null,
    containerClassName,
  ]
    .filter(Boolean)
    .join(" ");

  const inputClasses = [
    "ui-input",
    size ? `ui-input--${size}` : null,
    iconStart ? "ui-input--icon-start" : null,
    iconEnd ? "ui-input--icon-end" : null,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={fieldClasses}>
      {label ? (
        <label
          className={["ui-field__label", labelClassName]
            .filter(Boolean)
            .join(" ")}
          htmlFor={inputId}>
          {label}
        </label>
      ) : null}
      <div className="ui-field__control">
        {iconStart ? (
          <span
            className="ui-input__icon ui-input__icon--start"
            aria-hidden="true">
            {iconStart}
          </span>
        ) : null}
        {addonBefore ? (
          <span className="ui-addon ui-addon--prefix">{addonBefore}</span>
        ) : null}
        <input id={inputId} ref={ref} className={inputClasses} {...props} />
        {iconEnd ? (
          <span
            className="ui-input__icon ui-input__icon--end"
            aria-hidden="true">
            {iconEnd}
          </span>
        ) : null}
        {addonAfter ? (
          <span className="ui-addon ui-addon--suffix">{addonAfter}</span>
        ) : null}
      </div>
    </div>
  );
});
