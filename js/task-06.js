/* Scrieți un script care, atunci când focalizarea este pierdută de pe un input (evenimentul blur), verifică dacă numărul de caractere introduse este corect.

Numărul de caractere admis trebuie specificat în atributul data-length.
Dacă este introdus numărul corect de caractere, atunci border-ul devine verde, în caz contrar - roșu.
Pentru a adăuga stilurile necesare, utilizați clasele CSS valid și invalid pe care le-am adăugat deja la fișierele sursă ale acestui exercițiu.*/

const validationInput = document.getElementById("validation-input");

validationInput.addEventListener("blur", function () {
  const lengthValue = this.getAttribute("data-length");

  if (this.value.length === parseInt(lengthValue)) {
    this.classList.remove("invalid");
    this.classList.add("valid");
  } else {
    this.classList.remove("valid");
    this.classList.add("invalid");
  }
});
