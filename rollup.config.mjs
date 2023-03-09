//
// Copyright 2022 Inrupt Inc.
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal in
// the Software without restriction, including without limitation the rights to use,
// copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the
// Software, and to permit persons to whom the Software is furnished to do so,
// subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED,
// INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A
// PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
// HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
// OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
// SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
//

// The following is only possible from Node 18 onwards
// import pkg from "./package.json" assert { type: "json" };

// Until we only support Node 18+, this should be used instead
// (see https://rollupjs.org/guide/en/#importing-packagejson)
import { createRequire } from "node:module";

import typescript from "rollup-plugin-typescript2";
import { readFileSync } from "fs";

const require = createRequire(import.meta.url);
const pkg = require("./package.json");

// Hack to be able to read tsconfig and append an excludes rule:
// Note: this does only remove single line comments.
const tsconfig = JSON.parse(
  readFileSync("./tsconfig.json", "utf-8").replace(/^\s*\/\/\s.*$/gm, "")
);

const plugins = [
  typescript({
    // Use our own version of TypeScript, rather than the one bundled with the plugin:
    typescript: require("typescript"),
    tsconfigOverride: {
      exclude: tsconfig.exclude.concat("src/**/*.test.ts"),
      compilerOptions: {
        module: "esnext",
        removeComments: true,
      },
    },
  }),
];

export default [
  {
    input: "./src/index.ts",
    output: [
      {
        file: pkg.main,
        format: "cjs",
        exports: "named",
      },
      {
        file: pkg.module,
        format: "esm",
        exports: "named",
      },
      {
        file: "dist/index.mjs",
        format: "esm",
        preserveModules: false,
        exports: "named",
      },
    ],
    plugins,
    external: [],
  },
  {
    input: "./src/index-browser.ts",
    output: [
      {
        file: "dist/index-browser.js",
        format: "cjs",
        exports: "named",
      },
      {
        file: "dist/index-browser.es.js",
        format: "esm",
        exports: "named",
      },
      {
        file: "dist/index-browser.mjs",
        format: "esm",
        preserveModules: false,
        exports: "named",
      },
      {
        dir: "umd",
        format: "umd",
        name: "UniversalFetch",
        exports: "named",
      },
    ],
    plugins,
    external: [],
  },
];
