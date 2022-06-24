/*
 * Copyright 2022 Inrupt Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal in
 * the Software without restriction, including without limitation the rights to use,
 * copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the
 * Software, and to permit persons to whom the Software is furnished to do so,
 * subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED,
 * INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A
 * PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
 * OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
 * SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

// Testing for node version < 14.x
// @ts-ignore
delete globalThis.fetch;
// @ts-ignore
delete globalThis.Headers;
// @ts-ignore
delete globalThis.Request;
// @ts-ignore
delete globalThis.Response;

import * as uniFetch from "./index";

describe("exports", () => {
  it("Should always have fetch, headers, request and response as functions", () => {
    expect(uniFetch.default).toBeInstanceOf(Function);
    expect(uniFetch.fetch).toBeInstanceOf(Function);
    expect(uniFetch.Headers).toBeInstanceOf(Function);
    expect(uniFetch.Request).toBeInstanceOf(Function);
    expect(uniFetch.Response).toBeInstanceOf(Function);
  });

  it("Should have default export as fetch", () => {
    expect(uniFetch.default).toEqual(uniFetch.fetch);
  });

  it("Should not equal the globals when they are not defined", () => {
    expect(uniFetch.default).not.toEqual(globalThis.fetch);
    expect(uniFetch.fetch).not.toEqual(globalThis.fetch);
    expect(uniFetch.Headers).not.toEqual(globalThis.Headers);
    expect(uniFetch.Request).not.toEqual(globalThis.Request);
    expect(uniFetch.Response).not.toEqual(globalThis.Response);
  });
});
