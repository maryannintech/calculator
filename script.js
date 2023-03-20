let num1
let num2;
let operation;
let clicked = false;

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
        prompt("Cannot be divide by zero");
    }
    else {
        let result = Math.floor(Number(x) / Number(y));
        return result;
    }
}

const addBtn = document.querySelector(".add").addEventListener("click", add);
const subtractBtn = document.querySelector(".subtract").addEventListener("click", subtract);
const multiplyBtn = document.querySelector(".multiply").addEventListener("click", multiply);
const divideBtn = document.querySelectorAll(".divide").addEventListener("click", divide);

const solutionScreen = document.querySelector(".solution");
const answerScreen = document.querySelectorAll(".answer");

const clearBtn = document.querySelector(".clear").addEventListener("click", clear);
const deleteBtn = document.querySelector(".delete").addEventListener("click", backspaceClick);

function clear() {
    window.location.reload();
}

function backspaceClick() {
     // if deleting only one number
     if (solutionScreen.textContent.length === 1) {
        solutionScreen.textContent = solutionScreen.textContent.slice(0, -1);
        solutionScreen.textContent = "";
    }
    // if deleting only more number
    else if (solutionScreen.textContent.length > 1) {
        solutionScreen.textContent = solutionScreen.textContent.slice(0, -1);
    }
    else {
        return;
    }
}



