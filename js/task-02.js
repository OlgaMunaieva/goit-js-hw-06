const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsEL = ingredients.map((ingredient) => {
  const itemEl = document.createElement("li");
  itemEl.textContent = ingredient;
  itemEl.setAttribute("class", "item");
  // console.log(itemEl);
  return itemEl;
});
// console.log(ingredientsEL);

const listEl = document.querySelector("#ingredients");

listEl.append(...ingredientsEL);

// console.log(document);
