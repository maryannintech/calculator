let firstnum;
let currentnum;
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
const doublezerobtn = document.querySelector(".doublezero").addEventListener("click", () => {getnumber(00);});

function getnumber(number) {
    solutionscreen.textContent = number;
}

function add(firstnum, currentnum) {
    solutionscreen.textContent = "+";
    let sum = firstnum + currentnum;
    return sum;
}

function subtract(firstnum, currentnum) {
    solutionscreen.textContent = "-";
    let difference = firstnum - currentnum;
    return difference;
}

function multiply(firstnum, currentnum) {
    solutionscreen.textContent = "x";
    let product = firstnum * currentnum;
    return product;
}

function divide(firstnum, currentnum) {
    solutionscreen.textContent = "÷";
    if (firstnum === 0 || currentnum === 0) {
        answerscreen.textContent = "Cannot be divide by 0";
    }
    else {
        let quotient = firstnum / currentnum;
        return quotient;
    }
}

function percentage(firstnum) {
    solutionscreen.textContent = "%";
    let result = firstnum / 100;
    return result;
}


function operate(operation) {
    const percentbtn = document.querySelector(".percentage").addEventListener("click", () => {operate("percentage")});
    const dividebtn = document.querySelector(".divide").addEventListener("click", () => {operate("division")});
    const multiplybtn = document.querySelector(".multiply").addEventListener("click", () => {operate("multiplication")});
    const subtractbtn = document.querySelector(".subtract").addEventListener("click", () => {operate("subtraction")});
    const addbtn = document.querySelector(".add").addEventListener("click", () => {operate("addition")});
    switch (operation) {
        case "addition":
            add;
            break;
        case "subtraction":
            subtract;
            break;
        case "multiplication":
            multiply;
            break;
        case "division":
            divide;
            break;
        case "percentage":
            percentage;
            break;
    }
}
