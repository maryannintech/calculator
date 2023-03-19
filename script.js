let firstnum;
let secondnum;
let operation; 

let solutionscreen = document.querySelector(".solution");
let answerscreen = document.querySelector(".answer");

const onebtn = document.querySelector(".one").addEventListener("click", () => {getnumber(1);});
const twobtn = document.querySelector(".two").addEventListener("click", () => {getnumber(2);});
const threebtn = document.querySelector(".three").addEventListener("click", () => {getnumber(3);});
const fourbtn = document.querySelector(".four").addEventListener("click", () => {getnumber(4);});
const fivebtn = document.querySelector(".five").addEventListener("click", () => {getnumber(5);});
const sixbtn = document.querySelector(".six").addEventListener("click", () => {getnumber(6);});
const sevenbtn = document.querySelector(".seven").addEventListener("click", () => {getnumber(7);});
const eigthbtn = document.querySelector(".eight").addEventListener("click", () => {getnumber(8);});
const ninebtn = document.querySelector(".nine").addEventListener("click", () => {getnumber(9);});
const zerobtn = document.querySelector(".zero").addEventListener("click", () => {getnumber(0);});
const pointbtn = document.querySelector(".point").addEventListener("click", () => {getnumber(".");});

function add() {
    operation = "addition";
    solutionscreen.textContent = "+";
}

function subtract() {
    operation = "subtraction";
    solutionscreen.textContent = "-";
}

function multiply() {
    operation = "multiplication";
    solutionscreen.textContent = "x";
}

function divide() {
    operation = "division";
    solutionscreen.textContent = "÷";
    
}

function percentage() {
    operate("percentage");
    solutionscreen.textContent = "%";
}

function operate() {
    if (operation === "addition") {
        let sum = firstnum + secondnum;
        
    }
    else if (operation === "subtraction") {
        let difference = firstnum - secondnum;
        answerscreen.textContent = difference;
    }
    else if (operation === "multiplication") {
        let product = firstnum * secondnum;
        answerscreen.textContent = product;
    }
    else if (operation === "division") {
        if (firstnum === 0 || secondnum === 0) {
            answerscreen.textContent = "Cannot be divide by 0";
        }
        else {
            let quotient = firstnum / secondnum;
            answerscreen.textContent = quotient;
        }
    }
    else if (operation === "percentage") {
        let result = firstnum / 100;
        answerscreen.textContent = result;
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



