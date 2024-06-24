module.exports = {
  env: {
    browser: true,
    es2021: true,
    "jest/globals": true,
    node: true,
  },
  extends: ["eslint:recommended", "prettier"],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  rules: {
    "max-len": ["error", { ignoreComments: true }],
  },
  plugins: ["jest"],
};
