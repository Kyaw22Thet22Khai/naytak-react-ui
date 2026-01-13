import { forwardRef, InputHTMLAttributes, ReactNode, useId } from "react";

export type RadioSize = "sm" | "md" | "lg";

export interface RadioProps extends Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "type" | "size"
> {
  label?: ReactNode;
  inline?: boolean;
  size?: RadioSize;
  containerClassName?: string;
  labelClassName?: string;
}

export const Radio = forwardRef<HTMLInputElement, RadioProps>(function Radio(
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
  const inputId = id ?? `radio-${autoId}`;

  const fieldClasses = [
    "field",
    inline ? "field-inline" : null,
    containerClassName,
  ]
    .filter(Boolean)
    .join(" ");

  const inputClasses = ["radio", size ? `radio-${size}` : null, className]
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
            type="radio"
            className={inputClasses}
            {...props}
          />
          {label ? <span className="choice-label">{label}</span> : null}
        </label>
      </div>
    </div>
  );
});
