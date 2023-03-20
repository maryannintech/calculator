let num1
let num2;
let operation;
let clicked = false;

function add(x, y) {
    let result = Number(x) + Number(y);
    return result;
}

function subtract(x, y) {
    let result = Number(x) - Number(y);
    return result;
}

function multiply(x, y) {
    let result = Number(x) * Number(y);
    return result;
}

function divide(x, y) {
    if (x === 0 || y === 0) {
        prompt("Cannot be divide by zero");
    }
    else {
        let result = Math.floor(Number(x) / Number(y));
        return result;
    }
}

const solutionScreen = document.querySelector(".solution");
const answerScreen = document.querySelectorAll(".answer");

const numBtns = document.querySelectorAll(".num");
numBtns.forEach((btn) => {
    btn.addEventListener("click", e => {
        if (operation === "") {
            num1 += e.target.textContent;
            console.log(num1);
        }
        else {
            num2 += e.target.textContent;
            console.log(num2);
        }
    });
});

const opeBtns = document.querySelectorAll(".ope");
opeBtns.forEach((opBtn) => {
    opBtn.addEventListener("click", e => {
        if (e.target.textContent !== "=") {
            operation = e.target.textContent;
            console.log(num1);
            console.log(operation);
        }
        else {
            console.log(num2);
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
                default:
                    return;
            }
        }
    })
});
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



