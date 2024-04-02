/* Scrieți un script pentru crearea și ștergerea unei colecții de elemente. Utilizatorul introduce numărul de elemente în input și dă click pe butonul Create, după care colecția este afișată în pagină. Când se dă click pe butonul Destroy, colecția de elemente va fi ștearsă.
Creați o funcție createBoxes(amount), care ia ca parametru un număr. Funcția va crea atâtea <div>-uri câte sunt specificate în amount și le va adăuga la div#boxes.
Dimensiunile primului <div> vor fi 30px pe 30px.
Fiecare element, cu excepția primului, ar trebui să fie cu 10px mai lat și mai înalt decât cel anterior.
Toate elementele trebuie să aibă o culoare de fundal aleatoare în format HEX. Folosiți funcția getRandomHexColor deja existentă pentru a obține o culoare.
Scrieți o funcție destroyBoxes() care va șterge conținutul div#boxes, ștergând astfel toate elementele create.*/

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(amount) {
  const boxesDiv = document.getElementById("boxes");
  let boxSize = 30;
  for (let i = 0; i < amount; i++) {
    const box = document.createElement("div");
    box.style.width = `${boxSize}px`;
    box.style.height = `${boxSize}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxesDiv.appendChild(box);
    boxSize += 10;
  }
}

function createBoxesHandler() {
  const inputNumber = document.querySelector("input");
  const amount = inputNumber.value;
  createBoxes(amount);
}

function destroyBoxes() {
  const boxesDiv = document.getElementById("boxes");
  while (boxesDiv.firstChild) {
    boxesDiv.firstChild.remove();
  }
}

const createButton = document.querySelector("[data-create]");
const destroyButton = document.querySelector("[data-destroy]");
createButton.addEventListener("click", createBoxesHandler);
destroyButton.addEventListener("click", destroyBoxes);
