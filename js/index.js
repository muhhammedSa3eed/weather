// & Related Data :
// * Api key : d8de923ea9cf4a0e9df172709252005
// * Api link :http://api.weatherapi.com/v1/forecast.json?key=d8de923ea9cf4a0e9df172709252005&q=cairo&days=7

// * HTML Elements
const rowData = document.querySelector(".rowData");
let searchInp = document.querySelector(".search");
const findBtn = document.querySelector(".find-btn");

// ^ App Variables

// & Functions

function getCountry() {
  let country = searchInp.value;
  return country;
}

async function getData(country) {
  const response = await fetch(
    `http://api.weatherapi.com/v1/forecast.json?key=d8de923ea9cf4a0e9df172709252005&q=${country()}&days=7`
  );
  let data = await response.json();
  display(data);
}

function display(arr) {
  rowData.innerHTML = "";
  for (let i = 0; i < 3; i++) {
    rowData.innerHTML += `
             <div class="col-sm-6 col-md-4">
    <div class="weather-card">
        <div class="location">
            <span class="city-name">${arr.location.name}</span>
            <span class="country-name">${arr.location.country}</span>
        </div>
        <div class="simple-date">
           ${arr.forecast.forecastday[i].date}
        </div>
        <div class="weather-icon">
            <img src="${arr.forecast.forecastday[i].day.condition.icon}" alt="Weather icon">
        </div>
        <div class="temperature fs-sm-6">${arr.forecast.forecastday[i].day.avgtemp_c}°C</div>
        <div class="details">
            <p class="mb-2 fw-semibold">${arr.current.condition.text}</p>
            <div class=" d-flex justify-content-between align-items-center mb-0 mt-3">
            <p class="fw-bold">Min : ${arr.forecast.forecastday[i].day.mintemp_c}<span class="fs-4">°</span>C</p>
            <p class="fw-bold">Max : ${arr.forecast.forecastday[i].day.maxtemp_c}<span class="fs-4">°</span>C</p>
            </div>
        </div>
    </div>
</div>
    `;
  }
}

// ? Events

// * on typing in the search input

searchInp.addEventListener("input", function () {
  getData(getCountry);
});

// * on clicking in the find button

findBtn.addEventListener("click", function () {
  getData(getCountry);
});
