import swc from "@rollup/plugin-swc";

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
  plugins: [swc()],
  external: ["happy-css-modules"],
};
