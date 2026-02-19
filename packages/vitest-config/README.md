# @forsakringskassan/vitest-config

> Forsakringskassan shareable config for Vitest

Vitest preset for Försäkringskassan.

This preset is for using with NodeJS projects.
If you need JSDOM use `@forsakringskassan/vitest-config-jsdom`.

## Installation

Install Vitest and this preset:

```bash
npm install --save-dev vitest @forsakringskassan/vitest-config
```

`vitest` must be also installed in your project; we do not support [global mode](https://vitest.dev/config/globals).

## Usage

`vite.config.mts`

```diff
 import { defineConfig } from "vitest/config";
+import { defineTestConfig } from "@forsakringskassan/vitest-config";

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
