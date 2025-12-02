const input = document.querySelector("input[type='text']");
const numbers = document.querySelectorAll(".num");
const solve = document.querySelector(".solve");
const clearBtn = document.querySelector(".clear");
const operators = document.querySelectorAll(".op");
const operatorList = ["+", "/", "*", "x", "-"];
let firstNum = -Infinity;
let lastNum = -Infinity;
let operator = "";
let result = -Infinity;
let toClear = false;

const operate = function (a, op, b) {
   switch (op) {
      case "+":
         const add = function (a, b) {
            return a + b;
         };
         return add(a, b);
      case "-":
         const subtract = function (a, b) {
            return a - b;
         };
         return subtract(a, b);
      case "*":
      case "x":
         const multiply = function (a, b) {
            return a * b;
         };
         return multiply(a, b);
      case "/":
         const divide = function (a, b) {
            if (b === 0) {
               alert("Error! @divisonByZero");
               return 0;
            }
            return a / b;
         };
         return divide(a, b);
   }
};

numbers.forEach((btn) =>
   btn.addEventListener("click", function () {
      if (toClear) {
         input.value = "";
         toClear = false;
      }
      if (btn.textContent === "." && input.value.includes(".")) return;
      input.value += btn.textContent;
   })
);

function runOperator(op) {
   const opText = op.textContent || op;

   if (operator !== "" && input.value !== "") {
      lastNum = Number(input.value);
      result = operate(firstNum, operator, lastNum);
      firstNum = result;
   } else {
      const num = Number(input.value);
      if (!(num > -Infinity)) return;
      firstNum = num;
   }

   operator = opText;
   toClear = true;
}

input.addEventListener("keypress", function (e) {
   if (operatorList.includes(String(e.key))) {
      runOperator(String(e.key));
   } 
   if (!/[0-9.]/.test(e.key)) {
      e.preventDefault();
   }
});

operators.forEach((op) => {
   op.addEventListener("click", function () {
      runOperator(op);
   });
});

solve.addEventListener("click", function () {
   if (toClear === false) {
      if (!(firstNum > -Infinity)) return;
      if (input.value === "") return;

      lastNum = Number(input.value);

      result = operate(firstNum, operator, lastNum);
      input.value = result % 1 === 0 ? result : result.toFixed(1);
      toClear = true;

      operator = "";
   }
});

clearBtn.addEventListener("click", function () {
   input.value = "";
   firstNum = -Infinity;
   lastNum = -Infinity;
   operator = "";
});
