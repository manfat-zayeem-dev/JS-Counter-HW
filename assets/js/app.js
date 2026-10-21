let decreamentBtn = document.querySelector(".decreament");
let increamentBtn = document.querySelector(".increament");
let inputField = document.querySelector(".input");

function increament() {
  inputField.value = Number(inputField.value) + 1;
}

function decreament() {
  if (Number(inputField.value) > 0) {
    inputField.value = Number(inputField.value) - 1;
  }
}
increamentBtn.addEventListener("click", increament);

decreamentBtn.addEventListener("click", decreament);

console.log(inputField);
