import { run } from "happy-css-modules";
import type { PluginOption } from "vite";

const DEFAULT_PATTERN = "**/*.module.{css,scss,less}";

export type Options = Omit<Parameters<typeof run>[0], "pattern" | "watch"> & {
  pattern?: string;
};

export default function happyCssModules(options?: Options): PluginOption {
  const pattern = options?.pattern || DEFAULT_PATTERN;
  const logLevel = options?.logLevel;

  return {
    name: "happy-css-modules",
    buildStart: () => {
      return run({
        pattern,
        watch: false,
        logLevel,
        ...options,
      });
    },
    handleHotUpdate: () => {
      return run({
        pattern,
        watch: false,
        logLevel,
        ...options,
      });
    },
  };
}
