import type { ReactNode } from "react";
import { Card } from "../components/Card/Card";
import { Button } from "../components/Button/Button";

export default {
  title: "Components/Card",
};

export const Basic = (): ReactNode => (
  <div style={{ display: "grid", gap: 12, maxWidth: 600 }}>
    <Card title="Card title" subtitle="Subtitle">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.
      Praesent libero. Sed cursus ante dapibus diam.
    </Card>
    <Card
      title="Card with footer"
      footer={<Button variant="primary">Action</Button>}>
      This card shows an action in the footer.
    </Card>
  </div>
);

export const Sizes = (): ReactNode => (
  <div style={{ display: "grid", gap: 12, maxWidth: 600 }}>
    <Card size="sm" title="Small">
      Compact card content.
    </Card>
    <Card size="md" title="Medium">
      Default card content.
    </Card>
    <Card size="lg" title="Large">
      Spacious card content.
    </Card>
  </div>
);

export const Variants = (): ReactNode => (
  <div
    style={{
      display: "grid",
      gap: 12,
      maxWidth: 900,
      gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
    }}>
    <Card title="Default" subtitle="Base style">
      Base card using default border and light shadow.
    </Card>
    <Card variant="outlined" title="Outlined" subtitle="No shadow">
      Prominent outline without elevation.
    </Card>
    <Card variant="elevated" title="Elevated" subtitle="Higher shadow">
      Elevated card with stronger drop shadow.
    </Card>
    <Card interactive title="Interactive" subtitle="Hover to lift">
      Hover to see a subtle lift and stronger shadow.
    </Card>
    <Card variant="outlined" interactive title="Outlined + Interactive">
      Outlined style with hover lift.
    </Card>
    <Card variant="elevated" interactive title="Elevated + Interactive">
      Elevated base with additional hover lift.
    </Card>
  </div>
);
