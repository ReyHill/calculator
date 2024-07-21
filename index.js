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

let num1 = '';
let num2 = '';
let operator = '';
let displayValue = document.querySelector('div.screen');

let error1 = 'Cannot evaluate an incomplete expression.';
let error2 = 'Must have at least one number to perform this action.'
let error3 = 'This button is inactive in this state.'

const buttons = document.querySelectorAll('.btn'); 
const arrayOfButtons = Array.from(buttons);
arrayOfButtons.map(addListener);

const state000 = () => num1 === '' && operator === '' && num2 === '';
const state100 = () => num1 !== '' && operator === '' && num2 === '';
const state110 = () => num1 !== '' && operator !== '' && num2 === '';
const state111 = () => num1 !== '' && operator !== '' && num2 !== '';

function percentToDecimal(n) {
  const adjusted = n.slice(0, -1); 
  return parseFloat(adjusted) / 100;
}

function cutEnd(elem) {
  elem = elem.slice(0, -1);
  return elem;
}

function operate(num1, operator, num2) {
  const valA = parseFloat(num1); 
  const valB = parseFloat(num2); 
    switch (operator) {
        case '+': 
            return parseFloat ( add(valA, valB).toFixed(4) );
        case '-':
            return parseFloat( subtract(valA, valB).toFixed(4) );
        case '*': 
            return parseFloat ( multiply(valA, valB).toFixed(4) );
        case '/':
            return parseFloat ( divide(valA, valB).toFixed(4) );
        default:
            console.log(ERROR);
            console.log(`${num1} ${operator} ${num2}}`);
    }
}

function addListener(element) {
  element.addEventListener('click', function(e) {
    const splitId = e.target.id.split('');
    if(splitId[0] === 'a') {
          if(state000()) { 
            num1 = num1.concat(splitId[1]);
            displayValue.textContent = `${num1} ${operator} ${num2}`;
          } else if(state100()) { 
            num1 = num1.concat(splitId[1]); 
            displayValue.textContent = `${num1} ${operator} ${num2}`;
          } else if(state110()) { 
            num2 = num2.concat(splitId[1]); 
            displayValue.textContent = `${num1} ${operator} ${num2}`;
          } else if(state111()) { 
            num2 = num2.concat(splitId[1]);
            displayValue.textContent = `${num1} ${operator} ${num2}`; 
          }
    } else if(splitId[0] === 'b') {
          if(state000()) {
            console.log(error3);
          } else if(state100()) { 
            operator = operator.concat(splitId[1]);
            displayValue.textContent = `${num1} ${operator} ${num2}`;
          } else if(state110()) { 
            operator = '';
            operator = operator.concat(splitId[1]);
            displayValue.textContent = `${num1} ${operator} ${num2}`;
          } else if(state111()) { 
            num1 = operate(num1, operator, num2);
            operator = '';
            operator = operator.concat(splitId[1]);
            num2 = '';
            displayValue.textContent = `${num1} ${operator} ${num2}`;
          }
    } else if(splitId[0] === 'c') {
          if(state000()) { 
            if(splitId[1] === '.') {
              num1 = num1.concat(splitId[1]);
              displayValue.textContent = `${num1} ${operator} ${num2}`;
            } else if(splitId[1] === '%') {
              console.log(error2);
            } else if(splitId[1] === '^') {
              console.log(error2);
            } else if(splitId[1] === '=') {
              console.log(error1);
            }
          } else if(state100()) { 
            if(splitId[1] === '.') {
              if(!num1.includes(splitId[1])) {
                num1 = num1.concat(splitId[1]); 
                displayValue.textContent = `${num1} ${operator} ${num2}`; 
              }
            } else if(splitId[1] === '%') { 
              num1 = parseFloat(num1) / 100; 
              displayValue.textContent = `${num1} ${operator} ${num2}`;
            } else if(splitId[1] === '^') {
              if(!num1.includes('-')) {
                num1 = '-' + num1;
                displayValue.textContent = `${num1} ${operator} ${num2}`;
              } else {
                num1 = num1.substring(1);
                displayValue.textContent = `${num1} ${operator} ${num2}`;
              }
            } else if(splitId[1] === '=') {
              console.log(error1);
            }
          } else if(state110()) {
            if(splitId[1] === '.') {
              if(!num2.includes(splitId[1])) {
                num2 = '0' + num2.concat(splitId[1]); 
                displayValue.textContent = `${num1} ${operator} ${num2}`;
              }
            } else if(splitId[1] === '%') {
              console.log(error2); 
            } else if(splitId[1] === '^') {
              if(!num2.includes('-')) {
                num2 = '-' + num2;
                displayValue.textContent = `${num1} ${operator} ${num2}`
              } else {
                num2 = num2.substring(1);
                displayValue.textContent = `${num1} ${operator} ${num2}`;
              }
            } else if(splitId[1] === '=') {
              console.log(error1);
            }
          } else if(state111()) { 
            if(splitId[1] === '.') {
              if(!num2.includes(splitId[1])) {
                num2 = num2.concat(splitId[1]);
                displayValue.textContent = `${num1} ${operator} ${num2}`;
              }
            } else if(splitId[1] === '%') {
              num2 = parseFloat(num2) / 100;
              displayValue.textContent = `${num1} ${operator} ${num2}`
            } else if(splitId[1] === '^') {
              if(!num2.includes('-')) {
                num2 = '-' + num2;
                displayValue.textContent = `${num1} ${operator} ${num2}`;
              } else {
                num2 = num2.substring(1);
                displayValue.textContent = `${num1} ${operator} ${num2}`;
              }
            } else if(splitId[1] === '=') {
              if(operator === '/' && num1 === '0' || num2 === '0') {
                displayValue.textContent = 'Hmmm...';
              } else {
              displayValue.textContent = operate(num1, operator, num2);
              }
            }
          }
    } else if(splitId[0] === 'd') {
            if(state000()) {
              console.log('Nothing to clear!');
            } else if(state100()) {
              if(splitId[1] === '0') { 
                num1 = cutEnd(num1); 
                displayValue.textContent = `${num1} ${operator} ${num2}`;
              } else if(splitId[1] === '1') { 
                num1 = '';
                operator = '';
                num2 = '';
                displayValue.textContent = `${num1} ${operator} ${num2}`;
              }
            } else if(state110()) {
              if(splitId[1] === '0') { 
                operator = cutEnd(operator);
                displayValue.textContent = `${num1} ${operator} ${num2}`
              } else if(splitId[1] === '1') { 
                num1 = '';
                operator = '';
                num2 = '';
                displayValue.textContent = `${num1} ${operator} ${num2}`;
              }
            } else if(state111()) { 
              if(splitId[1] === '0') { 
                num2 = cutEnd(num2);
                displayValue.textContent = `${num1} ${operator} ${num2}`
              } else if(splitId[1] === '1') {
                num1 = '';
                operator = '';
                num2 = '';
                displayValue.textContent = `${num1} ${operator} ${num2}`;
              }
            }
    }
  })
}