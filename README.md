# @forsakringskassan/vitest-config

> Försäkringskassan shareable config for Vitest

## Installation

`npm install --save-dev @forsakringskassan/vitest-config`

You should not have vitest installed in your application, this preset bundles it. If you have it installed since earlier you can uninstall it:

`npm rm vitest`

## Usage in vite.config.mts

Use this when you keep your Vitest configuration in same file as Vite.

```typescript
/// <reference types="vitest/config" />
import { defineConfig } from "vite";
import { defineTestConfig } from "@forsakringskassan/vitest-config";

export default defineConfig({
    test: defineTestConfig(),
});
```

## Usage in vitest.config.mts

Use this when you want to keep Vitest config separate from Vite.

```typescript
import { defineTestConfig } from "@forsakringskassan/vitest-config";

export default defineTestConfig();
```
