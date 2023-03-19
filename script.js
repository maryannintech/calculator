let firstnum = "";
let secondnum = "";
let operation = ""; 

let solutionScreen = document.querySelector(".solution");
let answerScreen = document.querySelector(".answer");
const onebtn = document.querySelector(".one").addEventListener("click", () => {displayNum(1);});
const twobtn = document.querySelector(".two").addEventListener("click", () => {displayNum(2);});
const threebtn = document.querySelector(".three").addEventListener("click", () => {displayNum(3);});
const fourbtn = document.querySelector(".four").addEventListener("click", () => {displayNum(4);});
const fivebtn = document.querySelector(".five").addEventListener("click", () => {displayNum(5);});
const sixbtn = document.querySelector(".six").addEventListener("click", () => {displayNum(6);});
const sevenbtn = document.querySelector(".seven").addEventListener("click", () => {displayNum(7);});
const eigthbtn = document.querySelector(".eight").addEventListener("click", () => {displayNum(8);});
const ninebtn = document.querySelector(".nine").addEventListener("click", () => {displayNum(9);});
const zerobtn = document.querySelector(".zero").addEventListener("click", () => {displayNum(0);});
const pointbtn = document.querySelector(".point").addEventListener("click", () => {displayNum(".");});
const posneg = document.querySelector(".posneg").addEventListener("click", () => {})

function displayNum(number) {
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
    }
}

function add() {
    operation = "addition";
    solutionScreen.textContent = "+";
};

function subtract() {
    operation = "subtraction";
    solutionScreen.textContent = "-";
};

function multiply() {
    operation = "multiplication";
    solutionScreen.textContent = "x";
};

function divide() {
    operation = "division";
    solutionScreen.textContent = "÷";
    
};

function percentage() {
    operation = "percentage";
    solutionScreen.textContent = "%";
};

function operate() {
    let x = parseFloat(firstnum);
    let y = parseFloat(secondnum);
    let answer;
    if (operation === "addition") {
        answer = x + y;
    }
    else if (operation === "subtraction") {
        answer = x - y;
    }
    else if (operation === "multiplication") {
        answer = x * y;
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

    answerScreen.textContent = toString(answer);
};

function clear() {
    window.location.reload();
};

function displayTextContent(content) {
    solutionScreen.textContent += content;
}

const percentbtn = document.querySelector(".percentage").addEventListener("click", percentage);
const dividebtn = document.querySelector(".divide").addEventListener("click", divide);
const multiplybtn = document.querySelector(".multiply").addEventListener("click", multiply);
const subtractbtn = document.querySelector(".subtract").addEventListener("click", subtract);
const addbtn = document.querySelector(".add").addEventListener("click", add);

const equalbtn = document.querySelector(".equal").addEventListener("click", operate);

const clearbtn = document.querySelector(".clear").addEventListener("click", clear);



