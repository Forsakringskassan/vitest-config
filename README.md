# @forsakringskassan/vitest-config

> Försäkringskassan shareable config for Vitest

## Installation

`npm install --save-dev @forsakringskassan/vitest-config`

In vitest.config.js:

```diff
+import { defineTestConfig } from "@forsakringskassan/vitest-config";
...
return {
    ...
+    test: defineTestConfig(),
}
```

You should not have vitest installed in your application, this preset bundles it. If you have it installed since earlier you can uninstall it:

`npm rm vitest`
