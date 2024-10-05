let display = document.getElementById('display');
let expression = '';

function clearDisplay() {
    display.value = '';
    expression = '';
}

function backspace() {
    expression = expression.slice(0, -1);
    display.value = expression;
}

function appendNumber(num) {
    expression += num;
    display.value = expression;
}

function appendOperator(op) {
    expression += op;
    display.value = expression;
}

function calculate() {
    try {
        let result = eval(expression);
        display.value = result;
        expression = result.toString();
    } catch (error) {
        display.value = 'Error';
        expression = '';
    }
}