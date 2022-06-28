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
import type * as undici from "undici";
import type * as nodeFetch from "node-fetch";

interface Fetch {
  fetch: typeof globalThis.fetch;
  Headers: typeof globalThis.Headers;
  Request: typeof globalThis.Request;
  Response: typeof globalThis.Response;
}

function supportsFetch(pkg: any): pkg is Fetch {
  return typeof pkg.fetch === "function" &&
    typeof pkg.Headers === "function" &&
    typeof pkg.Request === "function" &&
    typeof pkg.Response === "function"
}

// if (supportsFetch(globalThis)) {
//   module.exports = 
// } else if (

// )



// const uniFetch =
//   typeof globalThis.fetch === "function" &&
//   typeof globalThis.Headers === "function" &&
//   typeof globalThis.Request === "function" &&
//   typeof globalThis.Response === "function"
//     ? globalThis
//     : (require("undici") as typeof undici);

// export default uniFetch.fetch as typeof globalThis.fetch;
// export const { fetch, Request, Response, Headers } =
//   uniFetch as typeof globalThis;



// import type * as undici from "undici";
// import * as nodeFetch from "node-fetch";

// if (typeof globalThis.fetch === )



// interface Fetch {
//   fetch: typeof fetch;
//   Headers: typeof Headers;
//   Request: typeof Request;
//   Response: typeof Response;
// }

// function supportsFetch(pkg: any): pkg is Fetch {
//   return typeof pkg.fetch === "function" &&
//     typeof pkg.Headers === "function" &&
//     typeof pkg.Request === "function" &&
//     typeof pkg.Response === "function"
// }

const uniFetch: Fetch = supportsFetch(globalThis)
  ? globalThis
  : supportsFetch(require("undici"))
    ? (require("undici") as typeof undici)
    : {
      fetch: require("node-fetch").default as typeof nodeFetch.default,
      Headers: require("node-fetch").Headers as typeof nodeFetch.Headers,
      Request: require("node-fetch").Request as typeof nodeFetch.Request,
      Response: require("node-fetch").Response as typeof nodeFetch.Response
    };

export default uniFetch.fetch;
export const { fetch, Request, Response, Headers } = uniFetch;
