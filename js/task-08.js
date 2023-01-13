const formEl = document.querySelector(".login-form");

const login = {};

formEl.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    return alert("Please fill in all the fields!");
  }
  login.email = email.value;
  login.password = password.value;
  console.log(login);
  event.currentTarget.reset();
}
