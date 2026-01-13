import { forwardRef, ReactNode, SelectHTMLAttributes } from "react";

export type SelectSize = "sm" | "md" | "lg";

export interface SelectOption {
  label: ReactNode;
  value: string;
  disabled?: boolean;
}

export interface SelectProps extends Omit<
  SelectHTMLAttributes<HTMLSelectElement>,
  "size"
> {
  label?: string;
  inline?: boolean;
  size?: SelectSize;
  options?: SelectOption[];
  containerClassName?: string;
  labelClassName?: string;
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  function Select(
    {
      label,
      inline = false,
      size = "md",
      options,
      containerClassName,
      labelClassName,
      className,
      children,
      ...props
    },
    ref
  ) {
    const fieldClasses = [
      "field",
      inline ? "field-inline" : null,
      containerClassName,
    ]
      .filter(Boolean)
      .join(" ");

    const selectClasses = ["select", size ? `select-${size}` : null, className]
      .filter(Boolean)
      .join(" ");

    return (
      <div className={fieldClasses}>
        {label ? (
          <label
            className={["field-label", labelClassName]
              .filter(Boolean)
              .join(" ")}>
            {label}
          </label>
        ) : null}
        <div className="field-control">
          <select ref={ref} className={selectClasses} {...props}>
            {options
              ? options.map((opt) => (
                  <option
                    key={opt.value}
                    value={opt.value}
                    disabled={opt.disabled}>
                    {opt.label}
                  </option>
                ))
              : children}
          </select>
        </div>
      </div>
    );
  }
);
