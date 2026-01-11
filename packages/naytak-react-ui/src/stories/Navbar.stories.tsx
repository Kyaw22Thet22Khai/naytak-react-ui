import type { ReactNode } from "react";
import { Navbar } from "../components/Navbar/Navbar";
import { Button } from "../components/Button/Button";

export default {
  title: "Components/Navbar",
};

export const Basic = (): ReactNode => (
  <Navbar title="Admin Dashboard">
    <Button variant="primary">New</Button>
    <Button variant="secondary">Settings</Button>
  </Navbar>
);

// Interactive playground
type NavbarPlaygroundProps = {
  title?: string;
  newLabel?: string;
  settingsLabel?: string;
  showSettings?: boolean;
};

export const Playground = (props: NavbarPlaygroundProps): ReactNode => (
  <Navbar title={props.title}>
    <Button variant="primary">{props.newLabel ?? "New"}</Button>
    {props.showSettings ? (
      <Button variant="secondary">{props.settingsLabel ?? "Settings"}</Button>
    ) : null}
  </Navbar>
);

Playground.args = {
  title: "Admin Dashboard",
  newLabel: "New",
  settingsLabel: "Settings",
  showSettings: true,
} as NavbarPlaygroundProps;

Playground.controls = {
  title: { type: "text" },
  newLabel: { type: "text" },
  settingsLabel: { type: "text" },
  showSettings: { type: "boolean" },
};
