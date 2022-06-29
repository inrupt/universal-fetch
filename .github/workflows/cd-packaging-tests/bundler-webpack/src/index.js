// Verify that imports from the main export work:
import dFetch, {
  fetch,
  Headers,
  Request,
  Response,
} from "@inrupt/universal-fetch";
// Verify that submodule imports work:
import idFetch, {
  fetch as iFetch,
  Headers as iHeaders,
  Request as iRequest,
  Response as iResponse,
} from "@inrupt/universal-fetch/index";

console.log(new Request("https://inrupt.com/"));
console.log(new Response());
console.log(new Headers());

fetch("https://inrupt.com/").then((data) => {
  console.log(data);
});

dFetch("https://inrupt.com/").then((data) => {
  console.log(data);
});

console.log(new iRequest("https://inrupt.com/"));
console.log(new iResponse());
console.log(new iHeaders());

iFetch("https://inrupt.com/").then((data) => {
  console.log(data);
});

idFetch("https://inrupt.com/").then((data) => {
  console.log(data);
});
