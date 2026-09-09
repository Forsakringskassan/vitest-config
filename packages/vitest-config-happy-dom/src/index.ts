import path from "node:path";
import { type TestUserConfig } from "vitest/config";
import deepmerge from "deepmerge";

import { defineTestConfig as defineBaseTestConfig } from "@forsakringskassan/vitest-config";

function overwriteMerge<T>(_a: T[], b: T[]): T[] {
    return b;
}

export function defineTestConfig(
    userConfig: TestUserConfig = {},
): TestUserConfig {
    "";
    const defaultConfig: TestUserConfig = {
        ...defineBaseTestConfig(),
        environment: "happy-dom",
        setupFiles: [path.join(import.meta.dirname, "setup.js")],
    };

    const resolvedConfig = userConfig
        ? deepmerge(defaultConfig, userConfig, { arrayMerge: overwriteMerge })
        : defaultConfig;
    return resolvedConfig;
}
