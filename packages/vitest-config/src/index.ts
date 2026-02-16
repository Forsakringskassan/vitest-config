import provider from "@vitest/coverage-v8";

import { type TestUserConfig } from "vitest/config";
import deepmerge from "deepmerge";

function overwriteMerge<T>(_a: T[], b: T[]): T[] {
    return b;
}

export function defineTestConfig(
    userConfig: TestUserConfig = {},
): TestUserConfig {
    const defaultConfig: TestUserConfig = {
        coverage: {
            provider: provider as unknown as "v8",
            reporter: ["text", "text-summary", "lcov"],
            include: ["src/**/*.[jt]s"],
            exclude: ["**/index.[jt]s"],
        },
    };

    const resolvedConfig = userConfig
        ? deepmerge(defaultConfig, userConfig, { arrayMerge: overwriteMerge })
        : defaultConfig;
    return resolvedConfig;
}
