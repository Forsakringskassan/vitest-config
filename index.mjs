export function defineTestConfig() {
    return {
        environment: "jsdom",
        coverage: {
            provider: "v8",
            reporter: ["text", "text-summary", "lcov"],
            include: ["src/**/*.[jt]s"],
            exclude: ["**/index.[jt]s"],
        },
    };
}
