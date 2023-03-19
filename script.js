let firstnum = "";
let secondnum = "";
let operation = ""; 

// dom variables
let solutionScreen = document.querySelector(".solution");
let answerScreen = document.querySelector(".answer");

// number buttons
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
const pointBtn = document.querySelector(".point").addEventListener("click", () => {chooseBtn(".");});
const posneg = document.querySelector(".posneg").addEventListener("click", () => {chooseBtn("+/-");});

function chooseBtn(number) {
    switch(number){
        case 1:
            displayTextContent("1");
            break;
        case 2:
            displayTextContent("2");
            break;
        case 3:
            displayTextContent("3");
            break;
        case 4:
            displayTextContent("4");
            break;
        case 5:
            displayTextContent("5");
            break;
        case 6:
            displayTextContent("6");
            break;
        case 7:
            displayTextContent("7");
            break;
        case 8:
            displayTextContent("8");
            break;
        case 9:
            displayTextContent("9");
            break;
        case 0:
            displayTextContent("0");
            break;
        case "+/-":
            displayTextContent("-");
            break;
    }
}

// operation buttons
const percentBtn = document.querySelector(".percentage").addEventListener("click", percentage);
const divideBtn = document.querySelector(".divide").addEventListener("click", divide);
const multiplyBtn = document.querySelector(".multiply").addEventListener("click", multiply);
const subtractBtn = document.querySelector(".subtract").addEventListener("click", subtract);
const addBtn = document.querySelector(".add").addEventListener("click", add);

// tools buttons
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
    let x = parseFloat(firstnum);
    let y = parseFloat(secondnum);
    let answer;
    if (operation === "addition") {
        answerScreen.textContent = x + y;

    }
    else if (operation === "subtraction") {
        answerScreen.textContent = answer = x - y;
    }
    else if (operation === "multiplication") {
        answerScreen.textContent = answer = x * y;
    }
    else if (operation === "division") {
        if (x === 0 || y === 0) {
            answerScreen.textContent = "Cannot be divide by 0";
        }
        else {
            answer = x / y;
        }
    }
    else if (operation === "percentage") {
        answerScreen.textContent = firstnum / 100;
    }

};

function displayTextContent(content) {
    solutionScreen.textContent += content;
}

function backspace() {
    
}

function clear() {
    solutionScreen.textContent = null;
    answerScreen.textContent = null;
    firstnum = "";
    secondnum = "";
    operation = "";
};


