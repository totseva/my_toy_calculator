//SOUNDS
const numSound = new Audio("./sounds/sound1.mp3");
const opSound = new Audio("./sounds/sound2.mp3");
const clearSound = new Audio("./sounds/sound3.mp3");
const equalSound = new Audio("./sounds/sound4.mp3");

function playSound(sound) {
    sound.currentTime = 0;
    sound.play();
}

//SET VARIABLES

let display = document.getElementById("display");

let currentInput = ""        // what user is typing
let currentResult = null;    // stored result
let operator = null;         // last operator
let justCalculated = false;  // whether last action produced a result

// NUMBER INPUT

function pressNumber(num) {

    playSound(numSound);

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

    playSound(opSound);

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

    playSound(equalSound);

    // only calculate if we actually have input + operator
    if (currentInput === "" || operator === null) return;

    compute();

    currentInput = "";
    operator = null;
    justCalculated = true;
}

// CLEAR 

function clearDisplay() {

    playSound(clearSound);

    currentInput = "";
    currentResult = null;
    operator = null;
    display.innerText = "0";
}