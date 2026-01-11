import type { StoryDefault } from "@ladle/react";
import React from "react";
import { NotchedInput } from "../index";

export const Basic = () => (
  <div style={{ maxWidth: 360 }}>
    <NotchedInput label="Username" placeholder="Enter username" />
  </div>
);

export const Sizes = () => (
  <div style={{ display: "grid", gap: 12, maxWidth: 360 }}>
    <NotchedInput label="Small" size="sm" placeholder="Small" />
    <NotchedInput label="Medium" size="md" placeholder="Medium" />
    <NotchedInput label="Large" size="lg" placeholder="Large" />
  </div>
);

export const Playground: StoryDefault = {
  args: {
    label: "Label",
    placeholder: "Type here",
    size: "md",
  },
  argTypes: {
    label: { control: { type: "text" } },
    placeholder: { control: { type: "text" } },
    size: { control: { type: "radio" }, options: ["sm", "md", "lg"] },
  },
  render: (args) => (
    <div style={{ maxWidth: 360 }}>
      <NotchedInput {...(args as any)} />
    </div>
  ),
};
