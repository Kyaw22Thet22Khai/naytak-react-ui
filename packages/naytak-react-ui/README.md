# @naytak/react-ui

Reusable React component library.

## Install (workspace/local)

If using npm workspaces, add this package as a dependency in your app:

```json
{
  "dependencies": {
    "@naytak/react-ui": "workspace:*"
  }
}
```

Or install via local path:

```bash
npm install ./packages/naytak-react-ui
```

## Build

```bash
npm run -w packages/naytak-react-ui build
```

## Testing

Run unit tests with Vitest:

```bash
npm run -w packages/naytak-react-ui test -- --run
```

## Stories (Ladle)

Start the interactive stories:

```bash
npm run -w packages/naytak-react-ui ladle
```

Build static stories for preview/deploy:

```bash
npm run -w packages/naytak-react-ui ladle:build
```

## Usage

```tsx
import { Button } from "@naytak/react-ui";

export default function Example() {
  return (
    <div>
      <Button>Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="ghost">Ghost</Button>
    </div>
  );
}
```

### Content (with fluid option)

`Content` wraps page content using the internal `Container`. Use `fluid` to span full width, or omit for a centered max-width layout.

```tsx
import { Content } from "@naytak/react-ui";

export default function Page() {
  return (
    <>
      {/* Default: centered content with max-width */}
      <Content>
        <h1>Page Title</h1>
        <p>This area is constrained to a readable max width.</p>
      </Content>

      {/* Fluid: full-width content */}
      <Content fluid>
        <h2>Full Width Section</h2>
        <p>This section spans the entire viewport width.</p>
      </Content>
    </>
  );
}
```

### Container (direct usage)

Use `Container` to wrap any content. By default it centers content with a max-width; set `fluid` to span full width.

```tsx
import { Grid, GridItem } from "@naytak/react-ui";

export default function Sections() {
  return (
    <>
      {/* Default: centered with max-width */}
      <Grid container>
        <GridItem xs={12} md={2} lg={2} spacing={0.5}>
          <h2>Constrained Section</h2>
          <p>Centered with a readable maximum width.</p>
        </GridItem>
      </Grid>

      {/* Fluid: full-width */}
      <Grid container fluid>
        <GridItem xs={12} md={2} lg={2} spacing={0.5}>
          <h2>Full Width Banner</h2>
          <p>Stretches across the entire viewport.</p>
        </GridItem>
      </Grid>
    </>
  );
}
```

## CSS

Import the library’s bundled styles once in your app. Choose either export:

```ts
// Preferred consolidated CSS
import "naytak-react-ui/index.css";

// Compatibility alias (same content)
import "naytak-react-ui/styles.css";
```

Component-level CSS is bundled via the library entry, so a single import is sufficient.

## Publish

- Update `version` in the package.
- Ensure `peerDependencies` for `react` and `react-dom` match your target versions.
- Run `npm publish --access public` from `packages/naytak-react-ui`.
