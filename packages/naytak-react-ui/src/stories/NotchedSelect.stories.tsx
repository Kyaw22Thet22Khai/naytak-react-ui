import type { ReactNode } from "react";
import { NotchedSelect } from "../components/Select/NotchedSelect";

export default {
  title: "Components/NotchedSelect",
};

export const Basic = (): ReactNode => (
  <div style={{ maxWidth: 360 }}>
    <NotchedSelect label="Country" defaultValue="">
      <option value="" disabled>
        Select a country
      </option>
      <option value="us">United States</option>
      <option value="ca">Canada</option>
      <option value="mx">Mexico</option>
    </NotchedSelect>
  </div>
);

export const Sizes = (): ReactNode => (
  <div style={{ display: "grid", gap: 12, maxWidth: 360 }}>
    <NotchedSelect label="Small" size="sm">
      <option>One</option>
      <option>Two</option>
    </NotchedSelect>
    <NotchedSelect label="Medium" size="md">
      <option>One</option>
      <option>Two</option>
    </NotchedSelect>
    <NotchedSelect label="Large" size="lg">
      <option>One</option>
      <option>Two</option>
    </NotchedSelect>
  </div>
);
