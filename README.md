# @forsakringskassan/vitest-config

> Försäkringskassan shareable config for Vitest

## Installation

`npm install --save-dev @forsakringskassan/vitest-config`

You should not have vitest installed in your application, this preset bundles it. If you have it installed since earlier you can uninstall it:

`npm rm vitest`

## Usage

`vite.config.mts`

```diff
import { defineConfig } from "vitest/config";
+ import { defineTestConfig } from "@forsakringskassan/vitest-config";

export default defineConfig({
+    test: defineTestConfig(),
});
```

### Override default settings

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
