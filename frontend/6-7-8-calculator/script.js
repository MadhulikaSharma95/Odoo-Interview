const display = document.querySelector(".display");
const numButtons = document.querySelectorAll(".num");
const randomButton = document.querySelector(".random");
const clearButton = document.querySelector(".clear");

let displayValue = "";

clearButton.addEventListener("click", () => {
  displayValue = "";
  display.textContent = displayValue;
});

randomButton.addEventListener("click", async () => {
  // The Random numbers API doesn't allow CORS, so we can mimic it by doing a local random number generator

  // const randomNum = await fetch(
  //   "https://random.org/integers/?num=1&min=1&max=100&colormode=hex",
  // ).then((res) => res.json());
  const randomNum = await simulateRandomNumberFetch().then(
    (num) => (display.textContent = num)
  );
});

numButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const buttonValue = +button.getAttribute("num-value");
    displayValue += buttonValue;
    display.textContent = displayValue;
  });
});

async function simulateRandomNumberFetch() {
  return new Promise((resolve, reject) => {
    return setTimeout(() => {
      resolve(Math.floor(Math.random() * 100));
    }, 500);
  });
}
