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
import type * as undici from 'undici';

const uniFetch = (
    typeof globalThis.fetch === 'function' &&
    typeof globalThis.Headers === 'function' &&
    typeof globalThis.Request === 'function' &&
    typeof globalThis.Response === 'function'
  ) ? globalThis : require('undici') as typeof undici;

export default uniFetch.fetch as typeof globalThis.fetch;
export const fetch = uniFetch.fetch as typeof globalThis.fetch;
export const Request = uniFetch.Request as typeof globalThis.Request;
export const Response = uniFetch.Response as typeof globalThis.Response;
export const Headers = uniFetch.Headers as typeof globalThis.Headers;
