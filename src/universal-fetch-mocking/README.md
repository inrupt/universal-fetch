# @inrupt/universal-fetch-mocking

This package contains utilities to help setup automated testing environments.

## Installation

1. `npm install --save-dev @inrupt/universal-fetch-mocking`

## Usage:

This module will be used by the @inrupt/universal-fetch module to provide the mocked fetch object is `enableMocking` is true.

## How it Works

1.  Developers need to test their code that uses the new universal-fetch package
2.  Developer writes a 'describe' case with multiple 'it' cases to test their code
3.  Each 'it' needs a different function of fetch mocked to respond, so we push each new mock into the registeredMocks array
4.  Use the MockContext to track the number of times a fetch function has been called, and return the new MockContext to the test runner
5. In your test case be sure to clearAll
