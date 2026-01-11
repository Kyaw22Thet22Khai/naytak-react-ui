import type { ReactNode } from "react";
import { Sidebar, SidebarItem } from "../components/Sidebar/Sidebar";

export default {
  title: "Components/SidebarItem",
};

// Interactive playground
type SidebarItemPlaygroundProps = {
  collapsed?: boolean;
  label?: string;
  showIcon?: boolean;
  icon?: string;
  active?: boolean;
  href?: string;
};

export const Playground = (props: SidebarItemPlaygroundProps): ReactNode => (
  <div className="h-64">
    <Sidebar collapsed={props.collapsed}>
      <SidebarItem
        label={props.label ?? "Home"}
        icon={props.showIcon ? <span>{props.icon ?? "🏠"}</span> : undefined}
        active={props.active}
        href={props.href || undefined}
        onClick={
          props.href ? undefined : () => console.log("SidebarItem clicked")
        }
      />
    </Sidebar>
  </div>
);

Playground.args = {
  collapsed: false,
  label: "Home",
  showIcon: true,
  icon: "🏠",
  active: false,
  href: "",
} as SidebarItemPlaygroundProps;

Playground.controls = {
  collapsed: { type: "boolean" },
  label: { type: "text" },
  showIcon: { type: "boolean" },
  icon: { type: "text" },
  active: { type: "boolean" },
  href: { type: "text" },
};
