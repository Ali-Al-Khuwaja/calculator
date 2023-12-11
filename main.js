// equation  variables
// 1 = true  , 0 = false , basic cs 
let a = '';
let b = '';
let c = '';
let operator = ''; 
let actAsEquals = false;
let operatorHistory = [];
let actAsEqualsPhaseTwo = false
let counter = 0;

//as told in the project assignment
function add(a,b){
    a = parseInt(a);
    b = parseInt(b);
    screen.textContent = a+b;
    return a+b;
}
function subtract(a,b){
    a = parseInt(a);
    b = parseInt(b);
    screen.textContent = a-b; 
    return a-b;
}
function multiply(a,b){
    a = parseInt(a);
    b = parseInt(b);
    screen.textContent = a*b; 
    return a*b;
}
function divide(a,b){
    a = parseInt(a);
    b = parseInt(b);
    screen.textContent = a/b; 
    return a/b;
}
function operate(a,operator,b){
    if(operator===1){add(a,b);}
    else if(operator===2){multiply(a,b);}
    else if(operator===3){divide(a,b);}  
    else if(operator===4){subtract(a,b);}
}
//my solution
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
// no need for those , i think 

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
    a='';
    b='';
    c='';
    operator='';
    operatorHistory[0]='';
    operatorHistory[1]='';
    actAsEqualsPhaseTwo=false;
    actAsEquals=false;
    counter = '0';
}
function clearScreenOperationOnly(){
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
    counter++;
    if(actAsEquals===false){ //must be active if you want it to act as the equals button 
        a=screen.textContent;
        operator=operatorMark;
        operatorHistory[0] = operator; 
        clearScreenOperationOnly();
        actAsEquals=true;
        }
    else if(actAsEquals===true){
        if(actAsEqualsPhaseTwo===false){
            operatorHistory[1] = operatorMark;
            operator = operatorHistory[0];
            calculatingProcessPartTwo();
            actAsEqualsPhaseTwo=true;
        }else if(actAsEqualsPhaseTwo===true){
            operator = operatorHistory[1];
            operatorHistory[0] = operatorMark;
            calculatingProcessPartTwo();
            actAsEqualsPhaseTwo=false;
        }
    }
}
function calculatingProcessPartTwo(normalMode){
    if(normalMode===1){
        if((actAsEqualsPhaseTwo===false && counter>1)){
            b=screen.textContent;
            operator = operatorHistory[0];
            operate(a,operator,b);
        }else if(actAsEqualsPhaseTwo===true && counter>1){
            b=screen.textContent;
            operator = operatorHistory[1];
            operate(a,operator,b); 
        } 
        // i found out that i'm 50% done because this is not reliable
        else if(counter===1){
            b=screen.textContent;
            operator
            operate(a,operator,b);
        }
    }
    else{
        b=screen.textContent;
        operate(a,operator,b);
        c=screen.textContent;
        a=c;
        oldNumberOnScreen='';
    }
}

const equalsButton = document.querySelector('#bigButton');
equalsButton.addEventListener('click',()=>{
    calculatingProcessPartTwo(1);
});
