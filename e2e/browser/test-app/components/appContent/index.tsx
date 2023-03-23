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

import { fetch as uniFetch, Headers } from "@inrupt/universal-fetch";
import { useState } from "react";

const OPENID_CONFIG_FILE_URL =
  "https://login.inrupt.com/.well-known/openid-configuration";

export default function Home() {
  const [fetchedData, setFetchedData] = useState<string>();
  const headers = new Headers();
  headers.append("Content-Type", "application/json");

  const fetchData = async (options: RequestInit) =>
    uniFetch(OPENID_CONFIG_FILE_URL, options)
      .then((response: Response) => response.json())
      .then((data: any) => setFetchedData(JSON.stringify(data, null, 2)));

  return (
    <div>
      <h1>
        <code>@inrupt/universal-fetch</code> test browser app
      </h1>
      <p>
        Content-type:{" "}
        <code data-testid="content-type">{headers.get("Content-Type")}</code>
      </p>
      <button onClick={() => fetchData({ headers })}>Fetch content</button>
      {fetchedData && <pre data-testid="data">{fetchedData}</pre>}
    </div>
  );
}
