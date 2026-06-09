let display = document.getElementById("display");

let currentInput = ""        // what user is typing
let currentResult = null;    // stored result
let operator = null;         // last operator
let justCalculated = false;  // whether last action produced a result

// NUMBER INPUT

function pressNumber(num) {

    if (justCalculated && operator === null) {
        //Start fresh only if no operator is waiting
        currentInput = "";
        currentResult = null;
        justCalculated = false;
    }

    currentInput += num
    display.innerText = currentInput;
}

// OPERATOR INPUT

function pressOperator(op) {

    if (justCalculated) {
        justCalculated = false;
    }

    if (currentInput === "" && currentResult === null) return;

    //first number
    if (currentResult === null) {
        currentResult = Number(currentInput);
    }
    else if (currentInput !== "") {
        compute();
    }

    operator = op;
    currentInput = "";

    display.innerText = currentResult;
}

//CORE CALCULATION 

function compute() {

    const number = Number(currentInput)

    if (operator === "+") currentResult += number;
    if (operator === "-") currentResult -= number;
    if (operator === "*") currentResult *= number;
    if (operator === "/") currentResult /= number;

    display.innerText = currentResult;
}

// EQUALS BUTTON

function calculate() {

    // only calculate if we actually have input + operator
    if (currentInput === "" || operator === null) return;

    compute();

    currentInput = "";
    operator = null;
    justCalculated = true;
}

// CLEAR 

function clearDisplay() {
    currentInput = "";
    currentResult = null;
    operator = null;
    display.innerText = "0";
}