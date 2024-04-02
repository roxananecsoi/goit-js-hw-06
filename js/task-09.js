/* Scrieți un script care schimbă culorile de fundal al elementului <body>, prin stiluri inline, atunci când se face click pe button.change-color și afișați valoarea culorii în span.color. */

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const button = document.querySelector(".change-color");
const colorSpan = document.querySelector(".color");

button.addEventListener("click", function () {
  const randomColor = getRandomHexColor();

  document.body.style.backgroundColor = randomColor;
  colorSpan.textContent = randomColor;
});
