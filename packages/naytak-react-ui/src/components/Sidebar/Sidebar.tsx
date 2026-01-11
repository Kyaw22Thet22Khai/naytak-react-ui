import { createContext, useContext, ReactNode } from "react";

//Component
import { Button } from "@naytak/react-ui";

interface SidebarContextValue {
  collapsed: boolean;
}

const SidebarContext = createContext<SidebarContextValue>({ collapsed: false });

export interface SidebarProps {
  children: ReactNode;
  className?: string;
  collapsed?: boolean;
  title?: string;
}

const base = "ui-sidebar";
const widths = {
  expanded: "ui-sidebar--expanded",
  collapsed: "ui-sidebar--collapsed",
};

export function Sidebar({
  children,
  className,
  collapsed = false,
  title = "Sidebar",
}: SidebarProps) {
  const classes = [
    base,
    collapsed ? widths.collapsed : widths.expanded,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <SidebarContext.Provider value={{ collapsed }}>
      <nav className={classes} aria-label={title}>
        <div className="ui-sidebar__content">{children}</div>
      </nav>
    </SidebarContext.Provider>
  );
}

export interface SidebarItemProps {
  label: string;
  icon?: ReactNode;
  href?: string;
  active?: boolean;
  onClick?: () => void;
  className?: string;
}

const itemBase = "ui-sidebar-item";
const itemActive = "ui-sidebar-item--active";
const iconCls = "ui-sidebar-item__icon";
const labelCls = "ui-sidebar-item__label";

export function SidebarItem({
  label,
  icon,
  href,
  active,
  onClick,
  className,
}: SidebarItemProps) {
  const { collapsed } = useContext(SidebarContext);
  const classes = [itemBase, active ? itemActive : null, className]
    .filter(Boolean)
    .join(" ");

  const content = (
    <>
      {icon ? <span className={iconCls}>{icon}</span> : null}
      <span className={collapsed ? "sr-only" : labelCls}>{label}</span>
    </>
  );

  if (href) {
    return (
      <a href={href} className={classes} aria-label={label}>
        {content}
      </a>
    );
  }

  return (
    <Button
      type="button"
      radius="lg"
      variant="secondary"
      className={classes}
      onClick={onClick}
      aria-label={label}>
      {content}
    </Button>
  );
}
