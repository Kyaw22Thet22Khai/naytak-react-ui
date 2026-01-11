import type { ReactNode } from "react";
import { Content } from "../components/Content/Content";

export default {
  title: "Components/Content",
};

export const Basic = (): ReactNode => (
  <Content>
    <h1>Page Title</h1>
    <p>Some content goes here.</p>
  </Content>
);

export const Fluid = (): ReactNode => (
  <Content fluid>
    <h1>Fluid Page Title</h1>
    <p>This content uses a fluid container (full width).</p>
  </Content>
);
