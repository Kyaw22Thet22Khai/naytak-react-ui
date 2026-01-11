import type { ReactNode } from "react";
import { Input } from "../components/Input/Input";

export default {
  title: "Components/Input",
};

export const Simple = (): ReactNode => (
  <div style={{ maxWidth: 360 }}>
    <Input label="Email" placeholder="you@example.com" type="email" />
  </div>
);

export const Group = (): ReactNode => (
  <div style={{ maxWidth: 360 }}>
    <Input
      label="Website"
      addonBefore="https://"
      addonAfter=".com"
      placeholder="example"
    />
  </div>
);

export const Inline = (): ReactNode => (
  <div style={{ maxWidth: 480 }}>
    <Input label="Name" inline placeholder="Jane Doe" />
  </div>
);

export const WithIcon = (): ReactNode => (
  <div style={{ maxWidth: 360 }}>
    <Input placeholder="Search for a block" iconStart={<span>🔍</span>} />
  </div>
);

export const Sizes = (): ReactNode => (
  <div
    style={{
      display: "flex",
      gap: 12,
      alignItems: "center",
      flexWrap: "wrap",
      maxWidth: 720,
    }}>
    <div style={{ width: 220 }}>
      <Input size="sm" placeholder="Small" />
    </div>
    <div style={{ width: 220 }}>
      <Input size="md" placeholder="Medium" />
    </div>
    <div style={{ width: 220 }}>
      <Input size="lg" placeholder="Large" />
    </div>
  </div>
);
