module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
    "prettier",
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parser: "@typescript-eslint/parser",
  plugins: ["react-refresh"],
  rules: {
    "react-refresh/only-export-components": ["warn", { allowConstantExport: true }],
    // 세미콜론이 없으면 에러로 취급한다.
    semi: "error",
    // 기존 프로젝트에서는 'warn'으로 취급되지만, 'error'로 설정하면 에러로 취급한다.
    "@typescript-eslint/no-unused-vars": "error",
  },
};
