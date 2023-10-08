const a = '';
const b = '';
const operator = '';

function add(a,b){return a+b;}
function subtract(a,b){return a-b;}
function multiply(a,b){return a+b;}
function divide(a,b){return a/b;}
function operate(a,operator,b){
    if(operator===1){return add(a,b);}
    else if(operator===2){return multiply(a,b);}
    else if(operator===3){return divide(a,b);}
    else if(multiply===4){return subtract(a,b);}
}
const screen = document.querySelector('.screen');
// const one = document.querySelector('#one');
// const two = document.querySelector('#two');
// const three = document.querySelector('#three');
// const four = document.querySelector('#four');
// const five = document.querySelector('#five');
// const six = document.querySelector('#six');
// const seven = document.querySelector('#seven');
// const eight = document.querySelector('#eight');
// const nine = document.querySelector('#nine');
// const zero = document.querySelector('#zero');

// show what i click on calculator screen code block 
let oldNumberOnScreen = "";
function showNumberOnScreen(number){
    const newValue = number+oldNumberOnScreen;
    oldNumberOnScreen = newValue;
    debugger
    screen.innerHTML = newValue;
}