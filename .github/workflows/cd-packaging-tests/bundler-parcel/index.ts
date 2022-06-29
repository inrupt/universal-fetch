import dFetch, {
  fetch,
  Headers,
  Request,
  Response,
} from "@inrupt/universal-fetch";

console.log(new Request("https://inrupt.com/"));
console.log(new Response());
console.log(new Headers());

fetch("https://inrupt.com/").then((data) => {
  console.log(data);
});

dFetch("https://inrupt.com/").then((data) => {
  console.log(data);
});
