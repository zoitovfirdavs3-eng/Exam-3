// Davlatlarni qidirish

const elForm = document.querySelector(".js-form");
const searchCountry = elForm.querySelector(".search-inp");
const searchBtn = elForm.querySelector(".search-btn");

elForm.addEventListener("submit", async evt => {
  evt.preventDefault();
  let value = searchCountry.value.trim();

  if (!value) return;

  try {
    let req = await fetch(`https://restcountries.com/v3.1/name/${value}`);
    let res = await req.json();
    handleRenderCountry(res);
  } catch (err) {
    console.log(err);
  }
});
