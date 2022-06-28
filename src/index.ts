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

function supportsFetch(pkg: Partial<Fetch>): pkg is Fetch {
  return (
    typeof pkg.fetch === "function" &&
    typeof pkg.Headers === "function" &&
    typeof pkg.Request === "function" &&
    typeof pkg.Response === "function"
  );
}

// We are ignoring coverage here because in Node 18 fetch functionalities are globally available
// and hence the second turnery is not checked.
/* istanbul ignore next */
const uniFetch: Fetch = supportsFetch(globalThis)
  ? globalThis
  : supportsFetch(require("undici"))
  ? // TODO: Type this as undici once it has the same type signature as the globals
    require("undici")
  : // TODO: Fix this type casting once node-fetch has the same type signature as the globals
    {
      fetch: require("node-fetch").default as typeof globalThis.fetch,
      Headers: require("node-fetch").Headers as typeof globalThis.Headers,
      Request: require("node-fetch").Request as typeof globalThis.Request,
      Response: require("node-fetch").Response as typeof globalThis.Response,
    };

export default uniFetch.fetch;
export const { fetch, Request, Response, Headers } = uniFetch;
