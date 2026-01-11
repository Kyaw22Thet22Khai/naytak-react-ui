import type { ReactNode } from "react";
import { Tabs, TabPanel } from "../components/Tabs/Tabs";

export default {
  title: "Components/Tabs",
};

export const Basic = (): ReactNode => (
  <Tabs
    items={[
      { label: "First", value: "first" },
      { label: "Second", value: "second" },
      { label: "Disabled", value: "disabled", disabled: true },
    ]}
    defaultValue="first">
    <TabPanel value="first">First panel content</TabPanel>
    <TabPanel value="second">Second panel content</TabPanel>
    <TabPanel value="disabled">Should not show</TabPanel>
  </Tabs>
);

export const Controlled = (): ReactNode => {
  const [tab, setTab] = React.useState("first");
  return (
    <Tabs
      items={[
        { label: "First", value: "first" },
        { label: "Second", value: "second" },
      ]}
      value={tab}
      onChange={setTab}>
      <TabPanel value="first">Controlled: First panel</TabPanel>
      <TabPanel value="second">Controlled: Second panel</TabPanel>
    </Tabs>
  );
};
