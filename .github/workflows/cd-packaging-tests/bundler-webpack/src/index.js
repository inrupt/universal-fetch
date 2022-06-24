// Verify that imports from the main export work:
import dFetch, { fetch, Headers, Request, Response } from "@inrupt/universal-fetch";
// Verify that submodule imports work:
import idFetch, { fetch as iFetch, Headers as iHeaders, Request as iRequest, Response as iResponse } from "@inrupt/universal-fetch/index";

console.log(new Request("https://vincentt.inrupt.net/profile/card#me"));
console.log(new Response());
console.log(new Headers())

fetch("https://vincentt.inrupt.net/profile/card#me").then(data => {
  console.log(data);
})

dFetch("https://vincentt.inrupt.net/profile/card#me").then(data => {
  console.log(data);
})

console.log(new iRequest("https://vincentt.inrupt.net/profile/card#me"));
console.log(new iResponse());
console.log(new iHeaders())

iFetch("https://vincentt.inrupt.net/profile/card#me").then(data => {
  console.log(data);
})

idFetch("https://vincentt.inrupt.net/profile/card#me").then(data => {
  console.log(data);
})
