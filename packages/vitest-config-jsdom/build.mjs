import { build } from "esbuild";

await build({
    entryPoints: ["./src/index.ts", "./src/setup.ts"],
    outdir: "./dist",
    minify: false,
    bundle: true,
    platform: "node",
    format: "esm",
    target: "node22",
    external: ["@vue/test-utils"],
});
