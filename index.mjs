import provider from "@vitest/coverage-v8";

export function defineTestConfig() {
    return {
        environment: "jsdom",
        coverage: {
            provider: /** @type {"v8"} */ (/** @type {unknown} */ (provider)),
            reporter: ["text", "text-summary", "lcov"],
            include: ["src/**/*.[jt]s"],
            exclude: ["**/index.[jt]s"],
        },
    };
}
