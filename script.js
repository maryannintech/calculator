let firstnum = "";
let secondnum = "";
let operation = ""; 

let solutionScreen = document.querySelector(".solution");
let answerScreen = document.querySelector(".answer");

const numberBtns = document.querySelectorAll('[data-number]');

function add() {
    operation = "addition";
    solutionScreen.textContent = "+";
}

function subtract() {
    operation = "subtraction";
    solutionScreen.textContent = "-";
}

function multiply() {
    operation = "multiplication";
    solutionScreen.textContent = "x";
}

function divide() {
    operation = "division";
    solutionScreen.textContent = "÷";
    
}

function percentage() {
    operate("percentage");
    solutionScreen.textContent = "%";
}

function operate() {
    if (operation === "addition") {
        answerScreen.textContent = firstnum + secondnum;
        
    }
    else if (operation === "subtraction") {
        answerScreen.textContent = firstnum - secondnum;
    }
    else if (operation === "multiplication") {
        answerScreen.textContent = firstnum * secondnum;
    }
    else if (operation === "division") {
        if (firstnum === 0 || secondnum === 0) {
            answerScreen.textContent = "Cannot be divide by 0";
        }
        else {
            answerScreen = firstnum / secondnum;
        }
    }
    else if (operation === "percentage") {
        answerScreen.textContent = firstnum / 100;
    }
}

function clear() {
    window.location.reload();
}

const percentbtn = document.querySelector(".percentage").addEventListener("click", percentage);
const dividebtn = document.querySelector(".divide").addEventListener("click", divide);
const multiplybtn = document.querySelector(".multiply").addEventListener("click", multiply);
const subtractbtn = document.querySelector(".subtract").addEventListener("click", subtract);
const addbtn = document.querySelector(".add").addEventListener("click", add);

const equalbtn = document.querySelector(".equal").addEventListener("click", operate);

const clearbtn = document.querySelector(".clear").addEventListener("click", clear);



