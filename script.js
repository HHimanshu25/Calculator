let count = 0;
let num1 = 0;
let num2 = 0;
let op 
let display = document.querySelector('.display input');
function numvalue(val) {
    count++;
    if (count <= 12) {
        display.value += val;
    }
}

function clearDisplay() {
    count = 0;
    display.value = '';
}
function symbo(va) {
    num1 = Number(display.value)
    clearDisplay()
    op = va;
    
}
function calculate() {
    num2 = Number(display.value);
    let result;
    switch (op) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = num2 !== 0 ? num1 / num2 : 'Error';
            break;
        default:
            result = 'Invalid';
    }
    display.value = 'Answer is : '+result;
    count = 0;
}