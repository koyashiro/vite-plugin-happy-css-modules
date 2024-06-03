import swc from "@rollup/plugin-swc";
import typescript from "@rollup/plugin-typescript";

/** @type {import("rollup").RollupOptions} */
export default {
  input: "src/index.ts",
  output: [
    {
      file: "dist/index.cjs",
      format: "cjs",
    },
    {
      file: "dist/index.mjs",
      format: "es",
    },
  ],
  plugins: [typescript(), swc()],
  external: ["happy-css-modules"],
};
