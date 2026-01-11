import type { ReactNode } from "react";
import { Switch } from "../components/Switch/Switch";

export default {
  title: "Components/Switch",
};

export const Basic = (): ReactNode => (
  <div style={{ display: "grid", gap: 12 }}>
    <Switch label="Enable feature" />
    <Switch label="Dark mode" defaultChecked />
  </div>
);

export const Sizes = (): ReactNode => (
  <div style={{ display: "grid", gap: 12 }}>
    <Switch label="Small" size="sm" />
    <Switch label="Medium" size="md" />
    <Switch label="Large" size="lg" />
  </div>
);
