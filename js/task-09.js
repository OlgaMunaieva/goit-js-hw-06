function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const buttonEl = document.querySelector(".change-color");
const bodyEl = document.querySelector("body");
const showColor = document.querySelector(".color");

buttonEl.addEventListener("click", () => {
  const color = getRandomHexColor();
  bodyEl.style.backgroundColor = color;
  showColor.textContent = color;
});
