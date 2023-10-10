
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
let oldNumberOnScreen = '';
let newValue = '';
let cleared = false;
function showNumberOnScreen(number){
    if(cleared===false){
        newValue = number+oldNumberOnScreen;
        oldNumberOnScreen = newValue;
        screen.textContent = newValue; //display on screen entered numbers
    }else{
        oldNumberOnScreen = ''; // to clear what the stored values before clearing the display
        newValue = number+oldNumberOnScreen;
        oldNumberOnScreen = newValue;
        screen.textContent = newValue;
        cleared= false;
    }
}


function clearScreen(){
    cleared = true;
    screen.textContent='';
}
let deletionChecker = false;
function deleteLastNumber(){
    if(deletionChecker===false){
        let afterDelete = newValue.split("");
        afterDelete.pop();
        afterDelete = afterDelete.join('');
        newValue = '';
        screen.textContent = afterDelete;
    }   
}