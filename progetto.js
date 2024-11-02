const barra = document.querySelector("header");
const button = document.querySelector(".btn");
window.addEventListener("scroll", () => {
  if (window.scrollY > 467) {
    barra.style.background = "white";
    button.style.background = "#1a8917";
  } else {
    barra.style.background = "#FFC017";
    button.style.background = "black";
  }
});
