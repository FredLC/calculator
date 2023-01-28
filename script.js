const nums = document.querySelectorAll(".num");
const display = document.querySelector(".display");
const operators = document.querySelectorAll(".operator");
const reset = document.querySelector(".reset");
const equals = document.querySelector(".equals");
let result = 0;
let currentNumber = 0;
let currentOperator = "";

const add = (num1, num2) => num1 + num2;

const subtract = (num1, num2) => num1 - num2;

const multiply = (num1, num2) => num1 * num2;

const divide = (num1, num2) => {
  if (num2 === 0) return "ERROR";

  return num1 / num2;
};

const operate = (operator, num1, num2) => operator(num1, num2);

reset.addEventListener("click", () => {
  display.textContent = "0";
  result = 0;
});

nums.forEach((num) => {
  num.addEventListener("click", () => {
    if (display.textContent[0] === "0") {
      display.textContent = "";
    }
    display.textContent += num.textContent;
  });
});

operators.forEach((operator) => {
  operator.addEventListener("click", () => {
    if (operator.textContent === "+") {
      const x = parseInt(display.textContent);
      display.textContent = "";
      result += x;
      console.log(result);
    }
  });
});

equals.addEventListener("click", () => {
  const x = parseInt(display.textContent);
  result += x;
  display.textContent = result;
  result = 0;
  console.log(result);
});
