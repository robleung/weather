import "./style.css";

console.log("test");

function app() {
  let body = document.querySelector("body");
  let title = document.createElement("div");
  title.innerHTML = "Will there be a good sunset?";
  let locationInput = document.createElement("input");
  locationInput.placeholder = "Search for a location";
  body.append(title, locationInput);
}
//Build a website to predict sunset viewing probablility

app();
console.log(process.env.apiKey);
