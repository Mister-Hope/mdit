import { existsSync, writeFileSync, readdirSync } from "node:fs";
import { join, resolve } from "node:path";
import { version } from "../package.json";

const packagesDir = resolve(process.cwd(), "packages");

const files = readdirSync(packagesDir);

files.forEach((pkgName) => {
  if (pkgName.charAt(0) === ".") return;

  const desc = `${pkgName} plugin for MarkdownIt`;
  const pkgPath = join(packagesDir, pkgName, "package.json");

  // generate package.json
  if (!existsSync(pkgPath)) {
    const pkgJSON = {
      name: `@mdit/plugin-${pkgName}`,
      version,
      description: desc,
      keywords: [
        "markdownit",
        "markdown-it",
        "markdown-it-plugin",
        pkgName,
      ],
      homepage: `https://github.com/Mister-Hope//mdit-plugins/packages/${pkgName}#readme`,
      bugs: {
        url: "https://github.com/Mister-Hope//mdit-plugins/issues",
      },
      repository: {
        type: "git",
        url: "git+https://github.com/Mister-Hope//mdit-plugins.git",
        directory: `packages/${pkgName}`,
      },
      license: "MIT",
      author: {
        name: "Mr.Hope",
        email: "mister-hope@outlook.com",
        url: "https://mrhope.site",
      },
      main: "lib/index.cjs",
      types: "lib/index.d.ts",
      exports: {
        // eslint-disable-next-line @typescript-eslint/naming-convention
        ".": "./lib/index.mjs",
        // eslint-disable-next-line @typescript-eslint/naming-convention
        "./package.json": "./package.json",
      },
      files: ["lib"],
      scripts: {
        build: "rollup -c",
        clean: "rimraf ./lib ./*.tsbuildinfo",
        dev: "pnpm dev:ts",
        // eslint-disable-next-line @typescript-eslint/naming-convention
        "dev:ts": "tsc -b tsconfig.build.json --watch",
      },
      publishConfig: {
        access: "public",
      },
    };

    writeFileSync(pkgPath, `${JSON.stringify(pkgJSON, null, 2)}\n`);
  }

  const readmePath = join(packagesDir, pkgName, "README.md");

  // generate README.md
  if (!existsSync(readmePath))
    writeFileSync(
      readmePath,
      `\
# @mdit/plugin-${pkgName}

[![Version](https://img.shields.io/npm/v/@mdit/plugin-${pkgName}/next.svg?style=flat-square&logo=npm) ![Downloads](https://img.shields.io/npm/dm/@mdit/plugin-${pkgName}.svg?style=flat-square&logo=npm) ![Size](https://img.shields.io/bundlephobia/min/@mdit/plugin-${pkgName}?style=flat-square&logo=npm)](https://www.npmjs.com/package/@mdit/plugin-${pkgName})

${desc}.

## Install

\`\`\`bash
# pnpm
pnpm add -D @mdit/plugin-${pkgName}
# npm
npm i -D @mdit/plugin-${pkgName}
# yarn
yarn add -D @mdit/plugin-${pkgName}
\`\`\`

---

## 安装

\`\`\`bash
# pnpm
pnpm add -D @mdit/plugin-${pkgName}
# npm
npm i -D @mdit/plugin-${pkgName}
# yarn
yarn add -D @mdit/plugin-${pkgName}
\`\`\`
`
    );
});
