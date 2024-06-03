# vite-plugin-happy-css-modules

![NPM Version](https://img.shields.io/npm/v/vite-plugin-happy-css-modules)
![GitHub License](https://img.shields.io/github/license/koyashiro/vite-plugin-happy-css-modules)

Vite plugin for [happy-css-modules](https://github.com/mizdra/happy-css-modules).

## Installation

```sh
npm i -D happy-css-modules vite-plugin-happy-css-modules
```

## Usage

```typescript
// vite.config.js
import { defineConfig } from "vite";
import happyCssModules from "vite-plugin-happy-css-modules";

export default defineConfig({
  plugins: [happyCssModules({ pattern: "src/**/*.module.{css,scss,less}" })],
});
```
