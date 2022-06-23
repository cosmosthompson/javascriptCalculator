let num1 = parseFloat(prompt("Enter first number: "));
operator = prompt("Enter your operator * , / , + , - : ");
let num2 = parseFloat(prompt("Enter second number: "));

function add(num1, num2) {
  result = parseFloat(num1) + parseFloat(num2);
}

function subst(num1, num2) {
  result = parseFloat(num1) - parseFloat(num2);
}

function mult(num1, num2) {
  result = parseFloat(num1) * parseFloat(num2);
}

// result = alert(mult(num1, num2));

function div(num1, num2) {
  result = parseFloat(num1) / parseFloat(num2);
}

if (operator === "+") {
  add(num1, num2);
} else if (operator == "-") {
  subst(num1, num2);
} else if (operator == "*") {
  mult(num1, num2);
} else if (operator == "/") {
  div(num1, num2);
} else {
  exit();
}

alert(result);
