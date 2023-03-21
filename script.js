let firstNum;
let secondNum;
let operation;
let clicked = false;

// SCREEN
const solutionScreen = document.querySelector(".solution");
const answerScreen = document.querySelector(".answer");

function buttonClick(number){
    // to enable the operations and decimal point button when a number is clicked
    opeBtns.forEach((btn) => {
        btn.disabled = false;
    })
    solutionScreen.textContent += number;
}

// OPERATORS FUNCTIONS
function add(x, y) {
    operation = "+";
    return result = Number(x) + Number(y);
}

function subtract(x, y) {
    operation = "-";
    return result = Number(x) - Number(y);
}

function multiply(x, y) {
    operation = "*";
    return result = Number(x) * Number(y);
}

function divide(x, y) {
    operation = "/";
    if (x === 0 || y === 0) {
        let errorsign = "Cannot be divide by 0."
        return errorsign;
    }
    else {
        let result = Math.floor(Number(x) / Number(y));
        return result.toFixed(4);
    }
}

function operate(num1, num2, op) {
    switch (op) {
        case "+":
            displayAnswer(add(num1, num2));
            break;
        case "-":
            displayAnswer(subtract(num1, num2));
            break;
        case "*":
            displayAnswer(multiply(num1, num2));
            break;
        case "/":
            displayAnswer(divide(num1, num2));
            break;
        default:
            return;
    }
}

function displayAnswer(content) {
    answerScreen.textContent = content;
}

function displayOperator(ope) {
    solutionScreen.textContent += ope;
}

// OPERATORS 
let opeBtns = document.querySelectorAll(".ope");
opeBtns.forEach((btn) => {
    btn.addEventListener("click", opClicked);
})
let addBtn = document.querySelector(".add").addEventListener("click", add);
addBtn = document.querySelector(".add").addEventListener("click", () => {displayOperator("+");});
let subtractBtn = document.querySelector(".subtract").addEventListener("click", subtract);
subtractBtn = document.querySelector(".subtract").addEventListener("click", () => {displayOperator("-");});
let multiplyBtn = document.querySelector(".multiply").addEventListener("click", multiply);
multiplyBtn = document.querySelector(".multiply").addEventListener("click", () => {displayOperator("*");});
let divideBtn = document.querySelector(".divide").addEventListener("click", divide);
divideBtn = document.querySelector(".divide").addEventListener("click", () => {displayOperator("/");});

// to prevent user from clicking the operators repeatedly
function opClicked() {
    clicked = true;
    if (clicked === true) {
        this.disabled = true;
    }
    else {
        this.disabled = false;
    }
    
}

// NUMBERS
const oneBtn = document.querySelector(".one").addEventListener("click", () => {buttonClick(1)});
const twoBtn = document.querySelector(".two").addEventListener("click", () => {buttonClick(2)});
const threeBtn = document.querySelector(".three").addEventListener("click", () => {buttonClick(3)});
const fourBtn = document.querySelector(".four").addEventListener("click", () => {buttonClick(4)});
const fiveBtn = document.querySelector(".five").addEventListener("click", () => {buttonClick(5)});
const sixBtn = document.querySelector(".six").addEventListener("click", () => {buttonClick(6)});
const sevenBtn = document.querySelector(".seven").addEventListener("click", () => {buttonClick(7)});
const eightBtn = document.querySelector(".eight").addEventListener("click", () => {buttonClick(8)});
const nineBtn = document.querySelector(".nine").addEventListener("click", () => {buttonClick(9)});
const zeroBtn = document.querySelector(".zero").addEventListener("click", () => {buttonClick(0)});

// OTHER TOOLS
const clearBtn = document.querySelector(".clear").addEventListener("click", clear);
const deleteBtn = document.querySelector(".delete").addEventListener("click", backspaceClick);
const equalBtn = document.querySelector(".equal").addEventListener("click", operate);

function clear() {
    window.location.reload();
}

function backspaceClick() {
     // if deleting only one number
     if (solutionScreen.textContent.length === 1) {
        solutionScreen.textContent = solutionScreen.textContent.slice(0, -1);
        solutionScreen.textContent = "";
    }
    // if deleting more numberS
    else if (solutionScreen.textContent.length > 1) {
        solutionScreen.textContent = solutionScreen.textContent.slice(0, -1);
    }
    else {
        return;
    }
}