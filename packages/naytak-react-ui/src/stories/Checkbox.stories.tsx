import type { ReactNode } from "react";
import { Checkbox } from "../components/Checkbox/Checkbox";

export default {
  title: "Components/Checkbox",
};

export const Basic = (): ReactNode => (
  <div style={{ display: "grid", gap: 12 }}>
    <Checkbox label="Accept terms" />
    <Checkbox label="Enable notifications" defaultChecked />
  </div>
);

export const Sizes = (): ReactNode => (
  <div style={{ display: "grid", gap: 12 }}>
    <Checkbox label="Small" size="sm" />
    <Checkbox label="Medium" size="md" />
    <Checkbox label="Large" size="lg" />
  </div>
);
