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

interface Fetch {
  fetch: typeof globalThis.fetch;
  Headers: typeof globalThis.Headers;
  Request: typeof globalThis.Request;
  Response: typeof globalThis.Response;
}

const nodeVersion = process.versions.node.split('.')
const nodeMajor = Number(nodeVersion[0])
const nodeMinor = Number(nodeVersion[1])

let uniFetch: Fetch;

// We are ignoring coverage here because in Node 18 fetch functionalities are globally available
// and hence the else statement is never reached.
/* istanbul ignore else */
if (nodeMajor >= 18) {
  uniFetch = globalThis;
} else if (nodeMajor > 16 || (nodeMajor === 16 && nodeMinor >= 5)) {
  // TODO: Type this as undici once it has the same type signature as the globals
  uniFetch = require("undici");
} else {
  // TODO: Fix this type casting once node-fetch has the same type signature as the globals
  uniFetch = {
    fetch: require("node-fetch").default as typeof globalThis.fetch,
    Headers: require("node-fetch").Headers as typeof globalThis.Headers,
    Request: require("node-fetch").Request as typeof globalThis.Request,
    Response: require("node-fetch").Response as typeof globalThis.Response,
  };
}

export default uniFetch.fetch;
export const { fetch, Request, Response, Headers } = uniFetch;
