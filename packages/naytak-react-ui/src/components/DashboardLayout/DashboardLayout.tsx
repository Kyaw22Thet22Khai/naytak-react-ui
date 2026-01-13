import { ReactNode } from "react";
import { Sidebar } from "../Sidebar/Sidebar";
import { Navbar } from "../Navbar/Navbar";
import { Content } from "../Content/Content";
import { Footer } from "../Footer/Footer";
import { Breadcrumb } from "../Breadcrumb/Breadcrumb";
import type { BreadcrumbItem, BreadcrumbSize } from "../Breadcrumb/Breadcrumb";

export interface DashboardLayoutProps {
  title?: string;
  sidebar?: ReactNode;
  navbarActions?: ReactNode;
  breadcrumb?: ReactNode;
  breadcrumbItems?: BreadcrumbItem[];
  breadcrumbSeparator?: string;
  breadcrumbAriaLabel?: string;
  breadcrumbSize?: BreadcrumbSize;
  children?: ReactNode;
  footer?: ReactNode;
  collapsed?: boolean;
  className?: string;
}

export function DashboardLayout({
  title = "Admin Dashboard",
  sidebar,
  navbarActions,
  breadcrumb,
  breadcrumbItems,
  breadcrumbSeparator = "/",
  breadcrumbAriaLabel = "Breadcrumb",
  breadcrumbSize = "sm",
  children,
  footer,
  collapsed = false,
  className,
}: DashboardLayoutProps) {
  const classes = ["ui-dashboard", className].filter(Boolean).join(" ");
  return (
    <div className={classes}>
      <Sidebar collapsed={collapsed}>{sidebar}</Sidebar>
      <div className="dashboard-main">
        <Navbar title={title}>{navbarActions}</Navbar>
        {breadcrumbItems && breadcrumbItems.length > 0 ? (
          <div className="dashboard-breadcrumb">
            <Breadcrumb
              items={breadcrumbItems}
              separator={breadcrumbSeparator}
              ariaLabel={breadcrumbAriaLabel}
              size={breadcrumbSize}
            />
          </div>
        ) : breadcrumb ? (
          <div className="dashboard-breadcrumb">{breadcrumb}</div>
        ) : null}
        <Content>{children}</Content>
        <Footer>{footer}</Footer>
      </div>
    </div>
  );
}
