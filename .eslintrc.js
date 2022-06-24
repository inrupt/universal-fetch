module.exports = {
  extends: ["@inrupt/eslint-config-lib"],
  rules: {
    // Since we are re-exporting fetch, Request, Response, Headers
    // shadowing crops up a lot in this package
    "no-shadow": "off",
    "global-require": "off",
    "@typescript-eslint/no-var-requires": "off",
  },
};
