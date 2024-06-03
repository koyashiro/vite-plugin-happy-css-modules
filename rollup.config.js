import babel from "@rollup/plugin-babel";
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
  plugins: [typescript(), babel({ babelHelpers: "bundled" })],
  external: ["happy-css-modules"],
};
