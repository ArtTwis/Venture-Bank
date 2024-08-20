import js from "@eslint/js";
import eslintPluginPrettier from "eslint-plugin-prettier";

export default [
  js.configs.recommended,
  {
    plugins: {
      prettier: eslintPluginPrettier,
    },
    rules: {
      "no-unused-vars": "warn",
      "no-undef": "warn",
      "prefer-const": ["error", { ignoreReadBeforeAssign: true }],
      "prettier/prettier": "error",
    },
    ignores: ["node_modules", "dist", "build"],
  },
  {
    settings: {
      prettier: {
        singleQuote: false,
        bracketSpacing: true,
        tabWidth: 2,
        semi: true,
        trailingComma: "es5",
        bracketSameLine: false,
        singleAttributePerLine: true,
      },
    },
  },
];
