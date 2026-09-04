# @forsakringskassan/vitest-config-happy-dom

> Forsakringskassan shareable config for Vitest

Vitest preset for Försäkringskassan.

This preset is for using with browser projects.
If you do not need Happy Dom use `@forsakringskassan/vitest-config`.

## Installation

Install Vitest and this preset:

```bash
npm install --save-dev vitest @forsakringskassan/vitest-config-happy-dom
```

`vitest` must be also installed in your project; we do not support [global mode](https://vitest.dev/config/globals).

## Usage

`vite.config.mts`

```diff
 import { defineConfig } from "vitest/config";
+import { defineTestConfig } from "@forsakringskassan/vitest-config-happy-dom";

 export default defineConfig({
+    test: defineTestConfig(),
 });
```

### Override defaults

You can pass your own config to `defineTestConfig` to override defaults:

`vite.config.mts`

```diff
 import { defineConfig } from "vitest/config";
 import { defineTestConfig } from "@forsakringskassan/vitest-config-happy-dom";

 export default defineConfig({
     test: defineTestConfig({
+        environment: "node",
     }),
 });
```

### Setup

This preset installs a setup file which:

- Configures `@fkui/logic` (if present) to reset element id between tests.
- Configures `@vue/test-utils` (if present) to automatically unmount (destroy) any mounted wrapper.
- Configures `@vue/test-utils` (if present) to treat Vue.js warnings as errors.

To disable this explicitly set `setupFiles` to an empty array:

```diff
 import { defineConfig } from "vitest/config";
 import { defineTestConfig } from "@forsakringskassan/vitest-config-happy-dom";

 export default defineConfig({
     test: defineTestConfig({
+        setupFiles: [],
     }),
 });
```

If you need additional setup, you can explicitly include `@forsakringskassan/vitest-config-happy-dom/setup` in `setupFiles` (or import it directly from your custom setup file):

```diff
 import { defineConfig } from "vitest/config";
 import { defineTestConfig } from "@forsakringskassan/vitest-config-happy-dom";

 export default defineConfig({
     test: defineTestConfig({
+        setupFiles: [
+            "@forsakringskassan/vitest-config-happy-dom/setup"],
+            "./custom-setup.mts",
+        ],
     }),
 });
```
