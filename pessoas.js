const fetch = require("node-fetch");

fetch("https://randomuser.me/api/")
  .then((res) => res.json())
  .then((json) => console.log("Response persons", json));
