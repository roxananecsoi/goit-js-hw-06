/* Scrieți un script de control al formularului de login.
Gestionarea trimiterii formularului form.login-form trebuie să fie în cadrul evenimentului submit.
La trimiterea formularului, pagina nu trebuie să se reîncarce.
Dacă formularul are câmpuri goale, afișați un alert care avertizează că toate câmpurile trebuie completate.
Dacă utilizatorul a completat toate câmpurile și a trimis formularul, colectați valorile câmpului într-un obiect în care numele câmpului va fi numele proprietății, iar valoarea câmpului va fi valoarea proprietății. Pentru a accesa elementele formularului, folosiți proprietatea elements.
Afișați obiectul cu datele introduse în consolă și ștergeți valorile câmpurilor din formular, folosind metoda reset.*/

const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const dataForm = {};

  const elementsForm = this.elements;

  for (let element of elementsForm) {
    if (element.type !== "submit") {
      if (element.value.trim() === "") {
        alert("Toate câmpurile trebuie completate");
        return;
      }

      dataForm[element.name] = element.value;
    }
  }

  console.log(dataForm);
  this.reset();
});
