function tryImport(specifier: string): boolean {
    try {
        import.meta.resolve(specifier);
        return true;
    } catch {
        return false;
    }
}

async function setupTestUtils(): Promise<void> {
    const { config } = await import("@vue/test-utils");

    /* install a global warnHandler treating any warning as an error */
    config.global.config.warnHandler = (msg, _instance, trace) => {
        throw new Error(`Vue warning: ${msg}\n${trace}`);
    };
}

if (tryImport("@vue/test-utils")) {
    await setupTestUtils();
}
