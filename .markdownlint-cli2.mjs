export default {
  config: {
    default: true,
    MD003: {
      style: "atx",
    },
    MD004: {
      style: "dash",
    },
    MD013: false,
    MD024: {
      siblings_only: true,
    },
    MD033: {
      allowed_elements: ["style", "script", "ColorModeSwitch", "Badge"],
    },
    MD035: {
      style: "---",
    },
    MD040: false,
    MD046: false,
    MD049: false,
  },
  ignores: [
    "**/node_modules/**",
    "**/__tests__/**",
    "**/CHANGELOG.md",
    "LICENSE",
    "**/*.snippet.md",
  ],
};
