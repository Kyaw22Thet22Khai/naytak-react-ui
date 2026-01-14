import { ReactNode } from "react";
import { Sidebar } from "../Sidebar/Sidebar";
import { Navbar } from "../Navbar/Navbar";
import { Footer } from "../Footer/Footer";
import { Content } from "../Content/Content";
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
  breadcrumbSeparator = ">>",
  breadcrumbAriaLabel = "Breadcrumb",
  breadcrumbSize = "sm",
  children,
  footer,
  collapsed = false,
  className,
}: DashboardLayoutProps) {
  const classes = ["dashboard", className].filter(Boolean).join(" ");
  return (
    <div className={classes}>
      <Sidebar collapsed={collapsed}>{sidebar}</Sidebar>
      <div className="dashboard-main">
        <div className="dashboard-navbar">
          <Navbar title={title}>{navbarActions}</Navbar>
        </div>
        {breadcrumbItems && breadcrumbItems.length > 0 ? (
          <Breadcrumb
            items={breadcrumbItems}
            separator={breadcrumbSeparator}
            ariaLabel={breadcrumbAriaLabel}
            size={breadcrumbSize}
          />
        ) : breadcrumb ? (
          <div className="dashboard-breadcrumb">{breadcrumb}</div>
        ) : null}
        <Content>{children}</Content>
        <div className="dashboard-footer">
          <Footer>{footer}</Footer>
        </div>
      </div>
    </div>
  );
}
