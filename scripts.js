let button = document.querySelectorAll('.button')


//loop through all of the buttons and add event listen for click function
for (let i = 0; i < button.length; i++) {
    button[i].addEventListener('click', function(e){buttonClick(e)}, false);
}


function buttonClick(e){
e.target.classList.add('buttonClick');
    setTimeout(function () {
        e.target.classList.remove('buttonClick');
    }, 100)
    
}





/********FUNCTIONS********/

function add(a,b){
    return a + b
}

function subtract(a,b){
    return a - b
}

function multiply(a,b){
    return a * b
}

function divide(a,b){
    return a / b
}

function operate(a, operator, b) {
    if (operator === 'add') {
        return add(a, b);
    }else if (operator === 'subtract') {
        return subtract(a, b);
    }else if (operator === 'multiply') {
        return multiply(a, b);
    }else return divide(a, b);
    
}

