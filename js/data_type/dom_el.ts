const button = document.querySelector("button");
const input = document.getElementById("input")! as HTMLInputElement;

function multiply(input: number) {
  return input * 2;
}

button?.addEventListener("click", function () {
  console.log(multiply(+input.value));
});
