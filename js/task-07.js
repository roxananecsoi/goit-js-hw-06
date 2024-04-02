/* Scrieți un script care răspunde la modificarea valorii din input#font-size-control (evenimentul input) și modifică stilurile inline al span#text prin actualizarea proprietății font-size. Ca rezultat, atunci când glisați scrollbar-ul, dimensiunea textului se va schimba.*/

const fontSizeControl = document.getElementById("font-size-control");

const text = document.getElementById("text");

fontSizeControl.addEventListener("input", function () {
  text.style.fontSize = fontSizeControl.value + "px";
});
