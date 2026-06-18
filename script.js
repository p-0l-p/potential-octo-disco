let display = document.getElementById('display');
let currentInput = '';
let operator = '';
let previousValue = '';

// Add number to display
function appendNumber(num) {
    currentInput += num;
    updateDisplay();
}

// Add operator
function appendOperator(op) {
    if (currentInput === '' && previousValue === '') return;
    
    if (previousValue !== '') {
        calculate();
    }
    
    operator = op;
    previousValue = currentInput;
    currentInput = '';
}

// Clear display
function clearDisplay() {
    currentInput = '';
    operator = '';
    previousValue = '';
    updateDisplay();
}

// Perform calculation
function calculate() {
    if (previousValue === '' || currentInput === '' || operator === '') return;
    
    let result = 0;
    const prev = parseFloat(previousValue);
    const current = parseFloat(currentInput);
    
    switch(operator) {
        case '+':
            result = prev + current;
            break;
        case '-':
            result = prev - current;
            break;
        case '*':
            result = prev * current;
            break;
        case '/':
            if (current !== 0) {
                result = prev / current;
            } else {
                alert('Cannot divide by zero!');
                clearDisplay();
                return;
            }
            break;
        default:
            return;
    }
    
    currentInput = result.toString();
    operator = '';
    previousValue = '';
    updateDisplay();
}

// Update display
function updateDisplay() {
    if (currentInput === '') {
        display.value = previousValue;
    } else {
        display.value = currentInput;
    }
}

// Initialize
updateDisplay();