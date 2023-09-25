import "./style.css";

async function fetchForcast() {
  let location = document.querySelector("#locationInput").value;
  const response = await fetch(
    `http://api.weatherapi.com/v1/forecast.json?key=${process.env.apiKey}&q=${location}&days=1&aqi=no&alerts=no
  `,
    { mode: "cors" }
  );
  const forcastData = await response.json();
  console.log(forcastData.forecast.forecastday[0].astro);
}

// function handleForcast(data) {
//   console.log(data);
// }

// function updateForcast() {
//   handleForcast(fetchForcast().);
// }

function app() {
  let body = document.querySelector("body");
  let title = document.createElement("div");
  title.innerHTML = "Will there be a good sunset?";
  let locationInput = document.createElement("input");
  locationInput.placeholder = "Search for a location";
  locationInput.id = "locationInput";
  let locationSubmit = document.createElement("button");
  locationSubmit.innerHTML = "Submit";
  locationSubmit.addEventListener("click", fetchForcast);
  body.append(title, locationInput, locationSubmit);
}
//Build a website to predict sunset viewing probablility

app();
// console.log(process.env.apiKey);
