// Regionlarni tanlash

const elSelect = document.querySelector(".regins-select");

async function getRegion(region) {
  try {
    let req = await fetch(`https://restcountries.com/v3.1/region/${region}`);
    let res = await req.json();
    handleRenderCountry(res);
  } catch (err) {
    console.log(err);
  }
}

elSelect.addEventListener("change", () => {
  getRegion(elSelect.value);
});
