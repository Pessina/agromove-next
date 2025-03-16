/** @type {import('eslint').Linter.Config} */
module.exports = {
  extends: ["next/core-web-vitals", "prettier"],
  plugins: ["simple-import-sort", "unused-imports", "prettier"],
  rules: {
    "react-hooks/exhaustive-deps": "error",
    "no-unused-vars": "off",
    "unused-imports/no-unused-imports": "error",
    "prettier/prettier": "error",
    "no-undef": "error",
  },
};
