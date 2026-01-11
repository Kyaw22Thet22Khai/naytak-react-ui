import {
  forwardRef,
  InputHTMLAttributes,
  ReactNode,
  useId,
  useRef,
  useState,
  useImperativeHandle,
} from "react";

export interface SearchSelectOption {
  label: ReactNode;
  value: string;
}

export interface SearchSelectProps extends Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "size"
> {
  label?: string;
  options: SearchSelectOption[];
  size?: "sm" | "md" | "lg";
  containerClassName?: string;
  labelClassName?: string;
  clearable?: boolean;
  onClear?: () => void;
}

// Lightweight searchable select using native datalist for broad support
export const SearchSelect = forwardRef<HTMLInputElement, SearchSelectProps>(
  function SearchSelect(
    {
      label,
      options,
      size = "md",
      containerClassName,
      labelClassName,
      className,
      id,
      list,
      clearable = true,
      onClear,
      onInput,
      onChange,
      ...props
    },
    ref
  ) {
    const autoId = useId();
    const inputId = id ?? `ui-searchselect-${autoId}`;
    const listId = list ?? `ui-searchselect-list-${autoId}`;
    const innerRef = useRef<HTMLInputElement | null>(null);
    useImperativeHandle(ref, () => innerRef.current as HTMLInputElement, []);

    const [hasValue, setHasValue] = useState(() => {
      const initial =
        (props as any)?.defaultValue ?? (props as any)?.value ?? "";
      return String(initial ?? "").length > 0;
    });

    const fieldClasses = ["ui-field", containerClassName]
      .filter(Boolean)
      .join(" ");
    const inputClasses = [
      "ui-input",
      size ? `ui-input--${size}` : null,
      clearable && hasValue ? "ui-input--icon-end" : null,
      className,
    ]
      .filter(Boolean)
      .join(" ");

    const handleInput: React.FormEventHandler<HTMLInputElement> = (e) => {
      setHasValue((e.currentTarget.value ?? "").length > 0);
      onInput?.(e);
    };

    const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
      setHasValue((e.currentTarget.value ?? "").length > 0);
      onChange?.(e);
    };

    const handleClear = () => {
      if (!innerRef.current) return;
      innerRef.current.value = "";
      setHasValue(false);
      // Fire an input event so external onChange listeners update
      const ev = new Event("input", { bubbles: true });
      innerRef.current.dispatchEvent(ev);
      onClear?.();
      innerRef.current.focus();
    };

    return (
      <div className={fieldClasses}>
        {label ? (
          <label
            className={["ui-field__label", labelClassName]
              .filter(Boolean)
              .join(" ")}>
            {label}
          </label>
        ) : null}
        <div className="ui-field__control">
          <input
            ref={innerRef}
            id={inputId}
            list={listId}
            className={inputClasses}
            onInput={handleInput}
            onChange={handleChange}
            {...props}
          />
          {clearable && (
            <button
              type="button"
              aria-label="Clear"
              className="ui-input__action ui-input__action--end"
              onClick={handleClear}
              style={{ visibility: hasValue ? "visible" : "hidden" }}>
              ×
            </button>
          )}
          <datalist id={listId}>
            {options.map((o) => (
              <option key={o.value} value={o.value}>
                {typeof o.label === "string" ? o.label : undefined}
              </option>
            ))}
          </datalist>
        </div>
      </div>
    );
  }
);
