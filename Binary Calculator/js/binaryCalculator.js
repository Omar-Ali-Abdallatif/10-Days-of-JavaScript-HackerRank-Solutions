let btn0 = document.getElementById("btn0");
let btn1 = document.getElementById("btn1");
let btnC = document.getElementById("btnC");
let btnAdd = document.getElementById("btnAdd");
let btnSub = document.getElementById("btnSub");
let btnMul = document.getElementById("btnMul");
let btnDiv = document.getElementById("btnDiv");
let btnEqual = document.getElementById("btnE");

btn0.addEventListener("click", function() {
    let display = document.getElementById("display");
    display.innerHTML +=0;
})

btn1.addEventListener("click", function() {
    let display = document.getElementById("display");
    display.innerHTML +=1;
})

btnC.addEventListener("click", function() {
    let display = document.getElementById("display");
    display.innerHTML ="";
})

btnAdd.addEventListener("click", function() {
    let display = document.getElementById("display");
    display.innerHTML +="+";
})

btnSub.addEventListener("click", function() {
    let display = document.getElementById("display");
    display.innerHTML +="-";
})

btnMul.addEventListener("click", function() {
    let display = document.getElementById("display");
    display.innerHTML +="*";
})

btnDiv.addEventListener("click", function() {
    let display = document.getElementById("display");
    display.innerHTML +="/";
})

btnEqual.addEventListener("click", function() {
    let display = document.getElementById("display");
    let expression = display.innerHTML;

    let operators = expression.match(/[\+\-\*\/]/);

    if (!operators) {
        display.innerHTML = "Error: No operator found";
        return;
    }

    let operator = operators[0];
    let operands = expression.split(operator);

    let num1 = parseInt(operands[0], 2);
    let num2 = parseInt(operands[1], 2);    
    let result;

    switch (operator) {
        case "+":
            result = num1 + num2;   
            break;
        case "-":
            result = num1 - num2;   
            break;
        case "*":
            result = num1 * num2;
            break;
        case "/":   
            if (num2 === 0) {
                display.innerHTML = "Error: Division by zero";
                return;
            }
            result = Math.floor(num1 / num2);
            break;
        default:
            display.innerHTML = "Error: Invalid operator";
            return;
    }
    display.innerHTML = "";
    display.innerHTML = result.toString(2);
})