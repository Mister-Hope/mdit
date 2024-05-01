// @ts-check
import js from "@eslint/js";
import eslintImport from "eslint-plugin-import";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";
import vitest from "eslint-plugin-vitest";
import globals from "globals";
import tseslint from "typescript-eslint";

export default tseslint.config(
  js.configs.recommended,
  ...tseslint.configs.recommendedTypeChecked,
  ...tseslint.configs.stylisticTypeChecked,
  {
    ignores: [
      "**/node_modules/**",
      "coverage/**",
      "packages/*/lib/**",
      "packages/*/src/lib/**",
      "**/.vuepress/.cache/",
      "**/.vuepress/.temp/",
      "**/.vuepress/dist/",
      "**/.vuepress/snippets/",
      "**/__tests__/__fixtures__/**",
    ],
  },
  {
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      parserOptions: {
        parser: tseslint.parser,
        tsconfigDirName: import.meta.dirname,
        project: ["./tsconfig.json"],
        extraFileExtensions: [".vue"],
      },
    },
  },
  {
    files: ["**/*.{cjs,js}"],
    ...tseslint.configs.disableTypeChecked,
  },
  {
    plugins: {
      import: eslintImport,
    },
    rules: {
      curly: ["error", "multi", "consistent"],
      "no-duplicate-imports": "off",
      "no-unmodified-loop-condition": "error",
      "padding-line-between-statements": [
        "error",
        {
          blankLine: "always",
          prev: ["const", "let"],
          next: ["*"],
        },
        {
          blankLine: "any",
          prev: ["const", "let"],
          next: ["const", "let"],
        },
        {
          blankLine: "always",
          prev: ["*"],
          next: ["return"],
        },
      ],
      "sort-imports": [
        "error",
        {
          allowSeparatedGroups: false,
          ignoreDeclarationSort: true,
        },
      ],

      "import/consistent-type-specifier-style": ["error", "prefer-top-level"],
      "import/first": "error",
      "import/newline-after-import": "error",
      "import/no-commonjs": "error",
      "import/no-cycle": "error",
      "import/no-duplicates": ["error", { considerQueryString: true }],
      "import/no-named-default": "error",
      "import/no-restricted-paths": [
        "error",
        {
          zones: [
            {
              target: "packages/*/src/client/**",
              from: "packages/*/src/node/**",
            },
            {
              target: "packages/*/src/node/**",
              from: "packages/*/src/client/**",
            },
          ],
        },
      ],
      "import/order": [
        "error",
        {
          alphabetize: {
            order: "asc",
            orderImportKind: "asc",
          },
          groups: [
            "builtin",
            "external",
            "internal",
            ["parent", "sibling"],
            "index",
            "object",
          ],
          "newlines-between": "always",
        },
      ],
    },
  },
  {
    files: ["**/*.ts"],
    rules: {
      "@typescript-eslint/consistent-type-imports": "warn",
      "@typescript-eslint/explicit-function-return-type": [
        "warn",
        {
          allowHigherOrderFunctions: true,
          allowDirectConstAssertionInArrowFunctions: true,
          allowTypedFunctionExpressions: true,
        },
      ],
      "@typescript-eslint/naming-convention": [
        "warn",
        {
          selector: "default",
          format: ["camelCase"],
          leadingUnderscore: "allowSingleOrDouble",
          trailingUnderscore: "allow",
        },
        {
          selector: ["variable"],
          format: ["camelCase", "PascalCase", "UPPER_CASE"],
          leadingUnderscore: "allowSingleOrDouble",
          trailingUnderscore: "allowSingleOrDouble",
        },
        {
          selector: ["parameter"],
          format: ["camelCase", "PascalCase"],
          leadingUnderscore: "allow",
          trailingUnderscore: "allow",
        },
        // allow locales path like `/zh/` and css property like `line-width`
        {
          selector: ["property"],
          format: null,
          custom: {
            regex: "(^/$|^/.*/$|^[a-z]+(?:-[a-z]+)*?$)",
            match: true,
          },
          filter: "(^/$|^/.*/$|^[a-z]+(?:-[a-z]+)*?$)",
        },
        {
          selector: ["property"],
          format: ["camelCase", "PascalCase", "UPPER_CASE"],
          leadingUnderscore: "allow",
          trailingUnderscore: "allow",
        },
        {
          selector: "import",
          format: ["PascalCase", "camelCase"],
        },
        {
          selector: "typeLike",
          format: ["PascalCase"],
        },
      ],
      "@typescript-eslint/no-explicit-any": ["warn", { ignoreRestArgs: true }],
      "@typescript-eslint/no-unsafe-member-access": "warn",
      "@typescript-eslint/prefer-nullish-coalescing": "warn",
      "@typescript-eslint/prefer-string-starts-ends-with": [
        "error",
        { allowSingleElementEquality: "always" },
      ],
    },
  },
  {
    files: ["scripts/**.ts", "**/gulpfile.js"],
    languageOptions: {
      globals: globals.node,
    },
  },
  {
    files: ["**/*.cjs"],
    languageOptions: {
      globals: globals.node,
    },
    rules: {
      "@typescript-eslint/no-var-requires": "off",
      "import/no-commonjs": "off",
    },
  },
  {
    files: ["**/__tests__/**/*.spec.{j,t}s"],
    plugins: {
      vitest,
    },
    rules: {
      ...vitest.configs.recommended.rules,
    },
  },

  eslintPluginPrettierRecommended,
);