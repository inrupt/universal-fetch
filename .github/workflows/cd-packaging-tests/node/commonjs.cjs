const {
  Request,
  Response,
  Headers,
  fetch,
} = require("@inrupt/universal-fetch");


console.log(new Request("https://inrupt.com/"));
console.log(new Response());
console.log(new Headers())

fetch("https://inrupt.com/").then(data => {
  console.log(data);
})
