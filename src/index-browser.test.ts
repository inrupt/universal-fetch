//
// Copyright Inrupt Inc.
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

// In the browser environment we always expect fetch
// and the related globals to exist.

globalThis.fetch = (() => {}) as unknown as typeof fetch;
globalThis.Headers = (() => {}) as unknown as typeof Headers;
globalThis.Request = (() => {}) as unknown as typeof Request;
globalThis.Response = (() => {}) as unknown as typeof Response;

// We need to set the globals before importing the library
// as this changes whether the library will use the global
// fetch or import it from undici
// eslint-disable-next-line import/first
import * as uniFetch from "./index-browser";

describe("exports", () => {
  it("Should always have fetch, headers, request and response as functions", () => {
    expect(typeof uniFetch.default).toBe("function");
    expect(typeof uniFetch.fetch).toBe("function");
    expect(typeof uniFetch.Headers).toBe("function");
    expect(typeof uniFetch.Request).toBe("function");
    expect(typeof uniFetch.Response).toBe("function");
  });

  it("Should equal the globals when they are defined", () => {
    expect(typeof uniFetch.default).toBe("function");
    expect(typeof uniFetch.fetch).toBe("function");
    expect(typeof uniFetch.Headers).toBe("function");
    expect(typeof uniFetch.Request).toBe("function");
    expect(typeof uniFetch.Response).toBe("function");
  });

  it("Should have default export as fetch", () => {
    expect(uniFetch.default).toEqual(uniFetch.fetch);
  });
});
