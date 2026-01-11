import type { ReactNode } from "react";
import { Radio } from "../components/Radio/Radio";

export default {
  title: "Components/Radio",
};

export const Basic = (): ReactNode => (
  <div style={{ display: "grid", gap: 12 }}>
    <Radio label="Option A" name="r1" defaultChecked />
    <Radio label="Option B" name="r1" />
  </div>
);

export const Sizes = (): ReactNode => (
  <div style={{ display: "grid", gap: 12 }}>
    <Radio label="Small" size="sm" name="r2" />
    <Radio label="Medium" size="md" name="r2" />
    <Radio label="Large" size="lg" name="r2" />
  </div>
);
