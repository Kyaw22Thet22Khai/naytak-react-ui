import type { ReactNode } from "react";
import { Container } from "../components/Container/Container";

export default {
  title: "Components/Container",
};

export const Basic = (): ReactNode => (
  <Container>
    <div style={{ background: "#f5f5f7", padding: "1rem" }}>
      <h2>Default Container</h2>
      <p>Content is centered with a max-width.</p>
    </div>
  </Container>
);

export const Fluid = (): ReactNode => (
  <Container fluid>
    <div style={{ background: "#f5f5f7", padding: "1rem" }}>
      <h2>Fluid Container</h2>
      <p>Spans the full width of the viewport.</p>
    </div>
  </Container>
);
