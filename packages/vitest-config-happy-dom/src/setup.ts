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

async function setupFkui(): Promise<void> {
    const { ElementIdService } = await import("@fkui/logic");

    /* reset id generation to ensure we get a stable result no matter which/what
     * order tests are run */
    afterEach(() => {
        ElementIdService.reset();
    });
}

if (tryImport("@vue/test-utils")) {
    await setupTestUtils();
}

if (tryImport("@fkui/logic")) {
    await setupFkui();
}
