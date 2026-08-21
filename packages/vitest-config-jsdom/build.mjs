import { build } from "esbuild";
import pkg from "./package.json" with { type: "json" };

await build({
    entryPoints: ["./src/index.ts", "./src/setup.ts"],
    outdir: "./dist",
    minify: false,
    bundle: true,
    platform: "node",
    format: "esm",
    target: "node22",
    external: pkg.externalDependencies,
});
