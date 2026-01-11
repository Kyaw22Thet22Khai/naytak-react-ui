# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ["./tsconfig.node.json", "./tsconfig.app.json"],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
]);
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from "eslint-plugin-react-x";
import reactDom from "eslint-plugin-react-dom";

export default defineConfig([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs["recommended-typescript"],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ["./tsconfig.node.json", "./tsconfig.app.json"],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
]);
```

## Continuous Integration

This repository includes a GitHub Actions workflow that runs library tests and builds Ladle stories on every push and pull request. See [\.github/workflows/ci.yml](.github/workflows/ci.yml).

The workflow:

- Installs dependencies using `npm ci`.
- Runs tests in the library workspace: `npm run -w packages/naytak-react-ui test -- --run`.
- Builds Ladle static stories: `npm run -w packages/naytak-react-ui ladle:build`.
- Uploads the stories build as an artifact named `ladle-build`.

Push this repository to GitHub to activate CI.

## Using the UI library

This repo contains a local workspace package `@naytak/react-ui` in `packages/naytak-react-ui`.

Add it to your app (workspace link shown):

```json
{
  "dependencies": {
    "@naytak/react-ui": "workspace:*"
  }
}
```

Basic usage in your app:

```tsx
import { Button } from "@naytak/react-ui";

export default function App() {
  return <Button>Click me</Button>;
}
```

### CSS

Import the library’s bundled styles once in your app. Choose either export:

```ts
// Preferred consolidated CSS
import "@naytak/react-ui/index.css";

// Compatibility alias (same content)
import "@naytak/react-ui/styles.css";
```

Only a single import is needed; component styles are bundled via the library entry.
