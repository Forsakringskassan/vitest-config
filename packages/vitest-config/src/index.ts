import provider from "@vitest/coverage-v8";

import { type TestUserConfig } from "vitest/config";
import deepmerge from "deepmerge";

/* https://vitest.dev/guide/reporters.html#github-actions-reporter */
const isGithub = process.env.GITHUB_ACTIONS === "true";
const githubReporter = isGithub ? ["github-actions"] : [];

function overwriteMerge<T>(_a: T[], b: T[]): T[] {
    return b;
}

export function defineTestConfig(
    userConfig: TestUserConfig = {},
): TestUserConfig {
    const defaultConfig: TestUserConfig = {
        /* up to 10x faster on windows */
        pool: "threads",
        coverage: {
            provider: provider as unknown as "v8",
            reporter: ["text", "text-summary", "lcov"],
            include: ["src/**/*.[jt]s"],
            exclude: ["**/index.[jt]s"],
        },
        reporters: [
            "default",
            ["junit", { suiteName: "Vitest tests" }],
            ...githubReporter,
        ],
        outputFile: "./test-results/vitest-junit.xml",
    };

    const resolvedConfig = userConfig
        ? deepmerge(defaultConfig, userConfig, { arrayMerge: overwriteMerge })
        : defaultConfig;
    return resolvedConfig;
}
