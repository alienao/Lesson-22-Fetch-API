const countriesList = document.getElementById("countries");
let countries;

countriesList.addEventListener("change", newCountrySelection);
function newCountrySelection(event) {
  CountryInfo(event.target.value);
}

fetch("https://restcountries.eu/rest/v2/all")
  .then((res) => res.json())
  .then((data) => restCount(data))
  .catch((err) => console.log("Error:", err));

function restCount(countriesData) {
  countries = countriesData;
  let options = "";
  countries.forEach(
    (country) =>
      (options += `<option value="${country.alpha3Code}">${country.name}</option>`)
  );

  countriesList.innerHTML = options;
  countriesList.selectedIdx = Math.floor(Math.random() * countriesList.length);
  CountryInfo(countriesList[countriesList.selectedIdx].value);
}

function CountryInfo(countryByAlpha3Code) {
  const countryData = countries.find(
    (country) => country.alpha3Code === countryByAlpha3Code
  );
  document.querySelector("#flag img").src = countryData.flag;
  document.querySelector("#flag img").alt = `Flag of ${countryData.name}`;
  document.getElementById("capital").innerHTML = countryData.capital;
  document.getElementById("native-name").innerHTML = countryData.nativeName;
  document.getElementById("area").innerHTML =
    countryData.area.toLocaleString("en-US");
  document.getElementById(
    "dialing-code"
  ).innerHTML = `+${countryData.callingCodes[0]}`;
  document.getElementById("population").innerHTML =
    countryData.population.toLocaleString("en-US");
  document.getElementById("currencies").innerHTML = countryData.currencies
    .filter((c) => c.name)
    .map((c) => `${c.name} (${c.code})`)
    .join(" / ");
  document.getElementById("region").innerHTML = countryData.region;
  document.getElementById("subregion").innerHTML = countryData.subregion;
}
