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
      size ? `ui-input-${size}` : null,
      clearable && hasValue ? "ui-input-icon-end" : null,
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

    const [showDropdown, setShowDropdown] = useState(false);
    const [filteredOptions, setFilteredOptions] = useState(options);

    const handleInputDropdown: React.FormEventHandler<HTMLInputElement> = (
      e
    ) => {
      handleInput(e);
      const val = e.currentTarget.value.toLowerCase();
      setFilteredOptions(
        options.filter(
          (o) =>
            o.value.toLowerCase().includes(val) ||
            (typeof o.label === "string" && o.label.toLowerCase().includes(val))
        )
      );
      setShowDropdown(true);
    };

    const handleOptionClick = (value: string) => {
      if (!innerRef.current) return;
      innerRef.current.value = value;
      setHasValue(true);
      setShowDropdown(false);
      // Fire change event
      const ev = new Event("input", { bubbles: true });
      innerRef.current.dispatchEvent(ev);
      onChange?.({
        ...({} as React.ChangeEvent<HTMLInputElement>),
        target: innerRef.current,
        currentTarget: innerRef.current,
      });
    };

    const handleBlur = (
      e: React.FocusEvent<HTMLInputElement | HTMLDivElement>
    ) => {
      setTimeout(() => setShowDropdown(false), 120);
      props.onBlur?.(e as any);
    };

    return (
      <div className={fieldClasses} style={{ position: "relative" }}>
        {label ? (
          <label
            className={["ui-field-label", labelClassName]
              .filter(Boolean)
              .join(" ")}>
            {label}
          </label>
        ) : null}
        <div className="ui-field-control">
          <input
            ref={innerRef}
            id={inputId}
            className={inputClasses}
            onInput={handleInputDropdown}
            onChange={handleChange}
            onBlur={handleBlur}
            autoComplete="off"
            {...props}
          />
          {clearable && (
            <button
              type="button"
              aria-label="Clear"
              className="ui-input-action ui-input-action-end"
              onClick={handleClear}
              style={{ visibility: hasValue ? "visible" : "hidden" }}>
              ×
            </button>
          )}
          {showDropdown && filteredOptions.length > 0 && (
            <div
              className="ui-searchselect-dropdown"
              tabIndex={-1}
              onMouseDown={(e) => e.preventDefault()}>
              {filteredOptions.map((o) => (
                <button
                  type="button"
                  key={o.value}
                  className="ui-searchselect-option"
                  onClick={() => handleOptionClick(o.value)}
                  aria-selected={false}>
                  {o.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    );
  }
);
