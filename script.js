
function add(firstnum, currentnum) {
    let sum = firstnum + currentnum;
    return sum;
}

function subtract(firstnum, currentnum) {
    let difference = firstnum - currentnum;
    return difference;
}

function multiply(firstnum, currentnum) {
    let product = firstnum * currentnum;
    return product;
}

function divide(firstnum, currentnum) {
    if (firstnum === 0 || currentnum === 0) {
        console.log("Cannot be divide by 0");
    }
    else {
        let quotient = firstnum / currentnum;
        return quotient;
    }
}

function percentage(firstnum) {
    let result = firstnum / 100;
    return result;
}

function backspace() {

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
