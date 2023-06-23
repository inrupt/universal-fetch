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
import {
  fetch as UndiciFetch,
  Headers as UndiciHeaders,
  Request as UndiciRequest,
  Response as UndiciResponse,
} from "undici";
import NodeFetch, {
  Headers as NodeHeaders,
  Request as NodeRequest,
  Response as NodeResponse,
} from "node-fetch";

interface Fetch {
  fetch: typeof globalThis.fetch;
  Headers: typeof globalThis.Headers;
  Request: typeof globalThis.Request;
  Response: typeof globalThis.Response;
}

const nodeVersion = process.versions.node.split(".");
const nodeMajor = Number(nodeVersion[0]);
const nodeMinor = Number(nodeVersion[1]);

let uniFetch: Fetch;

// Each branch is pre-determined based on node version and hence any test on a given node version will
// not reach a particular branch.
/* istanbul ignore next */
if (nodeMajor >= 18) {
  uniFetch = globalThis;
} else if (nodeMajor > 16 || (nodeMajor === 16 && nodeMinor >= 8)) {
  // TODO: Type this as undici once it has the same type signature as the globals
  uniFetch = {
    fetch: UndiciFetch as unknown as Fetch["fetch"],
    Headers: UndiciHeaders as unknown as Fetch["Headers"],
    Request: UndiciRequest as unknown as Fetch["Request"],
    Response: UndiciResponse as unknown as Fetch["Response"],
  };
} else {
  // TODO: Fix this type casting once node-fetch has the same type signature as the globals
  uniFetch = {
    fetch: NodeFetch as unknown as Fetch["fetch"],
    Headers: NodeHeaders as unknown as Fetch["Headers"],
    Request: NodeRequest as unknown as Fetch["Request"],
    Response: NodeResponse as unknown as Fetch["Response"],
  };
}

export default uniFetch.fetch;
export const { fetch, Request, Response, Headers } = uniFetch;
