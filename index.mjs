import provider from "@vitest/coverage-v8";

export function defineTestConfig() {
    return {
        environment: "jsdom",
        coverage: {
            /* eslint-disable-next-line object-shorthand -- technical debt: as long as the typecast is needed we cannot use shorthand */
            provider: /** @type {"v8"} */ (/** @type {unknown} */ (provider)),
            reporter: ["text", "text-summary", "lcov"],
            include: ["src/**/*.[jt]s"],
            exclude: ["**/index.[jt]s"],
        },
    };
}
