// Site opra fonini ozgartirish

const elThemeBtn = document.querySelector(".theme-btn");
const siteTheme = window.localStorage.getItem("theme");

if (siteTheme == "black") {
  document.body.classList.add("theme-black");
}

elThemeBtn.addEventListener("click", evt => {
  evt.preventDefault();

  document.body.classList.toggle("theme-black");

  if (document.body.className.includes("theme-black")) {
    window.localStorage.setItem("theme", "black");
  } else {
    window.localStorage.setItem("theme", "white");
  }
});
