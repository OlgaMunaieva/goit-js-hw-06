function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const collectionCreationBlock = document.getElementById("controls");
console.dir(collectionCreationBlock);

const inputEl = collectionCreationBlock.children[0];
console.log(inputEl);

const buttonCreate = collectionCreationBlock.children[1];
console.log(buttonCreate);

const buttonDestroy = collectionCreationBlock.children[2];
console.log(buttonDestroy);

const firstBoxSize = 30;
const increaseNextBoxes = 10;

const boxesEl = document.getElementById("boxes");

inputEl.addEventListener("change", (event) => {
  const amount = event.currentTarget.value;
  console.log(amount);
  createBoxes(amount);
});

function createBoxes(amount) {
  let boxes = [];
  for (let index = 0; index < amount; index += 1) {
    const box = document.createElement("div");
    const boxSize = `${firstBoxSize + increaseNextBoxes * index}px`;
    console.log(boxSize);
    box.style.backgroundColor = getRandomHexColor();
    box.style.width = boxSize;
    box.style.height = boxSize;
    console.log(box);
    // boxes = `${boxes}${box}`;
    boxes.push(box);
    boxes.join("");
    console.log(...boxes);
    boxesEl.append(...boxes);
  }
}
