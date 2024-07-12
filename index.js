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

let displayValue = document.querySelector('div.screen');

const zero = document.querySelector('#zero'); 
zero.addEventListener('click', () => {
    displayValue.textContent = 0;
});

const one = document.querySelector('#one'); 
one.addEventListener('click', () => {
    displayValue.textContent = 1;
});

const two = document.querySelector('#two');
two.addEventListener('click', () => {
    displayValue.textContent = 2;
});

const three = document.querySelector('#three');
three.addEventListener('click', () => {
    displayValue.textContent = 3;
});

const four = document.querySelector('#four');
four.addEventListener('click', () => {
    displayValue.textContent = 4;
});

const five = document.querySelector('#five'); 
five.addEventListener('click', () => {
    displayValue.textContent = 5;
});

const six = document.querySelector('#six'); 
six.addEventListener('click', () => {
    displayValue.textContent = 6;
});

const seven = document.querySelector('#seven'); 
seven.addEventListener('click', () => {
    displayValue.textContent = 7;
});

const eight = document.querySelector('#eight'); 
eight.addEventListener('click', () => {
    displayValue.textContent = 8;
});

const nine = document.querySelector('#nine'); 
nine.addEventListener('click', () => {
    displayValue.textContent = 9;
});