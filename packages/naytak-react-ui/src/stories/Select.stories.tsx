import type { ReactNode } from "react";
import { Select } from "../components/Select/Select";

export default {
  title: "Components/Select",
};

const options = [
  { label: "Option 1", value: "one" },
  { label: "Option 2", value: "two" },
  { label: "Disabled", value: "disabled", disabled: true },
];

export const Basic = (): ReactNode => (
  <div style={{ maxWidth: 360 }}>
    <Select label="Choose" options={options} />
  </div>
);

export const Sizes = (): ReactNode => (
  <div style={{ display: "grid", gap: 12, maxWidth: 360 }}>
    <Select label="Small" size="sm" options={options} defaultValue="one" />
    <Select label="Medium" size="md" options={options} defaultValue="two" />
    <Select label="Large" size="lg" options={options} />
  </div>
);
