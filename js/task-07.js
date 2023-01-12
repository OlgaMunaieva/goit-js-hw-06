const inputEl = document.querySelector("#font-size-control");

const text = document.querySelector("#text");

inputEl.addEventListener("input", (event) => {
  text.style.fontSize = `${event.currentTarget.value}px`;
});
