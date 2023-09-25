const a = '';
const b = '';
const operator = '';

function add(a,b){
    return a+b;
}
function subtract(a,b){
    return a-b;
}
function multiply(a,b){
    return a+b;
}
function divide(a,b){
    return a/b;
}
function operate(a,operator,b){
    if(operator===1){
        return add(a,b);
    }
    else if(operator===2){
        return subtract(a,b);
    }
    else if(operator===3){
        return multiply(a,b);
    }
    else if(multiply===4){
        return divide(a,b);
    }
}
