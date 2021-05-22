let button = document.querySelectorAll('.button')
const screen = document.querySelector('#screenText')




//loop through all of the buttons and add event listen for click function
for (let i = 0; i < button.length; i++) {
    button[i].addEventListener('click', function (e) {
        buttonClick(e)
    }, false);
}




let operand1 = ' ';
let operand2 = ' ';
let operator = ' ';
let result = ' ';
let numberLog = ' ';
let specialSituation = false; // stringing together operations
let screenText = '';


setScreen('let\'s do some math!')

//Math!

function buttonClick(e) {
    //visual effect of click
    e.target.classList.add('buttonClick');
    setTimeout(function () {
        e.target.classList.remove('buttonClick');
    }, 100);


    if (e.target.value === 'clear') {
        clearIt()
        setScreen(numberLog);

    } else if (e.target.classList.contains('operand')) {

        if (deciRules(e)) {
            setScreen(numberLog)

        } else {
            if (numberLog.length > 15) {
                setScreen(numberLog);

            } else if (specialSituation) {
                numberLog = ' '
                setScreen(numberLog)
                numberLog += e.target.value
                setScreen(numberLog);
                operand2 = ' ';
                specialSituation = false;

            } else if (operand1 === ' ') {
                numberLog += e.target.value;
                setScreen(numberLog)

            } else if (operator !== ' ') {
                numberLog += e.target.value;
                setScreen(numberLog)
            }

        }

    } else if (e.target.classList.contains('operator')) {

        if (operator === ' ') {
            operand1 = parseFloat(numberLog);
            numberLog = ' ';
            setScreen(numberLog);
            operator = e.target.value;

        } else if (operator !== ' ') {
            operand2 = parseFloat(numberLog);

            if (divideZero() === true) {
                setScreen('Don\'t do that.')
            } else {
                result = operate(operand1, operator, operand2);
                setScreen(result);
                operand2 = ' ';
                operand1 = result;
                operator = e.target.value;
                specialSituation = true
            }
        }

    } else if (e.target.classList.contains('equals')) {
        operand2 = parseFloat(numberLog);

        if (divideZero()) {
            setScreen('Don\'t do that.')
        } else if (operator === ' ') {
            setScreen(numberLog)
        } else {
            divideZero(operand2, operator);
            result = operate(operand1, operator, operand2);
            setScreen(result);
        }
    }
}







/********FUNCTIONS********/

function setScreen(text) {
    screen.innerText = text;


}

function add(a, b) {
    return a + b
}

function subtract(a, b) {
    return a - b
}

function multiply(a, b) {
    return a * b
}

function divide(a, b) {
    return a / b
}

function operate(a, operator, b) {
    if (operator === 'add') {
        return add(a, b);
    } else if (operator === 'subtract') {
        return subtract(a, b);
    } else if (operator === 'multiply') {
        return multiply(a, b);
    } else if (operator === 'divide') {
        return divide(a, b);
    } else {

    }

}

function clearIt() {
    screenText = ' ';
    operand1 = ' ';
    operand2 = ' ';
    operator = ' ';
    result = ' ';
    numberLog = ' ';
    specialSituation = false;
}

function divideZero() {
    if (operator === 'divide' && operand2 === 0) {
        return true
    }

}

function deciRules(e) {
    if  ((e.target.value === '.' && numberLog === ' ') || (e.target.value === '.' && numberLog.includes('.'))) {return true}
    
}