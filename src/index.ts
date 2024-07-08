import { run } from "happy-css-modules";
import type { Plugin } from "vite";

export type Options = Omit<Parameters<typeof run>[0], "watch">;

export default function happyCssModules(opts: Options): Plugin {
  const declarationMap = opts?.declarationMap ?? true;

  const runnerOptions = {
    watch: false,
    declarationMap,
    ...opts,
  };

  return {
    name: "happy-css-modules",
    buildStart: (buildStartLogs) => {
      const logLevel =
        opts.logLevel ||
        (buildStartLogs.logLevel === "warn"
          ? undefined
          : buildStartLogs.logLevel) ||
        "silent";

      return run({ ...runnerOptions, logLevel });
    },
    handleHotUpdate: () => {
      return run(runnerOptions);
    },
  };
}
