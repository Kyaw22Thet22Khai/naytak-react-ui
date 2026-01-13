import {
  useState,
  ReactNode,
  Children,
  isValidElement,
  cloneElement,
  KeyboardEvent,
  ReactElement,
} from "react";

/* ------------------------------------------------------------------ */
/* Types */
/* ------------------------------------------------------------------ */

export interface TabItem {
  label: string;
  value: string;
  disabled?: boolean;
}

export interface TabsProps {
  items: TabItem[];
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
  children?: ReactNode;
  className?: string;
}

export interface TabPanelProps {
  value: string;
  children: ReactNode;
  active?: boolean;
  className?: string;
}

/* ------------------------------------------------------------------ */
/* TabPanel Component */
/* ------------------------------------------------------------------ */

export function TabPanel({
  value,
  children,
  active = false,
  className,
}: TabPanelProps) {
  return (
    <div
      role="tabpanel"
      id={`tabpanel-${value}`}
      aria-labelledby={`tab-${value}`}
      hidden={!active}
      className={["tab-panel", className].filter(Boolean).join(" ")}>
      {children}
    </div>
  );
}

TabPanel.displayName = "TabPanel";

/* ------------------------------------------------------------------ */
/* Type Guard */
/* ------------------------------------------------------------------ */

function isTabPanelElement(
  element: ReactNode
): element is ReactElement<TabPanelProps> {
  return isValidElement(element) && element.type === TabPanel;
}

/* ------------------------------------------------------------------ */
/* Tabs Component */
/* ------------------------------------------------------------------ */

export function Tabs({
  items,
  value,
  defaultValue,
  onChange,
  children,
  className,
}: TabsProps) {
  const isControlled = value !== undefined;

  const [internalValue, setInternalValue] = useState<string>(
    defaultValue ?? items[0]?.value ?? ""
  );

  const activeValue = isControlled ? value! : internalValue;

  const setValue = (val: string, disabled?: boolean) => {
    if (disabled) return;
    if (!isControlled) setInternalValue(val);
    onChange?.(val);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    const currentIndex = items.findIndex((item) => item.value === activeValue);

    if (currentIndex === -1) return;

    const move = (step: number) => {
      let next = currentIndex;

      do {
        next = (next + step + items.length) % items.length;
      } while (items[next].disabled && next !== currentIndex);

      setValue(items[next].value, items[next].disabled);
    };

    switch (e.key) {
      case "ArrowRight":
      case "ArrowDown":
        e.preventDefault();
        move(1);
        break;

      case "ArrowLeft":
      case "ArrowUp":
        e.preventDefault();
        move(-1);
        break;
    }
  };

  return (
    <div className={["ui-tabs", className].filter(Boolean).join(" ")}>
      {/* Tab List */}
      <div
        role="tablist"
        aria-orientation="horizontal"
        className="ui-tab-list"
        tabIndex={0}
        onKeyDown={handleKeyDown}>
        {items.map((tab) => {
          const isActive = tab.value === activeValue;

          return (
            <button
              key={tab.value}
              id={`tab-${tab.value}`}
              role="tab"
              type="button"
              disabled={tab.disabled}
              aria-selected={isActive}
              aria-controls={`tabpanel-${tab.value}`}
              tabIndex={isActive ? 0 : -1}
              className={[
                "ui-tab",
                isActive && "ui-tab--active",
                tab.disabled && "ui-tab--disabled",
              ]
                .filter(Boolean)
                .join(" ")}
              onClick={() => setValue(tab.value, tab.disabled)}>
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* Tab Panels */}
      {Children.map(children, (child) => {
        if (!isTabPanelElement(child)) return null;

        return child.props.value === activeValue
          ? cloneElement(child, { active: true })
          : null;
      })}
    </div>
  );
}
