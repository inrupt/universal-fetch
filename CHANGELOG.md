# Changelog

This project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

The following changes have been implemented but not released yet:

## [Unreleased]

## [1.0.3](https://github.com/inrupt/universal-fetch/releases/tag/v1.0.3) - 2023-08-07

### Bugfixes

- Adds a `browser` entry to the exports field. This ensures that esbuild correctly
  resolves to the correct files when generating browser bundles.

## [1.0.2](https://github.com/inrupt/universal-fetch/releases/tag/v1.0.2) - 2023-07-05

### Bugfixes

- Adds a relative `./` paths in the browser entry for the package.json. This
  ensures that rollup correctly resolves to the correct files when generating
  browser bundles.

## [1.0.1](https://github.com/inrupt/universal-fetch/releases/tag/v1.0.1) - 2023-03-13

### Bugfixes

- Fixes ESM build on Node 16: an incorrect use of dynamic imports broke the ESM
  build on Node 16.

## [1.0.0](https://github.com/inrupt/universal-fetch/releases/tag/v1.0.0) - 2023-03-09

### New features

Introducing our fetch shim, where we use node-fetch as a polyfill on node 14,
undici's fetch on node 16, and in browsers, we just expose the native fetch API.

This package aims to replace our usage of cross-fetch and to become our go-to
way of working with fetch across different environments.
