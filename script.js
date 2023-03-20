let num1;
let operation;
let clicked = false;


function buttonClick(number){
    solutionScreen.textContent += number;
    num1 += number;
    return number;
}

// OPERATORS FUNCTIONS

function add(x, y) {
    operation = "+";
    let result = Number(x) + Number(y);
    return result;
}

function subtract(x, y) {
    operation = "-";
    let result = Number(x) - Number(y);
    return result;
}

function multiply(x, y) {
    operation = "*";
    let result = Number(x) * Number(y);
    return result;
}

function divide(x, y) {
    operation = "/";
    if (x === 0 || y === 0) {
        alert("Cannot be divide by zero");
    }
    else {
        let result = Math.floor(Number(x) / Number(y));
        return result;
    }
}

function operate() {
    let num2 = buttonClick;
    switch (operation) {
        case "+":
        add(num1, num2);
        break;
        case "-":
        subtract(num1, num2);
        break;
        case "*":
        multiply(num1, num2);
        break;
        case "/":
        divide(num1, num2);
        break;
    }
}

// OPERATORS
let addBtn = document.querySelector(".add").addEventListener("click", add);
addBtn = document.querySelector(".add").addEventListener("click", opClicked);
let subtractBtn = document.querySelector(".subtract").addEventListener("click", subtract);
subtractBtn = document.querySelector(".subtract").addEventListener("click", opClicked);
let multiplyBtn = document.querySelector(".multiply").addEventListener("click", multiply);
multiplyBtn = document.querySelector(".multiply").addEventListener("click", opClicked);
let divideBtn = document.querySelector(".divide").addEventListener("click", divide);
divideBtn = document.querySelector(".divide").addEventListener("click", opClicked);

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

// SCREEN
const solutionScreen = document.querySelector(".solution");
const answerScreen = document.querySelector(".answer");

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




