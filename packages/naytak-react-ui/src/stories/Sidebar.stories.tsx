import { useState } from "react";
import type { ReactNode } from "react";
import { Sidebar, SidebarItem } from "../components/Sidebar/Sidebar";

export default {
  title: "Components/Sidebar",
};

export const Expanded = (): ReactNode => (
  <div className="h-64">
    <Sidebar collapsed={false}>
      <SidebarItem label="Home" icon={<span>🏠</span>} active />
      <SidebarItem label="Settings" icon={<span>⚙️</span>} />
      <SidebarItem label="Profile" icon={<span>👤</span>} />
    </Sidebar>
  </div>
);

export const Collapsed = (): ReactNode => (
  <div className="h-64">
    <Sidebar collapsed>
      <SidebarItem label="Home" icon={<span>🏠</span>} active />
      <SidebarItem label="Settings" icon={<span>⚙️</span>} />
      <SidebarItem label="Profile" icon={<span>👤</span>} />
    </Sidebar>
  </div>
);

export const Toggleable = (): ReactNode => {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <div className="flex gap-4">
      <div className="h-64">
        <Sidebar collapsed={collapsed}>
          <SidebarItem label="Home" icon={<span>🏠</span>} active />
          <SidebarItem label="Settings" icon={<span>⚙️</span>} />
          <SidebarItem label="Profile" icon={<span>👤</span>} />
        </Sidebar>
      </div>
      <div className="flex flex-col gap-2">
        <button
          type="button"
          className="px-3 py-2 rounded-md border"
          onClick={() => setCollapsed((c) => !c)}>
          Toggle Collapsed
        </button>
      </div>
    </div>
  );
};

// Interactive playground
type SidebarPlaygroundProps = {
  collapsed?: boolean;
  title?: string;
};

export const Playground = (props: SidebarPlaygroundProps): ReactNode => (
  <div className="h-64">
    <Sidebar collapsed={props.collapsed} title={props.title}>
      <SidebarItem label="Home" icon={<span>🏠</span>} active />
      <SidebarItem label="Settings" icon={<span>⚙️</span>} />
      <SidebarItem label="Profile" icon={<span>👤</span>} />
    </Sidebar>
  </div>
);

Playground.args = {
  collapsed: false,
  title: "Sidebar",
} as SidebarPlaygroundProps;

Playground.controls = {
  collapsed: { type: "boolean" },
  title: { type: "text" },
};
