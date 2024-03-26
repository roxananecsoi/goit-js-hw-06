/* Codul HTML conține o listă de categorii ul#categories.
   Scrieți un script care:
Va număra și afișa în consolă numărul total de categorii din ul#categories, adică elementele li.item.
Pentru fiecare element li.item din lista ul#categories, va găsi și afișa în consolă titlul elementului (tag-ul <h2>) și numărul de elemente din acea categorie (toate elementele <li>).
Ca rezultat, în consolă vor fi afișate astfel de mesaje:

Number of categories: 3
Category: Animals
Elements: 4
Category: Products
Elements: 3
Category: Technologies
Elements: 5 */

// Lista categoriilor:
const categoriesList = document.getElementById("categories");
// Toate elementele li cu clasa "item":
const categories = categoriesList.getElementsByClassName("item");
// Afișam in consola numărul total de categorii:
console.log(`Number of categories: ${categories.length}`);

// Parcurgem fiecare categorie și obținem informațiile cerute:
for (let i = 0; i < categories.length; i = i + 1) {
  const category = categories[i];
  const categoryName = category.getElementsByTagName("h2")[0].innerText;
  const elements = category.getElementsByTagName("li");

  // Afișam titlul categoriei și numărul de elemente din aceasta:
  console.log(`Category: ${categoryName}`);
  console.log(`Elements: ${elements.length}`);
}
