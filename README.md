# @forsakringskassan/vitest-config

> Forsakringskassan shareable config for Vitest

## Contents

This monorepo contains the following presets:

- @forsakringskassan/vitest-config
- @forsakringskassan/vitest-config-jsdom

The jsdom preset is recommended when writing tests for web applications such as Vue or Svelte.

## Installation

Install Vitest and the preset you want:

```bash
npm install --save-dev vitest @forsakringskassan/vitest-config
```

For a jsdom environment:

```bash
npm install --save-dev vitest @forsakringskassan/vitest-config-jsdom
```

`vitest` must be also installed in your project; we do not support [global mode](https://vitest.dev/config/globals).

## Usage

`vite.config.mts`

```diff
import { defineConfig } from "vitest/config";
+ import { defineTestConfig } from "@forsakringskassan/vitest-config";

export default defineConfig({
+    test: defineTestConfig(),
});
```

### Use the jsdom preset

`vite.config.mts`

```diff
import { defineConfig } from "vitest/config";
+ import { defineTestConfig } from "@forsakringskassan/vitest-config-jsdom";

export default defineConfig({
+    test: defineTestConfig(),
});
```

### Override defaults

You can pass your own config to `defineTestConfig` to override defaults:

`vite.config.mts`

```diff
import { defineConfig } from "vitest/config";
import { defineTestConfig } from "@forsakringskassan/vitest-config";

export default defineConfig({
    test: defineTestConfig({
+        environment: "node",
    }),
});
```
