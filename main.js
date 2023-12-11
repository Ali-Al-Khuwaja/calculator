// equation  variables
let a = '';
let b = '';
let operator = ''; 

function add(a,b){
    a = parseInt(a);
    b = parseInt(b);
    screen.textContent = a+b;
}
function subtract(a,b){
    a = parseInt(a);
    b = parseInt(b);
    screen.textContent = a-b; 
}
function multiply(a,b){
    a = parseInt(a);
    b = parseInt(b);
    screen.textContent = a*b; 
}
function divide(a,b){
    a = parseInt(a);
    b = parseInt(b);
    screen.textContent = a/b; 
}
function operate(a,operator,b){
    if(operator===1){add(a,b);}
    else if(operator===2){multiply(a,b);}
    else if(operator===3){divide(a,b);}  
    else if(operator===4){subtract(a,b);}
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

function reverseNumbersOnScreen(target){
    return target.split('').reverse().join('');
}

// show what i click on calculator screen code block 
let oldNumberOnScreen = '';
let newNumberOnScreen = '';
let cleared = false;
let currentValueOnScreen = '';
function showNumberOnScreen(number){
    if(cleared===false){
        if(delChecker===false){
            newNumberOnScreen = number+oldNumberOnScreen;
            screen.textContent = newNumberOnScreen; //display on screen entered numbers
            currentValueOnScreen = newNumberOnScreen;
            oldNumberOnScreen = newNumberOnScreen;
        }else if(delChecker===true){ // go to the delete function to understand the logic
            delChecker = false;            
            newNumberOnScreen = ''; // clear afterDelete value 
            newNumberOnScreen = number + afterDelete ; // add  any entered number to afterDelete value 
            oldNumberOnScreen = newNumberOnScreen;
            screen.textContent = newNumberOnScreen;
            currentValueOnScreen = newNumberOnScreen;
        }
    }else if(cleared===true){ // something is not right here , fix me later
        newNumberOnScreen = number+oldNumberOnScreen;
        oldNumberOnScreen = newNumberOnScreen;
        screen.textContent = newNumberOnScreen;
        currentValueOnScreen = newNumberOnScreen;
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
    afterDelete.shift();
    afterDelete = afterDelete.join('');
    newNumberOnScreen = afterDelete;
    screen.textContent = afterDelete;
}
function calculatingProcessPartOne(operatorMark){
    a = screen.textContent;
    operator = operatorMark;
    clearScreen();
}
function calculatingProcessPartTwo(){
    b = screen.textContent;
    operate(a,operator,b);
}
//hmmmm