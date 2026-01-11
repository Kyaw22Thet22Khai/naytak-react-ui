import type { ReactNode } from "react";
import { NotchedInput } from "../components/Input/NotchedInput";

export default {
  title: "Components/NotchedInput",
};

export const Basic = (): ReactNode => (
  <div style={{ maxWidth: 360 }}>
    <NotchedInput label="Search" placeholder="Type to search" />
  </div>
);
