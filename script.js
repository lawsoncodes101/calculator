const operate = function (firstNum, op, lastNum) {
   switch (op) {
      case "+":
         const add = function (a, b) {
            return a + b;
         };
         return add(firstNum, lastNum);
      case "-":
         const subtract = function (a, b) {
            return a - b;
         };
         return subtract(firstNum, lastNum);
      case "*":
      case "x":
         const multiply = function (a, b) {
            return a * b;
         };
         return multiply(firstNum, lastNum);
      case "/":
         const divide = function (a, b) {
            return a / b;
         };
         return divide(firstNum, lastNum);
   }
};
console.log(operate(2, "x", 3));