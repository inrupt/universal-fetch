# Changelog

This project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

The following changes have been implemented but not released yet:

## [Unreleased]

The following changes have been implemented but not released yet:

## 0.1.0 - 2022-12-14

### New features

Introducing our fetch shim, where we use node-fetch as a polyfill on node 14,
undici's fetch on node 16, and in browsers, we just expose the native fetch API.

This package aims to replace our usage of cross-fetch and to become our go-to
way of working with fetch across different environments.
