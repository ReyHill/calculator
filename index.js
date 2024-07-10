function add(a, b) {
    return a + b; 
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

let num1;
let num2;
let operator;

function operate(num1, operator, num2) {
    switch (operator) {
        case '+': 
            console.log( add(num1, num2) );
            break;
        case '-':
            console.log( subtract(num1, num2) );
            break;
        case '*': 
            console.log( multiply(num1, num2) );
            break;
        case '/':
            console.log( divide(num1, num2) );
            break;
        default:
            console.log('error, no operation selected');
    }
}