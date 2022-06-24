const {
  Request,
  Response,
  Headers,
  fetch,
} = require("@inrupt/universal-fetch");


console.log(new Request("https://vincentt.inrupt.net/profile/card#me"));
console.log(new Response());
console.log(new Headers())

fetch("https://vincentt.inrupt.net/profile/card#me").then(data => {
  console.log(data);
})
