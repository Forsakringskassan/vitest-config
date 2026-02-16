import { type TestUserConfig } from "vitest/config";
import deepmerge from "deepmerge";

import { defineTestConfig as defineBaseTestConfig } from "../../vitest-config/src/index";

function overwriteMerge<T>(_a: T[], b: T[]): T[] {
    return b;
}

export function defineTestConfig(
    userConfig: TestUserConfig = {},
): TestUserConfig {
    "";
    const defaultConfig: TestUserConfig = {
        ...defineBaseTestConfig(),
        environment: "jsdom",
    };

    const resolvedConfig = userConfig
        ? deepmerge(defaultConfig, userConfig, { arrayMerge: overwriteMerge })
        : defaultConfig;
    return resolvedConfig;
}
