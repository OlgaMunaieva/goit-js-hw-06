const categoriesEl = document.querySelectorAll("li.item");
console.log("Number of categories: ", categoriesEl.length);

for (const categoryEl of categoriesEl) {
  console.log("Category: ", categoryEl.firstElementChild.textContent);
  console.log("Elements: ", categoryEl.lastElementChild.children.length);
}
