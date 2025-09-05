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
    op = va;
    clearDisplay()

}
document.addEventListener('keydown', (e) => {   
    if (e.key >= '0' && e.key <= '9') {
        count++;
        if (count <= 12) {
            display.value += e.key;
        }
    } else if (e.key === '+' || e.key === '-' || e.key === '*' || e.key === '/') {
        symbo(e.key);
    } else if (e.key === '=' || e.key === 'Enter') {
        calculate();
    }
    else if(e.key === 'Backspace' || e.key === 'Delete'){
        clearDisplay()
    }
});

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
    display.value = 'Answer is : ' + result;
    count = 0;
}