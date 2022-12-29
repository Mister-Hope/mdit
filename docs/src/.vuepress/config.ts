import { container } from "@mdit/plugin-container";
import { defineUserConfig } from "vuepress";
import { searchProPlugin } from "vuepress-plugin-search-pro";
import theme from "./theme";

export default defineUserConfig({
  base: "/mdit-plugins/",

  locales: {
    "/": {
      lang: "en-US",
      title: "Markdown It Plugins",
      description: "Some powerful markdown-it plugins",
    },
    "/zh/": {
      lang: "zh-CN",
      title: "Markdown It 插件",
      description: "一些强大的 markdown-it 插件",
    },
  },

  markdown: {
    code: {
      lineNumbers: 20,
    },
  },

  extendsMarkdown: (md) => {
    md.use(container, {
      name: "hint",
      openRender: (tokens, index, _options): string => {
        const token = tokens[index];

        // resolve info (title)
        let info = token.info.trim().slice(4).trim();

        return `<div class="custom-container hint">\n<p class="custom-container-title">${
          info || "Hint"
        }</p>\n`;
      },
    });
  },

  theme,

  plugins: [searchProPlugin({ indexContent: true })],
});
