# TypeScript project template for Inrupt projects

This is a template project from which new TypeScript projects can be generated. It sets up the
basic structure for libraries, including linting and tests, from unit testing with Jest through
to end-to-end acceptance testing with Testcafe and Code Sandbox.

## Usage

Short version: search everywhere for "template-ts" and replace all instances with the proper name
of your GitHub repo or NPM module.

In more detail, you will need to:

- Update references in `.github` from "template-ts" to the name of your GitHub repo.
- Update packaging tests in `.github/workflows/cd-packaging-tests/bundler-\*` to point to the
  correct location and relevant exported modules.
- Replace `src/module/index.ts` and `src/index.ts` with your source code (obviously).
- Update `e2e/browser/e2e.testcafe.ts` to include actual tests after exporting functions to test
  from `.codesandbox/sandbox/src/end-to-end-test-helpers.ts`. `pageModels` includes code to
  handle authentication, which can be removed if irrelevant.
- Update `package.json` to fix links to homepage, bugs, etc.
- Update "Exports" to match your directory structure.

## Caveats

- The `.eslintignore` is hacky, but due to the way `.codesandbox` works we can't include
  end-to-end test files in the project in the `tsconfig`. This means we have to explicitly
  ignore the files, or the linter gets upset about trying to lint files outside of the
  project. To be fixed if we can customize the Code Sandbox location.
- This project has CodeQL disabled until it is a public project. You may want to enable CodeQL once
  your project is made public.
- This project also has the publish-website action disabled for the same reason; enable it in your
  project once it is ready to be published.

### ENV variables for your GitHub repo

You will need the following variables for the CD process:

- INRUPT_NPM_TOKEN (provisioned by the Inrupt GitHub Organization)

You will need a number of variables for the CI process, which will allow automated end-to-end tests
to log in and manipulate a Pod. If you do not need to do any logged-in end-to-end tests, you can
skip this and remove the logged-in tests.

End-to-end tests:

- E2E_TEST_ESS_COMPAT_PROD_CLIENT_ID
- E2E_TEST_ESS_COMPAT_PROD_CLIENT_SECRET
- E2E_TEST_ESS_COMPAT_PROD_IDP_URL
- E2E_TEST_ESS_COMPAT_PROD_POD
- E2E_TEST_ESS_COMPAT_PROD_REFRESH_TOKEN
- E2E_TEST_ESS_PROD_CLIENT_ID
- E2E_TEST_ESS_PROD_CLIENT_SECRET
- E2E_TEST_ESS_PROD_COGNITO_PASSWORD
- E2E_TEST_ESS_PROD_COGNITO_USER
- E2E_TEST_ESS_PROD_IDP_URL
- E2E_TEST_ESS_PROD_POD
- E2E_TEST_ESS_PROD_REFRESH_TOKEN
- TESTCAFE_ESS_DEV_COGNITO_PASSWORD
- TESTCAFE_ESS_DEV_COGNITO_USER
- TESTCAFE_ESS_DEV_IDP_URL
- TESTCAFE_ESS_DEV_POD
- TESTCAFE_ESS_PROD_COGNITO_PASSWORD
- TESTCAFE_ESS_PROD_COGNITO_USER
- TESTCAFE_ESS_PROD_IDP_URL
- TESTCAFE_ESS_PROD_POD

## Changelog

See [the release notes](https://github.com/inrupt/template-ts/blob/main/CHANGELOG.md).

## License

MIT © [Inrupt](https://inrupt.com)
