import { afterEach } from "vitest";

function tryImport(specifier: string): boolean {
    try {
        import.meta.resolve(specifier);
        return true;
    } catch {
        return false;
    }
}

async function setupTestUtils(): Promise<void> {
    const { config, disableAutoUnmount, enableAutoUnmount } =
        await import("@vue/test-utils");

    /* install a global warnHandler treating any warning as an error */
    config.global.config.warnHandler = (msg, _instance, trace) => {
        throw new Error(`Vue warning: ${msg}\n${trace}`);
    };

    /* automatically destroy all vue wrappers between tests */
    disableAutoUnmount();
    enableAutoUnmount(afterEach);
}

if (tryImport("@vue/test-utils")) {
    await setupTestUtils();
}
