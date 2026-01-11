import type { ReactNode } from "react";
import { DashboardLayout } from "../components/DashboardLayout/DashboardLayout";
import { SidebarItem } from "../components/Sidebar/Sidebar";
import { Button } from "../components/Button/Button";

export default {
  title: "Components/DashboardLayout",
};

export const Basic = (): ReactNode => (
  <DashboardLayout
    title="Admin Dashboard"
    sidebar={
      <>
        <SidebarItem label="Home" active />
        <SidebarItem label="Settings" />
      </>
    }
    navbarActions={
      <>
        <Button variant="primary">New</Button>
        <Button variant="secondary">Settings</Button>
      </>
    }
    footer={<span>© 2026 Naytak</span>}>
    <h1>Welcome</h1>
    <p>Use the sidebar to navigate.</p>
  </DashboardLayout>
);

// Interactive playground
type DashboardPlaygroundProps = {
  title?: string;
  collapsed?: boolean;
  footerText?: string;
  contentTitle?: string;
  contentBody?: string;
};

export const Playground = (props: DashboardPlaygroundProps): ReactNode => (
  <DashboardLayout
    title={props.title}
    collapsed={props.collapsed}
    sidebar={
      <>
        <SidebarItem label="Home" active />
        <SidebarItem label="Settings" />
      </>
    }
    navbarActions={
      <>
        <Button variant="primary">New</Button>
        <Button variant="secondary">Settings</Button>
      </>
    }
    footer={<span>{props.footerText}</span>}>
    <h1>{props.contentTitle}</h1>
    <p>{props.contentBody}</p>
  </DashboardLayout>
);

Playground.args = {
  title: "Admin Dashboard",
  collapsed: false,
  footerText: "© 2026 Naytak",
  contentTitle: "Welcome",
  contentBody: "Use the sidebar to navigate.",
} as DashboardPlaygroundProps;

Playground.controls = {
  title: { type: "text" },
  collapsed: { type: "boolean" },
  footerText: { type: "text" },
  contentTitle: { type: "text" },
  contentBody: { type: "text" },
};
