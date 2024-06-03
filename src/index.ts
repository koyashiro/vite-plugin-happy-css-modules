import { run } from "happy-css-modules";
import type { Plugin } from "vite";

const DEFAULT_PATTERN = "**/*.module.{css,scss,less}";

export type Options = Omit<Parameters<typeof run>[0], "pattern" | "watch"> & {
  pattern?: string;
};

export default function happyCssModules(opts?: Options): Plugin {
  const pattern = opts?.pattern ?? DEFAULT_PATTERN;
  const declarationMap = opts?.declarationMap ?? true;
  const logLevel = opts?.logLevel;

  const runnerOptions = {
    pattern,
    watch: false,
    declarationMap,
    logLevel,
    ...opts,
  };

  return {
    name: "happy-css-modules",
    buildStart: () => {
      return run(runnerOptions);
    },
    handleHotUpdate: () => {
      return run(runnerOptions);
    },
  };
}
