import type { ReactNode } from "react";
import { SearchSelect } from "../components/Select/SearchSelect";

export default {
  title: "Components/SearchSelect",
};

const options = [
  { label: "Apple", value: "apple" },
  { label: "Banana", value: "banana" },
  { label: "Cherry", value: "cherry" },
  { label: "Date", value: "date" },
  { label: "Elderberry", value: "elderberry" },
];

export const Basic = (): ReactNode => (
  <div style={{ maxWidth: 360 }}>
    <SearchSelect
      label="Fruits"
      options={options}
      placeholder="Type to search..."
    />
  </div>
);

export const Sizes = (): ReactNode => (
  <div style={{ display: "grid", gap: 12, maxWidth: 360 }}>
    <SearchSelect
      label="Small"
      size="sm"
      options={options}
      placeholder="Search..."
    />
    <SearchSelect
      label="Medium"
      size="md"
      options={options}
      placeholder="Search..."
    />
    <SearchSelect
      label="Large"
      size="lg"
      options={options}
      placeholder="Search..."
    />
  </div>
);
