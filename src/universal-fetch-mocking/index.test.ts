import mocks, { createMock } from "./index";
import {saveSolidDatasetAt } from "@inrupt/solid-client";

afterEach(() => {
  mocks.clearAll();
})

describe("fetch-mocks", () => {
    it("this is a test", () => {
        // Always returns OK 200
        mocks.any(async (uri, requestInit) => Response("OK", { status: 200 }));
        
        saveSolidDatasetAt(..., {
            fetch: mocks.fetch
        });

        expect(mocks.called).toBe(1);
    });

    it("this is some  other test", () => {
        const fetchMock = createMock();
        fetchMock.any(async (uri, requestInit) => Response("OK", { status: 200 }));
        saveSolidDatasetAt(..., {
            fetch: mocks.fetch
        });

    });

});
