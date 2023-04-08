let add = document.querySelector("#add");
let subract = document.querySelector("#subtract");
let number = document.querySelector("#counter");
let counter = 0;

add.addEventListener("click", () => {
  counter++;
  number.textContent = counter;
});

subract.addEventListener("click", () => {
  counter--;
  number.textContent = counter;
});


