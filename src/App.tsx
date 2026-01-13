import { useState } from "react";
import {
  Box,
  Card,
  Tabs,
  Grid,
  List,
  Modal,
  Radio,
  Input,
  Badge,
  Table,
  Button,
  Select,
  Switch,
  Avatar,
  Tooltip,
  ListItem,
  GridItem,
  Checkbox,
  Snackbar,
  Progress,
  TableHead,
  TableBody,
  Pagination,
  AvatarGroup,
  SidebarItem,
  NotchedInput,
  SearchSelect,
  NotchedSelect,
  DashboardLayout,
  TablePagination,
} from "@naytak/react-ui";

export default function App() {
  // Snackbar state
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [page, setPage] = useState<
    | "home"
    | "buttons"
    | "inputs"
    | "selects"
    | "choices"
    | "cards"
    | "modals"
    | "tabs"
    | "pagination"
    | "grid"
    | "progress"
    | "avatar"
    | "badge"
    | "table"
    | "colors"
    | "box"
    | "Lists"
    | "Typography"
  >("home");
  const [openSm, setOpenSm] = useState(false);
  const [openMd, setOpenMd] = useState(false);
  const [openLg, setOpenLg] = useState(false);

  const [tab, setTab] = useState("one");

  const [tablePage, setTablePage] = useState(0); // ZERO-BASED
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const count = 100;

  const breadcrumbItems = (() => {
    const base = [{ label: "Home" }];
    switch (page) {
      case "home":
        return base;
      case "inputs":
        return [...base, { label: "Inputs" }];
      case "selects":
        return [...base, { label: "Select" }];
      case "buttons":
        return [...base, { label: "Buttons" }];
      case "choices":
        return [...base, { label: "Choices" }];
      case "cards":
        return [...base, { label: "Cards" }];
      case "modals":
        return [...base, { label: "Modals" }];
      case "tabs":
        return [...base, { label: "Tabs" }];
      case "pagination":
        return [...base, { label: "Pagination" }];
      case "grid":
        return [...base, { label: "Grid" }];
      case "progress":
        return [...base, { label: "Progress" }];
      case "avatar":
        return [...base, { label: "Avatar" }];
      case "badge":
        return [...base, { label: "Badge" }];
      case "table":
        return [...base, { label: "Table" }];
      case "colors":
        return [...base, { label: "Colors" }];
      case "box":
        return [...base, { label: "Box" }];
      case "Lists":
        return [...base, { label: "Lists" }];
      default:
        return base;
    }
  })();

  return (
    <DashboardLayout
      title="Admin Dashboard"
      breadcrumbItems={breadcrumbItems}
      breadcrumbSeparator="›"
      breadcrumbSize="sm"
      sidebar={
        <>
          <SidebarItem
            label="Home"
            active={page === "home"}
            onClick={() => setPage("home")}
          />
          <SidebarItem
            label="Buttons"
            active={page === "buttons"}
            onClick={() => setPage("buttons")}
          />
          <SidebarItem
            label="Inputs"
            active={page === "inputs"}
            onClick={() => setPage("inputs")}
          />
          <SidebarItem
            label="Selects"
            active={page === "selects"}
            onClick={() => setPage("selects")}
          />
          <SidebarItem
            label="Choices"
            active={page === "choices"}
            onClick={() => setPage("choices")}
          />
          <SidebarItem
            label="Cards"
            active={page === "cards"}
            onClick={() => setPage("cards")}
          />
          <SidebarItem
            label="Modals"
            active={page === "modals"}
            onClick={() => setPage("modals")}
          />
          <SidebarItem
            label="Tabs"
            active={page === "tabs"}
            onClick={() => setPage("tabs")}
          />
          <SidebarItem
            label="Pagination"
            active={page === "pagination"}
            onClick={() => setPage("pagination")}
          />
          <SidebarItem
            label="Grid"
            active={page === "grid"}
            onClick={() => setPage("grid")}
          />
          <SidebarItem
            label="Progress"
            active={page === "progress"}
            onClick={() => setPage("progress")}
          />
          <SidebarItem
            label="Avatar"
            active={page === "avatar"}
            onClick={() => setPage("avatar")}
          />
          <SidebarItem
            label="Badge"
            active={page === "badge"}
            onClick={() => setPage("badge")}
          />
          <SidebarItem
            label="Table"
            active={page === "table"}
            onClick={() => setPage("table")}
          />
          <SidebarItem
            label="Colors"
            active={page === "colors"}
            onClick={() => setPage("colors")}
          />
          <SidebarItem
            label="Box"
            active={page === "box"}
            onClick={() => setPage("box")}
          />
          <SidebarItem
            label="Lists"
            active={page === "Lists"}
            onClick={() => setPage("Lists")}
          />
        </>
      }
      navbarActions={
        <>
          <Button
            variant="primary"
            size="sm"
            radius="sm"
            onClick={() => setSnackbarOpen(true)}>
            Show Toast
          </Button>
          <Button variant="secondary" size="lg" radius="lg">
            Settings
          </Button>
        </>
      }
      footer={<span>© 2026 Naytak</span>}>
      {/* Snackbar Toast Demo */}
      <Snackbar
        message="This is a toast message!"
        open={snackbarOpen}
        color="success"
        position="top-right"
        autoHideDuration={3000}
        onClose={() => setSnackbarOpen(false)}
      />
      {page === "home" && (
        <>
          <h2 style={{ margin: 0 }}>Welcome to Naytak React UI Demo!</h2>
          <Grid container fluid rowSpacing={1} style={{ marginTop: 16 }}>
            <GridItem xs={12} md={2} lg={2} spacing={0.5}>
              <span className="text-xs d-block">XS</span>
              <span className="text-sm d-block">SM</span>
              <span className="text-md d-block">MD</span>
              <span className="text-lg d-block">LG</span>
              <span className="text-xl d-block">XL</span>
              <span className="text-2xl d-block">2XL</span>
              <span className="text-3xl d-block">3XL</span>
              <span className="text-4xl d-block">4XL</span>
              <span className="text-5xl d-block">5XL</span>
            </GridItem>
            <GridItem xs={12} md={2} lg={2} spacing={0.5}>
              <span className="font-thin d-block">Thin</span>
              <span className="font-light d-block">Light</span>
              <span className="font-normal d-block">Normal</span>
              <span className="font-medium d-block">Medium</span>
              <span className="font-semibold d-block">Semibold</span>
              <span className="font-bold d-block">Bold</span>
              <span className="font-extrabold d-block">Extrabold</span>
              <span className="font-black d-block">Black</span>
            </GridItem>
            <GridItem xs={12} md={2} lg={2} spacing={0.5}>
              <span className="italic d-block">Italic</span>
              <span className="not-italic d-block">Not Italic</span>
            </GridItem>
            <GridItem xs={12} md={2} lg={2} spacing={0.5}>
              <span className="leading-none d-block">Leading None</span>
              <span className="leading-tight d-block">Leading Tight</span>
              <span className="leading-snug d-block">Leading Snug</span>
              <span className="leading-normal d-block">Leading Normal</span>
              <span className="leading-relaxed d-block">Leading Relaxed</span>
              <span className="leading-loose d-block">Leading Loose</span>
            </GridItem>
            <GridItem xs={12} md={2} lg={2} spacing={0.5}>
              <span className="tracking-tighter d-block">Tracking Tighter</span>
              <span className="tracking-tight d-block">Tracking Tight</span>
              <span className="tracking-normal d-block">Tracking Normal</span>
              <span className="tracking-wide d-block">Tracking Wide</span>
              <span className="tracking-wider d-block">Tracking Wider</span>
              <span className="tracking-widest d-block">Tracking Widest</span>
            </GridItem>
            <GridItem xs={12} md={2} lg={2} spacing={0.5}>
              <span className="uppercase d-block">Uppercase</span>
              <span className="lowercase d-block">LOWERCASE</span>
              <span className="capitalize d-block">hello world</span>
              <span className="normal-case d-block">Normal Case</span>
              <span className="underline d-block">underline</span>
              <span className="line-through d-block">line-through</span>
              <span className="no-underline d-block">no-underline</span>
              <span className="overline d-block">overline</span>
              <span className="truncate d-block">Truncate</span>
              <span className="ellipsis d-block">Ellipsis</span>
              <span className="clip d-block">Clip</span>
            </GridItem>
          </Grid>
        </>
      )}
      {page === "buttons" && (
        <div style={{ display: "grid", gap: 16, maxWidth: 1000 }}>
          <h2 style={{ margin: 0 }}>Button Demo</h2>
          <div
            style={{
              display: "flex",
              gap: 12,
              alignItems: "center",
              flexWrap: "wrap",
            }}>
            <Button variant="primary">Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="success">Success</Button>
            <Button variant="warning">Warning</Button>
            <Button variant="danger">Danger</Button>
            <Button variant="info">Info</Button>
            <Button variant="dark">Dark</Button>
            <Button variant="light">Light</Button>
          </div>
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
          <div
            style={{
              display: "flex",
              gap: 12,
              alignItems: "center",
              flexWrap: "wrap",
            }}>
            <Button radius="sm" outlined>
              SM
            </Button>
            <Button radius="md" outlined>
              MD
            </Button>
            <Button radius="lg" outlined>
              LG
            </Button>
            <Button radius="full" outlined>
              Full
            </Button>
          </div>
        </div>
      )}
      {page === "inputs" && (
        <div style={{ display: "grid", gap: 16, maxWidth: 1200 }}>
          <h2 style={{ margin: 0 }}>Input Demo</h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
              gap: 24,
              alignItems: "start",
            }}>
            {/* Default column */}
            <div>
              <h3 style={{ margin: "0 0 12px" }}>Default</h3>
              <div style={{ display: "grid", gap: 12 }}>
                <div>
                  <h4 style={{ margin: "0 0 6px" }}>Simple</h4>
                  <Input
                    label="Email"
                    type="email"
                    placeholder="you@example.com"
                    size="md"
                  />
                </div>
                <div>
                  <h4 style={{ margin: "0 0 6px" }}>Notched</h4>
                  <NotchedInput
                    label="Username"
                    placeholder="Enter username"
                    size="md"
                  />
                </div>
                <div>
                  <h4 style={{ margin: "0 0 6px" }}>Group</h4>
                  <Input
                    label="Website"
                    addonBefore="https://"
                    addonAfter=".com"
                    placeholder="example"
                    size="md"
                  />
                </div>
                <div>
                  <h4 style={{ margin: "0 0 6px" }}>Inline</h4>
                  <Input label="Name" inline placeholder="Jane Doe" size="md" />
                </div>
              </div>
            </div>

            {/* Small column */}
            <div>
              <h3 style={{ margin: "0 0 12px" }}>Small</h3>
              <div style={{ display: "grid", gap: 12 }}>
                <div>
                  <h4 style={{ margin: "0 0 6px" }}>Simple</h4>
                  <Input
                    label="Email"
                    type="email"
                    placeholder="you@example.com"
                    size="sm"
                  />
                </div>
                <div>
                  <h4 style={{ margin: "0 0 6px" }}>Notched</h4>
                  <NotchedInput
                    label="Username"
                    placeholder="Enter username"
                    size="sm"
                  />
                </div>
                <div>
                  <h4 style={{ margin: "0 0 6px" }}>Group</h4>
                  <Input
                    label="Website"
                    addonBefore="https://"
                    addonAfter=".com"
                    placeholder="example"
                    size="sm"
                  />
                </div>
                <div>
                  <h4 style={{ margin: "0 0 6px" }}>Inline</h4>
                  <Input label="Name" inline placeholder="Jane Doe" size="sm" />
                </div>
              </div>
            </div>

            {/* Large column */}
            <div>
              <h3 style={{ margin: "0 0 12px" }}>Large</h3>
              <div style={{ display: "grid", gap: 12 }}>
                <div>
                  <h4 style={{ margin: "0 0 6px" }}>Simple</h4>
                  <Input
                    label="Email"
                    type="email"
                    placeholder="you@example.com"
                    size="lg"
                  />
                </div>
                <div>
                  <h4 style={{ margin: "0 0 6px" }}>Notched</h4>
                  <NotchedInput
                    label="Username"
                    placeholder="Enter username"
                    size="lg"
                  />
                </div>
                <div>
                  <h4 style={{ margin: "0 0 6px" }}>Group</h4>
                  <Input
                    label="Website"
                    addonBefore="https://"
                    addonAfter=".com"
                    placeholder="example"
                    size="lg"
                  />
                </div>
                <div>
                  <h4 style={{ margin: "0 0 6px" }}>Inline</h4>
                  <Input label="Name" inline placeholder="Jane Doe" size="lg" />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {page === "selects" && (
        <div style={{ display: "grid", gap: 16, maxWidth: 1200 }}>
          <h2 style={{ margin: 0 }}>Select Demo</h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
              gap: 24,
              alignItems: "start",
            }}>
            {/* Default column */}
            <div>
              <h3 style={{ margin: "0 0 12px" }}>Default</h3>
              <div style={{ display: "grid", gap: 12 }}>
                <div>
                  <h4 style={{ margin: "0 0 6px" }}>Simple</h4>
                  <Select
                    label="Status"
                    size="md"
                    options={[
                      { label: "Open", value: "open" },
                      { label: "Closed", value: "closed" },
                      { label: "Archived", value: "archived", disabled: true },
                    ]}
                  />
                </div>
                <div>
                  <h4 style={{ margin: "0 0 6px" }}>Notched</h4>
                  <NotchedSelect label="Role" size="md" defaultValue="">
                    <option value="" disabled>
                      Choose role
                    </option>
                    <option value="admin">Admin</option>
                    <option value="editor">Editor</option>
                    <option value="viewer">Viewer</option>
                  </NotchedSelect>
                </div>
                <div>
                  <h4 style={{ margin: "0 0 6px" }}>Search</h4>
                  <SearchSelect
                    label="Fruit"
                    size="md"
                    placeholder="Type to search..."
                    options={[
                      { label: "Apple", value: "apple" },
                      { label: "Banana", value: "banana" },
                      { label: "Cherry", value: "cherry" },
                      { label: "Date", value: "date" },
                    ]}
                  />
                </div>
              </div>
            </div>

            {/* Small column */}
            <div>
              <h3 style={{ margin: "0 0 12px" }}>Small</h3>
              <div style={{ display: "grid", gap: 12 }}>
                <div>
                  <h4 style={{ margin: "0 0 6px" }}>Simple</h4>
                  <Select
                    label="Status"
                    size="sm"
                    options={[
                      { label: "Open", value: "open" },
                      { label: "Closed", value: "closed" },
                    ]}
                  />
                </div>
                <div>
                  <h4 style={{ margin: "0 0 6px" }}>Notched</h4>
                  <NotchedSelect label="Role" size="sm">
                    <option>Admin</option>
                    <option>Editor</option>
                    <option>Viewer</option>
                  </NotchedSelect>
                </div>
                <div>
                  <h4 style={{ margin: "0 0 6px" }}>Search</h4>
                  <SearchSelect
                    label="Fruit"
                    size="sm"
                    placeholder="Search..."
                    options={[
                      { label: "Apple", value: "apple" },
                      { label: "Banana", value: "banana" },
                    ]}
                  />
                </div>
              </div>
            </div>

            {/* Large column */}
            <div>
              <h3 style={{ margin: "0 0 12px" }}>Large</h3>
              <div style={{ display: "grid", gap: 12 }}>
                <div>
                  <h4 style={{ margin: "0 0 6px" }}>Simple</h4>
                  <Select
                    label="Status"
                    size="lg"
                    options={[
                      { label: "Open", value: "open" },
                      { label: "Closed", value: "closed" },
                    ]}
                  />
                </div>
                <div>
                  <h4 style={{ margin: "0 0 6px" }}>Notched</h4>
                  <NotchedSelect label="Role" size="lg">
                    <option>Admin</option>
                    <option>Editor</option>
                    <option>Viewer</option>
                  </NotchedSelect>
                </div>
                <div>
                  <h4 style={{ margin: "0 0 6px" }}>Search</h4>
                  <SearchSelect
                    label="Fruit"
                    size="lg"
                    placeholder="Search..."
                    options={[
                      { label: "Apple", value: "apple" },
                      { label: "Banana", value: "banana" },
                      { label: "Cherry", value: "cherry" },
                      { label: "Date", value: "date" },
                    ]}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {page === "choices" && (
        <div style={{ display: "grid", gap: 16, maxWidth: 1200 }}>
          <h2 style={{ margin: 0 }}>Choices Demo</h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
              gap: 24,
              alignItems: "start",
            }}>
            {/* Default column */}
            <div>
              <h3 style={{ margin: "0 0 12px" }}>Default</h3>
              <div style={{ display: "grid", gap: 12 }}>
                <div>
                  <h4 style={{ margin: "0 0 6px" }}>Checkbox</h4>
                  <Checkbox label="Accept terms" size="md" />
                </div>
                <div>
                  <h4 style={{ margin: "0 0 6px" }}>Radio</h4>
                  <div style={{ display: "grid", gap: 8 }}>
                    <Radio
                      label="Option A"
                      name="r-demo"
                      size="md"
                      defaultChecked
                    />
                    <Radio label="Option B" name="r-demo" size="md" />
                  </div>
                </div>
                <div>
                  <h4 style={{ margin: "0 0 6px" }}>Switch</h4>
                  <Switch label="Enable feature" size="md" />
                </div>
              </div>
            </div>

            {/* Small column */}
            <div>
              <h3 style={{ margin: "0 0 12px" }}>Small</h3>
              <div style={{ display: "grid", gap: 12 }}>
                <div>
                  <h4 style={{ margin: "0 0 6px" }}>Checkbox</h4>
                  <Checkbox label="Accept terms" size="sm" />
                </div>
                <div>
                  <h4 style={{ margin: "0 0 6px" }}>Radio</h4>
                  <div style={{ display: "grid", gap: 8 }}>
                    <Radio
                      label="Option A"
                      name="r-demo2"
                      size="sm"
                      defaultChecked
                    />
                    <Radio label="Option B" name="r-demo2" size="sm" />
                  </div>
                </div>
                <div>
                  <h4 style={{ margin: "0 0 6px" }}>Switch</h4>
                  <Switch label="Enable feature" size="sm" />
                </div>
              </div>
            </div>

            {/* Large column */}
            <div>
              <h3 style={{ margin: "0 0 12px" }}>Large</h3>
              <div style={{ display: "grid", gap: 12 }}>
                <div>
                  <h4 style={{ margin: "0 0 6px" }}>Checkbox</h4>
                  <Checkbox label="Accept terms" size="lg" />
                </div>
                <div>
                  <h4 style={{ margin: "0 0 6px" }}>Radio</h4>
                  <div style={{ display: "grid", gap: 8 }}>
                    <Radio
                      label="Option A"
                      name="r-demo3"
                      size="lg"
                      defaultChecked
                    />
                    <Radio label="Option B" name="r-demo3" size="lg" />
                  </div>
                </div>
                <div>
                  <h4 style={{ margin: "0 0 6px" }}>Switch</h4>
                  <Switch label="Enable feature" size="lg" />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {page === "cards" && (
        <div style={{ display: "grid", gap: 16, maxWidth: 1000 }}>
          <h2 style={{ margin: 0 }}>Card Demo</h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
              gap: 24,
              alignItems: "start",
            }}>
            <div>
              <h3 style={{ margin: "0 0 12px" }}>Small</h3>
              <Card size="sm" title="Small Card" subtitle="Compact">
                This is a compact card for dense layouts.
              </Card>
            </div>
            <div>
              <h3 style={{ margin: "0 0 12px" }}>Default</h3>
              <Card
                size="md"
                title="Default Card"
                footer={<Button variant="primary">Action</Button>}>
                Default spacing good for most content.
              </Card>
            </div>
            <div>
              <h3 style={{ margin: "0 0 12px" }}>Large</h3>
              <Card size="lg" title="Large Card" subtitle="Spacious">
                Extra padding for media-rich content or emphasis.
              </Card>
            </div>
          </div>
        </div>
      )}
      {page === "modals" && (
        <div style={{ display: "grid", gap: 16, maxWidth: 900 }}>
          <h2 style={{ margin: 0 }}>Modal Demo</h2>
          <div
            style={{
              display: "flex",
              gap: 12,
              alignItems: "center",
              flexWrap: "wrap",
            }}>
            <Button size="sm" onClick={() => setOpenSm(true)}>
              Open small
            </Button>
            <Button onClick={() => setOpenMd(true)}>Open default</Button>
            <Button size="lg" onClick={() => setOpenLg(true)}>
              Open large
            </Button>
          </div>

          <Modal
            open={openSm}
            size="small"
            onClose={() => setOpenSm(false)}
            title="Small modal"
            transition="scale"
            footer={<Button onClick={() => setOpenSm(false)}>Close</Button>}>
            Compact content. Click overlay or press Escape to close.
          </Modal>

          <Modal
            open={openMd}
            size="default"
            onClose={() => setOpenMd(false)}
            title="Default modal"
            transition="slide-up"
            footer={<Button onClick={() => setOpenMd(false)}>Close</Button>}>
            Standard content. Click overlay or press Escape to close.
          </Modal>

          <Modal
            open={openLg}
            size="large"
            onClose={() => setOpenLg(false)}
            title="Large modal"
            transition="slide-right"
            footer={<Button onClick={() => setOpenLg(false)}>Close</Button>}>
            Spacious content. Click overlay or press Escape to close.
          </Modal>
        </div>
      )}
      {page === "tabs" && (
        <>
          <Tabs
            items={[
              { label: "Tab One", value: "one" },
              { label: "Tab Two", value: "two" },
              { label: "Disabled", value: "disabled", disabled: true },
            ]}
            value={tab}
            onChange={setTab}
          />
          <div style={{ marginTop: 16 }}>
            {tab === "one" && <div>This is the first tab panel.</div>}
            {tab === "two" && <div>This is the second tab panel.</div>}
          </div>
        </>
      )}
      {page === "pagination" && (
        <div style={{ display: "grid", gap: 24 }}>
          <div>
            <h4 style={{ margin: "0 0 8px" }}>Small (Rounded)</h4>
            <Pagination
              currentPage={2}
              totalPages={10}
              onPageChange={(page) => alert(`Go to page ${page}`)}
              siblingCount={1}
              size="sm"
              shape="rounded"
            />
          </div>

          <div>
            <h4 style={{ margin: "0 0 8px" }}>Medium (Borderless)</h4>
            <Pagination
              currentPage={5}
              totalPages={20}
              onPageChange={(page) => alert(`Go to page ${page}`)}
              siblingCount={1}
              size="md"
              shape="borderless"
            />
          </div>

          <div>
            <h4 style={{ margin: "0 0 8px" }}>Large (Rounded)</h4>
            <Pagination
              currentPage={8}
              totalPages={30}
              onPageChange={(page) => alert(`Go to page ${page}`)}
              siblingCount={2}
              size="lg"
              shape="rounded"
            />
          </div>

          <div>
            <h4 style={{ margin: "0 0 8px" }}>Table Pagination (Borderless)</h4>
            <TablePagination
              count={count}
              page={tablePage}
              rowsPerPage={rowsPerPage}
              onPageChange={setTablePage}
              onRowsPerPageChange={(value) => {
                setRowsPerPage(value);
                setTablePage(0); // 🔥 IMPORTANT
              }}
              rowsPerPageOptions={[10, 20, 30, 50, 100]}
              shape="borderless"
            />
          </div>

          <div>
            <h4 style={{ margin: "0 0 8px" }}>Table Pagination (Rounded)</h4>
            <TablePagination
              count={count}
              page={tablePage}
              rowsPerPage={rowsPerPage}
              onPageChange={setTablePage}
              onRowsPerPageChange={(value) => {
                setRowsPerPage(value);
                setTablePage(0); // 🔥 IMPORTANT
              }}
              rowsPerPageOptions={[10, 20, 30, 50, 100]}
              shape="rounded"
            />
          </div>
        </div>
      )}
      {page === "grid" && (
        <div style={{ display: "grid", gap: 16 }}>
          <h2 style={{ margin: 0 }}>Grid Demo</h2>
          <Grid container fluid rowSpacing={1}>
            <GridItem xs={6} md={4} lg={3} spacing={0.5}>
              <Card title="Item 1">Content for item 1</Card>
            </GridItem>
            <GridItem xs={6} md={4} lg={3} spacing={0.5}>
              <Card title="Item 2">Content for item 2</Card>
            </GridItem>
            <GridItem xs={6} md={4} lg={3} spacing={0.5}>
              <Card title="Item 3">Content for item 3</Card>
            </GridItem>
            <GridItem xs={6} md={4} lg={3} spacing={0.5}>
              <Card title="Item 4">Content for item 4</Card>
            </GridItem>
            <GridItem xs={6} md={4} lg={3} spacing={0.5}>
              <Card title="Item 5">Content for item 5</Card>
            </GridItem>
            <GridItem xs={6} md={4} lg={3} spacing={0.5}>
              <Card title="Item 6">Content for item 6</Card>
            </GridItem>
          </Grid>
          <Grid container fluid rowSpacing={1}>
            <GridItem xs={12} md={8} lg={8} spacing={0.5}>
              <Card title="Item 1">Content for item 1</Card>
            </GridItem>
            <GridItem xs={12} md={4} lg={4} spacing={0.5}>
              <Card title="Item 2">Content for item 2</Card>
            </GridItem>
          </Grid>
        </div>
      )}
      {page === "progress" && (
        <>
          <h2 style={{ margin: 0 }}>Progress Demo</h2>
          <Grid container fluid rowSpacing={1}>
            <GridItem xs={12} md={8} lg={6} spacing={0.5}>
              <Progress value={70} type="linear" color="primary" />
              <Progress value={45} type="linear" color="success" />
              <Progress value={85} type="linear" color="warning" />
              <Progress value={30} type="linear" color="danger" />
            </GridItem>
            <GridItem xs={12} md={4} lg={6} spacing={0.5}>
              <Progress value={70} type="circular" color="warning" size={64} />
              <Progress value={45} type="circular" color="danger" size={64} />
              <Progress value={85} type="circular" color="primary" size={64} />
              <Progress value={30} type="circular" color="success" size={64} />
            </GridItem>
          </Grid>
        </>
      )}
      {page === "avatar" && (
        <>
          <h2 style={{ margin: 0 }}>Avatar Demo</h2>
          <h4 style={{ margin: 0 }}>Normal</h4>
          <Grid container fluid rowSpacing={1}>
            <GridItem xs={12} md={4} lg={6} spacing={0.5}>
              <Avatar image="https://i.pravatar.cc/150?img=1" size="sm" />
              <Avatar image="https://i.pravatar.cc/150?img=2" size="md" />
              <Avatar image="https://i.pravatar.cc/150?img=3" size="lg" />
            </GridItem>
            <GridItem xs={12} md={4} lg={6} spacing={0.5}>
              <Avatar text="JD" size="sm" color="primary" />
              <Avatar text="AS" size="md" color="danger" />
              <Avatar text="MK" size="lg" color="success" />
            </GridItem>
          </Grid>
          <h4 style={{ margin: 0 }}>Avatar Square Demo</h4>
          <Grid container fluid rowSpacing={1}>
            <GridItem xs={12} md={4} lg={6} spacing={0.5}>
              <Avatar
                image="https://i.pravatar.cc/150?img=4"
                size="sm"
                variant="square"
              />
              <Avatar
                image="https://i.pravatar.cc/150?img=5"
                size="md"
                variant="square"
              />
              <Avatar
                image="https://i.pravatar.cc/150?img=6"
                size="lg"
                variant="square"
              />
            </GridItem>
            <GridItem xs={12} md={4} lg={6} spacing={0.5}>
              <Avatar text="RB" size="sm" variant="square" />
              <Avatar text="CL" size="md" variant="square" />
              <Avatar text="TW" size="lg" variant="square" />
            </GridItem>
          </Grid>
          <h4 style={{ margin: 0 }}>Avatar Group Demo</h4>
          <AvatarGroup max={5}>
            <Avatar image="https://i.pravatar.cc/150?img=7" size="md" />
            <Avatar image="https://i.pravatar.cc/150?img=8" size="md" />
            <Avatar image="https://i.pravatar.cc/150?img=9" size="md" />
            <Avatar image="https://i.pravatar.cc/150?img=10" size="md" />
            <Avatar image="https://i.pravatar.cc/150?img=11" size="md" />
          </AvatarGroup>
        </>
      )}
      {page === "badge" && (
        <>
          <h2 style={{ margin: 0 }}>Badge Demo</h2>
          <Grid container fluid rowSpacing={1}>
            <GridItem xs={12} md={4} lg={4} spacing={0.5}>
              <Badge color="primary">Primary</Badge>
              <Badge color="secondary">Secondary</Badge>
              <Badge color="success">Success</Badge>
              <Badge color="warning">Warning</Badge>
              <Badge color="danger">Danger</Badge>

              <br />

              <Badge size="sm" color="primary">
                Primary
              </Badge>
              <Badge size="sm" color="secondary">
                Secondary
              </Badge>
              <Badge size="sm" color="success">
                Success
              </Badge>
              <Badge size="sm" color="warning">
                Warning
              </Badge>
              <Badge size="sm" color="danger">
                Danger
              </Badge>

              <br />

              <Badge size="lg" color="primary">
                Primary
              </Badge>
              <Badge size="lg" color="secondary">
                Secondary
              </Badge>
              <Badge size="lg" color="success">
                Success
              </Badge>
              <Badge size="lg" color="warning">
                Warning
              </Badge>
              <Badge size="lg" color="danger">
                Danger
              </Badge>
            </GridItem>
            <GridItem xs={12} md={4} lg={4} spacing={0.5}>
              <Badge variant="pill" color="primary">
                Primary
              </Badge>
              <Badge variant="pill" color="secondary">
                Secondary
              </Badge>
              <Badge variant="pill" color="success">
                Success
              </Badge>
              <Badge variant="pill" color="warning">
                Warning
              </Badge>
              <Badge variant="pill" color="danger">
                Danger
              </Badge>
            </GridItem>
            <GridItem xs={12} md={4} lg={4} spacing={0.5}>
              <Badge variant="outline" color="primary">
                Primary
              </Badge>
              <Badge variant="outline" color="secondary">
                Secondary
              </Badge>
              <Badge variant="outline" color="success">
                Success
              </Badge>
              <Badge variant="outline" color="warning">
                Warning
              </Badge>
              <Badge variant="outline" color="danger">
                Danger
              </Badge>
            </GridItem>
          </Grid>
        </>
      )}
      {page === "table" && (
        <>
          <h2 style={{ margin: 0 }}>Table Demo</h2>
          <Grid container fluid rowSpacing={1}>
            <GridItem xs={12} md={6} lg={6} spacing={0.5}>
              <Table type="bordered">
                <TableHead>
                  <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Status</th>
                  </tr>
                </TableHead>
                <TableBody>
                  <tr>
                    <td>Jane Doe</td>
                    <td>jane@example.com</td>
                    <td>Active</td>
                  </tr>
                  <tr>
                    <td>John Smith</td>
                    <td>john@example.com</td>
                    <td>Inactive</td>
                  </tr>
                </TableBody>
              </Table>
            </GridItem>
            <GridItem xs={12} md={6} lg={6} spacing={0.5}>
              <Table type="hoverable">
                <TableHead color="secondary">
                  <tr>
                    <th>Product</th>
                    <th>Price</th>
                    <th>Stock</th>
                  </tr>
                </TableHead>
                <TableBody>
                  <tr>
                    <td>Widget</td>
                    <td>$10</td>
                    <td>25</td>
                  </tr>
                  <tr>
                    <td>Gadget</td>
                    <td>$20</td>
                    <td>12</td>
                  </tr>
                </TableBody>
              </Table>
            </GridItem>
          </Grid>
          <Grid container fluid rowSpacing={1}>
            <GridItem xs={12} md={6} lg={6} spacing={0.5}>
              <Table type="small">
                <TableHead color="dark">
                  <tr>
                    <th>Country</th>
                    <th>Capital</th>
                  </tr>
                </TableHead>
                <TableBody>
                  <tr>
                    <td>France</td>
                    <td>Paris</td>
                  </tr>
                  <tr>
                    <td>Japan</td>
                    <td>Tokyo</td>
                  </tr>
                </TableBody>
              </Table>
            </GridItem>
            <GridItem xs={12} md={6} lg={6} spacing={0.5}>
              <Table type="resposive">
                <TableHead color="danger">
                  <tr>
                    <th>Device</th>
                    <th>OS</th>
                    <th>Version</th>
                  </tr>
                </TableHead>
                <TableBody>
                  <tr>
                    <td>iPhone</td>
                    <td>iOS</td>
                    <td>17.2</td>
                  </tr>
                  <tr>
                    <td>Pixel</td>
                    <td>Android</td>
                    <td>14</td>
                  </tr>
                </TableBody>
              </Table>
            </GridItem>
          </Grid>
        </>
      )}
      {page === "colors" && (
        <div style={{ display: "grid", gap: 16, maxWidth: 600 }}>
          <h2 style={{ margin: 0 }}>Color Palette</h2>
          <div className="bg-indigo-50 w-8 h-2 rounded shadow">Indigo</div>
        </div>
      )}
      {page === "box" && (
        <>
          <h2 style={{ margin: 0 }}>Box Demo</h2>
          <Box className="bg-sand-90 w-8 h-8 rounded shadow text-indigo-10 align-baseline flex items-center justify-center">
            Box Content
          </Box>
        </>
      )}
      {page === "Lists" && (
        <>
          <h2 style={{ margin: 0 }}>List Demo</h2>
          <Grid container fluid rowSpacing={1}>
            <GridItem xs={12} md={4} lg={4} spacing={0.5}>
              <List>
                <ListItem className="font-roboto bg-amber-100 text-plum-10">
                  This is the first item
                </ListItem>
                <ListItem className="font-open-sans bg-amber-100 text-plum-10">
                  This is the second item
                </ListItem>
                <ListItem className="font-montserrat bg-amber-100 text-plum-10">
                  This is the third item
                </ListItem>
              </List>
            </GridItem>
            <GridItem xs={12} md={4} lg={4} spacing={0.5}>
              <List>
                <ListItem className="font-fira-mono">
                  This is the first item
                </ListItem>
                <ListItem className="font-inter">
                  This is the second item
                </ListItem>
                <ListItem className="font-lato">
                  This is the third item
                </ListItem>
              </List>
            </GridItem>
            <GridItem xs={12} md={4} lg={4} spacing={0.5}>
              <List>
                <ListItem className="font-nunito">
                  This is the first item
                </ListItem>
                <ListItem className="font-poppins">
                  This is the second item
                </ListItem>
                <ListItem className="font-raleway">
                  This is the third item
                </ListItem>
              </List>
            </GridItem>
          </Grid>
          <Grid container fluid rowSpacing={1}>
            <GridItem xs={12} md={4} lg={4} spacing={0.5}>
              <List>
                <ListItem className="font-source-sans-pro">
                  This is the first item
                </ListItem>
                <ListItem className="font-merriweather">
                  This is the second item
                </ListItem>
                <ListItem className="font-oswald">
                  This is the third item
                </ListItem>
              </List>
            </GridItem>
            <GridItem xs={12} md={4} lg={4} spacing={0.5}>
              <List>
                <ListItem className="font-pt-sans">
                  This is the first item
                </ListItem>
                <ListItem className="font-ubuntu">
                  This is the second item
                </ListItem>
                <ListItem className="font-playfair-display">
                  This is the third item
                </ListItem>
              </List>
            </GridItem>
          </Grid>
          <Grid container fluid rowSpacing={1}></Grid>
        </>
      )}
    </DashboardLayout>
  );
}
