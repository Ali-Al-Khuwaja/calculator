
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
let newNumberOnScreen = '';
let cleared = false;
function showNumberOnScreen(number){
    if(cleared===false){
        if(delChecker===false){
            newNumberOnScreen = number+oldNumberOnScreen;
            screen.textContent = newNumberOnScreen; //display on screen entered numbers
            oldNumberOnScreen = newNumberOnScreen;
        }else if(delChecker===true){
            delChecker = false;            
            newNumberOnScreen = '';
            newNumberOnScreen = number + afterDelete ;
            oldNumberOnScreen = newNumberOnScreen;
            screen.textContent = newNumberOnScreen;
        }
    }else if(cleared===true){
        newNumberOnScreen = number+oldNumberOnScreen;
        oldNumberOnScreen = newNumberOnScreen;
        screen.textContent = newNumberOnScreen;
        cleared= false;
        delChecker=false;
    }
}


function clearScreen(){
    cleared = true;
    screen.textContent='';
    oldNumberOnScreen = '';
    newNumberOnScreen = '';
}
let delChecker = false;
afterDelete = '';
function deleteLastNumber(){
    delChecker = true;
    afterDelete = newNumberOnScreen.split("");
    afterDelete.pop();
    afterDelete = afterDelete.join('');
    newNumberOnScreen = afterDelete;
    screen.textContent = afterDelete;
}
