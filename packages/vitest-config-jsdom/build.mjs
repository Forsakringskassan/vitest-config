import { copyFile } from "node:fs/promises";
import { build } from "esbuild";

await build({
    entryPoints: ["./src/index.ts"],
    outdir: "./dist",
    minify: false,
    bundle: true,
    platform: "node",
    format: "esm",
    target: "node22",
});

await copyFile("./src/index.d.ts", "./dist/index.d.ts");
