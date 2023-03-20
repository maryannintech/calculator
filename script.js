let firstnum = "";
let secondnum = "";
let operation = ""; 
let currentnum = "";
let clicked = false;


// dom variables
let solutionScreen = document.querySelector(".solution");
let answerScreen = document.querySelector(".answer");

// number buttons and eventlisteners
const oneBtn = document.querySelector(".one").addEventListener("click", () => {chooseBtn(1);});
const twoBtn = document.querySelector(".two").addEventListener("click", () => {chooseBtn(2);});
const threeBtn = document.querySelector(".three").addEventListener("click", () => {chooseBtn(3);});
const fourBtn = document.querySelector(".four").addEventListener("click", () => {chooseBtn(4);});
const fiveBtn = document.querySelector(".five").addEventListener("click", () => {chooseBtn(5);});
const sixBtn = document.querySelector(".six").addEventListener("click", () => {chooseBtn(6);});
const sevenBtn = document.querySelector(".seven").addEventListener("click", () => {chooseBtn(7);});
const eigthBtn = document.querySelector(".eight").addEventListener("click", () => {chooseBtn(8);});
const nineBtn = document.querySelector(".nine").addEventListener("click", () => {chooseBtn(9);});
const zeroBtn = document.querySelector(".zero").addEventListener("click", () => {chooseBtn(0);});
let pointBtn = document.querySelector(".point").addEventListener("click", () => {chooseBtn(".");});
pointBtn = document.querySelector(".point").addEventListener("click", numofClick);
let posneg = document.querySelector(".posneg").addEventListener("click", () => {chooseBtn("+/-");});
let opebtns = document.querySelectorAll(".ope");

// to display numbers on screen when clicked
function chooseBtn(num) {
    firstnum = Number(num);
    secondnum = Number(num);
    // to enable the operations and decimal point button when a number is clicked
    opebtns.forEach((btn) => {
        btn.disabled = false;
    })
    switch(num){
        case 1:
            clicked = false;
            displayTextContent("1");
            break;
        case 2:
            clicked = false;
            displayTextContent("2");
            break;
        case 3:
            clicked = false;
            displayTextContent("3");
            break;
        case 4:
            clicked = false;
            displayTextContent("4");
            break;
        case 5:
            clicked = false;
            displayTextContent("5");
            break;
        case 6:
            clicked = false;
            displayTextContent("6");
            break;
        case 7:
            clicked = false;
            displayTextContent("7");
            break;
        case 8:
            clicked = false;
            displayTextContent("8");
            break;
        case 9:
            clicked = false;
            displayTextContent("9");
            break;
        case 0:
            clicked = false;
            displayTextContent("0");
            break;
        case "+/-":
            clicked = false;
            displayTextContent("-");
            break;
        case ".":
            displayTextContent(".")
            break;
    }
}

// operation buttons and eventlisteners
let percentBtn = document.querySelector(".percentage").addEventListener("click", percentage);
percentBtn = document.querySelector(".percentage").addEventListener("click", numofClick);
let divideBtn = document.querySelector(".divide").addEventListener("click", divide, numofClick);
let multiplyBtn = document.querySelector(".multiply").addEventListener("click", multiply);
multiplyBtn = document.querySelector(".multiply").addEventListener("click", numofClick);
let subtractBtn = document.querySelector(".subtract").addEventListener("click", subtract);
subtractBtn = document.querySelector(".subtract").addEventListener("click", numofClick);
let addBtn = document.querySelector(".add").addEventListener("click", add);
addBtn = document.querySelector(".add").addEventListener("click", numofClick);

// tools buttons and eventlisteners
const equalBtn = document.querySelector(".equal").addEventListener("click", operate);
const clearBtn = document.querySelector(".clear").addEventListener("click", clear);
const deleteBtn = document.querySelector(".delete").addEventListener("click", backspace);

function add() {
    operation = "addition";
    solutionScreen.textContent += "+";
};

function subtract() {
    operation = "subtraction";
    solutionScreen.textContent += "-";
};

function multiply() {
    operation = "multiplication";
    solutionScreen.textContent += "x";
};

function divide() {
    operation = "division";
    solutionScreen.textContent += "÷";
    
};

function percentage() {
    operation = "percentage";
    solutionScreen.textContent += "%";
};

function operate() {
    let x = firstnum;
    let y = secondnum;
    if (operation === "addition") {
        answerScreen.innerText = Number(x) + Number(y);
    }
    else if (operation === "subtraction") {
        answerScreen.innerText = Number(x) - Number(y);
    }
    else if (operation === "multiplication") {
        answerScreen.innerText = Number(x) * Number(y);
    }
    else if (operation === "division") {
        if (x === 0 || y === 0) {
            answerScreen.innerText = "Cannot be divide by 0";
        }
        else {
            answerScreen.innerText = Number(x) / Number(y);
        }
    }
    else if (operation === "percentage") {
        answerScreen.innerText = Number(x) / 100;
    }
    else {
        answerScreen.innerText = ""
    }

};

// to only limit user of clicking once of any operator and decimal
function numofClick() {
    clicked = true;
    if (clicked === true) {
        this.disabled = true;
    }
    else {
        this.disabled = false;
    }
    
}

function displayTextContent(content) {
    solutionScreen.textContent += content;
}

function backspace() {
    
}

function clear() {
    window.location.reload();
};


