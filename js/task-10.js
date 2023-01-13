function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const collectionCreationBlock = document.getElementById("controls");

const inputEl = collectionCreationBlock.querySelector("input[type='number']");

const buttonCreate = collectionCreationBlock.querySelector(
  "button[data-create]"
);

const buttonDestroy = collectionCreationBlock.querySelector(
  "button[data-destroy]"
);

const firstBoxSize = 30;
const increaseNextBoxes = 10;

const boxesEl = document.getElementById("boxes");

buttonCreate.addEventListener("click", clickButtonCreate);
buttonDestroy.addEventListener("click", destroyBoxes);

function clickButtonCreate(event) {
  if (inputEl.value !== "") {
    createBoxes(inputEl.value);
  }
}

function createBoxes(amount) {
  let boxes = [];
  for (let index = 0; index < amount; index += 1) {
    const box = document.createElement("div");
    const boxSize = `${firstBoxSize + increaseNextBoxes * index}px`;
    box.style.backgroundColor = getRandomHexColor();
    box.style.width = boxSize;
    box.style.height = boxSize;
    boxes.push(box);
  }
  boxesEl.append(...boxes);
  buttonCreate.removeEventListener("click", clickButtonCreate);
}

function destroyBoxes() {
  boxesEl.innerHTML = "";
  inputEl.value = "";
  buttonCreate.addEventListener("click", clickButtonCreate);
}
