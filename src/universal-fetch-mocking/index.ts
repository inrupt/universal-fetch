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

const mocks: UniversalFetchMock = {
  registeredMocks: [],
  calls: [],
  called: false,
  once(handler): void {
    let called = false;

    const actualHandler = () => {
      if (called) return;

      called = true;
      try {
        return await handler();
      } catch {
        // do nothing
      }
    };
    actualHandler();
  },
  any(handler): void {
    mocks.registeredMocks.push(handler);
  },
  clearAll(): void {
    mocks.registeredMocks = [];
  },
  fetch(uri, requestInit): Promise<Response>{
      // TODO: ensure handler executes here
      let response;

      let handled = mocks.registeredMocks.find(async (handler) => {
        mocks.calls.push({ uri, requestInit });
    
        response = handler(uri, requestInit);
    
        if (response) {
          return true;
        }
      })
    
      if (!handled) {
        console.error("Unhandled with info")
      }
      return response;
    
 },
};

type regMock = (
input: RequestInfo | URL,
init?: RequestInit | undefined,
) => Promise<Response>); 

type UniversalFetchMock = {
  calls: [Parameters<typeof fetch>, Response][];
  called: boolean;
  registeredMocks: regMock[];
  // Registers a handler that will only respond to one request (registering multiple queues responses)
  once: (handler) => void;
  // Registers a handler that will respond to all requests
  any: (handler) => void;
  clearAll: () => void;
  // Provides an instance similar to the mocks object which is also a drop-in replacement for fetch.
  fetch: (handler) => typeof fetch;
};

export function createMock() {
  return mocks;
}

// Function for determining number of calls made to Mock before cleared
const numberOfCalls = () => mocks.calls.length > 0;


export default mocks;
