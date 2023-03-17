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

function operate(operation) {
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
    }
}

console.log(divide(10,1));
