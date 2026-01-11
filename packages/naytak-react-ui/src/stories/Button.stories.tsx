import type { ReactNode } from "react";
import { Button } from "../components/Button/Button";
import type { ButtonProps } from "../components/Button/Button";

export default {
  title: "Components/Button",
};

export const Primary = (): ReactNode => <Button>Primary</Button>;
export const Secondary = (): ReactNode => (
  <Button variant="secondary">Secondary</Button>
);
export const Ghost = (): ReactNode => <Button variant="ghost">Ghost</Button>;
export const Success = (): ReactNode => (
  <Button variant="success">Success</Button>
);
export const Warning = (): ReactNode => (
  <Button variant="warning">Warning</Button>
);
export const Danger = (): ReactNode => <Button variant="danger">Danger</Button>;
export const Info = (): ReactNode => <Button variant="info">Info</Button>;
export const Dark = (): ReactNode => <Button variant="dark">Dark</Button>;
export const Light = (): ReactNode => <Button variant="light">Light</Button>;

export const Sizes = (): ReactNode => (
  <div
    style={{
      display: "flex",
      gap: 12,
      alignItems: "center",
      flexWrap: "wrap",
    }}>
    <Button size="sm">Small</Button>
    <Button size="md">Medium</Button>
    <Button size="lg">Large</Button>
  </div>
);

export const Outlined = (): ReactNode => (
  <div
    style={{
      display: "flex",
      gap: 12,
      alignItems: "center",
      flexWrap: "wrap",
    }}>
    <Button variant="primary" outlined>
      Primary
    </Button>
    <Button variant="secondary" outlined>
      Secondary
    </Button>
    <Button variant="ghost" outlined>
      Ghost
    </Button>
    <Button variant="success" outlined>
      Success
    </Button>
    <Button variant="warning" outlined>
      Warning
    </Button>
    <Button variant="danger" outlined>
      Danger
    </Button>
    <Button variant="info" outlined>
      Info
    </Button>
    <Button variant="dark" outlined>
      Dark
    </Button>
    <Button variant="light" outlined>
      Light
    </Button>
  </div>
);

export const Radii = (): ReactNode => (
  <div
    style={{
      display: "flex",
      gap: 12,
      alignItems: "center",
      flexWrap: "wrap",
    }}>
    <Button radius="none">None</Button>
    <Button radius="sm">SM</Button>
    <Button radius="md">MD</Button>
    <Button radius="lg">LG</Button>
    <Button radius="full">Full</Button>
  </div>
);

// Interactive playground with controls
type PlaygroundProps = ButtonProps & { label?: string };
export const Playground = (props: PlaygroundProps): ReactNode => (
  <Button {...props}>{props.label ?? "Playground"}</Button>
);

Playground.args = {
  variant: "primary",
  size: "md",
  outlined: false,
  radius: "md",
  label: "Click me",
} as PlaygroundProps;

Playground.controls = {
  variant: {
    type: "select",
    options: [
      "primary",
      "secondary",
      "ghost",
      "success",
      "warning",
      "danger",
      "info",
      "dark",
      "light",
    ],
  },
  size: { type: "select", options: ["sm", "md", "lg"] },
  outlined: { type: "boolean" },
  radius: { type: "select", options: ["none", "sm", "md", "lg", "full"] },
  label: { type: "text" },
};
