const elCountryCard = document.querySelector(".country-card");
getAllCountry();
async function getAllCountry() {
  try {
    let req = await fetch(
      `https://restcountries.com/v3.1/all?fields=name,flags,population,capital,continents`
    );
    let res = await req.json();
    handleRenderCountry(res);
  } catch (err) {
    console.log(err);
  }
}

const handleRenderCountry = evt => {
  elCountryCard.innerHTML = "";

  evt.forEach(country => {
    elCountryCard.innerHTML += `
  <div class="card">
    <img src="${country.flags.png}" alt="" />
    <div class="country-info">
      <h3 class="name">${country.name.common}</h3>
      <p class="aholi"><strong>Population: </strong>${country.population.toLocaleString()}</p>
      <p class="region"><strong>Region: </strong>${country.continents}</p>
      <p class="poytaxt"><strong>Capital: </strong>${country.capital}</p>
    </div>
  </div>
      `;
  });
};
