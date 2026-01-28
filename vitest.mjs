#!/usr/bin/env node

import { spawn } from "node:child_process";
import path from "node:path";
import { fileURLToPath } from "node:url";

const pkgPath = path.dirname(
    fileURLToPath(import.meta.resolve("vitest/package.json")),
);
const binary = path.join(pkgPath, "vitest.mjs");

/* eslint-disable-next-line sonarjs/no-os-command-from-path -- want to execute node from PATH */
spawn("node", [binary, ...process.argv.slice(2)], {
    stdio: "inherit",
}).on("exit", (code) => {
    process.exit(code);
});
