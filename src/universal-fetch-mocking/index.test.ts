import { mocks, createMock } from "./index";

beforeEach(() => {
  mocks.handle(async () => ...)
})

afterEach(() => {
  mocks.clearAll();
})


it("some test", () => {
  // Always returns OK 200
  mocks.handle(async (uri, requestInit) => Response("OK", { status: 200 }));
  
  saveSolidDatasetAt(..., {
    fetch: mocks.fetch
  })
})
