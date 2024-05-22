import { readdirSync } from "node:fs";
import { request } from "node:https";
import { resolve } from "node:path";

import ora from "ora";

const packagesDir = resolve(process.cwd(), "packages");
const packages = readdirSync(packagesDir);

export const sync = (): Promise<void[]> => {
  const promises = packages.map((packageName) =>
    // eslint-disable-next-line import/dynamic-import-chunkname
    import(`../packages/${packageName}/package.json`, {
      assert: { type: "json" },
    }).then(
      ({ default: content }: { default: Record<string, unknown> }) =>
        new Promise<void>((resolve) => {
          const req = request(
            new URL(`https://npmmirror.com/sync/${content["name"] as string}/`),
          );

          req.write("");

          req.on("close", () => {
            resolve();
          });

          req.end();
        }),
    ),
  );

  return Promise.all(promises);
};

const npmmirrorSpinner = ora("Syncing npmmirror.com").start();

void sync().then(() => {
  npmmirrorSpinner.succeed();

  ora("Release complete").succeed();
});
