/* Contorul este format dintr-un tag span și două butoane care, atunci când sunt apăsate, ar trebui să-și mărească sau scadă valoarea cu unu.

Declarați o variabilă counterValue ce va stoca valoarea curentă a contorului și asignați-i valoarea 0 pentru început.
Adăugați click handler pe butoane, în interiorul cărora vei mări sau micșora valoarea contorului.
Actualizați interfața cu noua valoare a variabilei counterValue. */

let counterValue = 0;
const valueElement = document.getElementById("value");

// Funcția de actualizare a valorii contorului și a interfeței:
function updateCounter(action) {
  if (action === "increment") {
    counterValue = counterValue + 1;
  } else if (action === "decrement") {
    counterValue = counterValue - 1;
  }
  valueElement.textContent = counterValue;
}

// Atașarea de handleri de evenimente la butoane:
const buttons = document.querySelectorAll("button");

buttons.forEach(function (button) {
  button.addEventListener("click", function () {
    const action = button.getAttribute("data-action");
    updateCounter(action);
  });
});
