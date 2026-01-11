import type { ReactNode } from "react";
import { Breadcrumb } from "../components/Breadcrumb/Breadcrumb";

export default {
  title: "Components/Breadcrumb",
};

export const Basic = (): ReactNode => (
  <Breadcrumb
    items={[
      { label: "Home", href: "/" },
      { label: "Library", href: "/library" },
      { label: "Data" },
    ]}
  />
);

export const Small = (): ReactNode => (
  <Breadcrumb
    size="sm"
    items={[{ label: "Dashboard" }, { label: "Reports" }]}
    separator="›"
  />
);
