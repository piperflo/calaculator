const zero = document.getElementById('zero');
const one = document.getElementById('one');
const two = document.getElementById('two');
const three = document.getElementById('three');
const four = document.getElementById('four');
const five = document.getElementById('five');
const six = document.getElementById('six');
const seven = document.getElementById('seven');
const eight = document.getElementById('eight');
const nine = document.getElementById('nine');

const addO = document.getElementById('add');
const subO = document.getElementById('sub');
const multO = document.getElementById('multiply');
//const divideO = document.getElementById('add');
const a = document.getElementsByClassName('number');
let score = document.getElementById('score');
let scoreTwo = document.getElementById('scoreTwo');
let num1 = 0;
let num2 = 0;
let operator = "";
let bool = false;
let values = 0;
let count = 0;
let sum = 0;
let operand = '+';
let numberBuilder = "";
let numberBuilder1 = "";
let numberBuilder2 = "";
let bool1 = false;
function calculate(num1, op, num2){
    console.log(num1 + " " + op + " " + num2);
    num1 = parseInt(num1);
    num2 = parseInt(num2);
    bool = false;
    switch(op) {
        case "+":
            return add(num1, num2);
        case "-":
            return subtract(num1, num2);
        case "*":
            return multiply(num1, num2);
        case "/":
            return divide(num1, num2);
        default:
            return "ERROR";
    }
}

function changeOperand(op){
    operand = op;
}
function numberPushed(){
    if(bool === true){
        num2 = numberBuilder;
        score.innerText = calculate(num1, operand, num2);
        num1 = score.innerText;
        numberBuilder = "";
    }
    console.log("numberBuilder: " + numberBuilder);
}

zero.addEventListener('click', () => {
    score.innerText = '0' + numberBuilder;
    num2 = 0;
    numberBuilder += score.innerText;
    
});

one.addEventListener('click', () => {
    //numberPushed();
    //if number is pushed first
    //create a string builder and add to that
    //every time the button is clicked we will add to the string
    //until operand is clicked
    //once operand is clicked 
    if(bool1){
        numberBuilder1 += '1';
    }
    else{
        numberBuilder2 += '1';
    }
    /*
    //score.innerText = '1' numberBuilder;
    num2 = 1;
    numberBuilder += '1';
    console.log("Adding to string builder: " + numberBuilder);
    */
});

two.addEventListener('click', () => {
    score.innerText = '2' + numberBuilder;
    num2 = 2;
    numberBuilder += '2';
    //numberPushed();
});

three.addEventListener('click', () => {
    score.innerText = '3' + numberBuilder;
    num2 = 3;
    numberBuilder += '3';
    //numberPushed();
});

four.addEventListener('click', () => {
    score.innerText = '4' + numberBuilder;
    num2 = 4;
    numberBuilder += '4';
    //numberPushed();
});

five.addEventListener('click', () => {
    score.innerText = '5' + numberBuilder;
    num2 = 5;
    numberBuilder += '5';
    //numberPushed();
});

six.addEventListener('click', () => {
    score.innerText = '6' + numberBuilder;
    num2 = 6;
    numberBuilder += '6';
    //numberPushed();

});

seven.addEventListener('click', () => {
    score.innerText = '7' + numberBuilder;
    num2 = 7;
    numberBuilder += '7';
    //numberPushed();

});

eight.addEventListener('click', () => {
    score.innerText = '8' + numberBuilder;
    num2 = 8;
    numberBuilder += '8';
    //numberPushed();
    
});

nine.addEventListener('click', () => {
    score.innerText = '9' + numberBuilder;
    num2 = 9;
    numberBuilder += '9';
    //numberPushed();
})


addO.addEventListener('click', () => {
    score.innerText += ' + ';
    console.log("Add was pushed");
    bool = true;
    numberPushed();
});

subO.addEventListener('click', () => {
    score.innerText += ' - ';
    console.log("Sub was pushed");
    bool = true;
    numberPushed();
});
multO.addEventListener('click', () => {
    score.innerText += ' * ';
    console.log("Mult was pushed");
    bool = true;
    numberPushed();
});


const add = function(num1, num2) {
    console.log(num1 + num2);
    return num1 + num2;
}

const subtract = function(num1, num2) {
    return num1 - num2;
}

const multiply = function(num1, num2) {
    return num1 * num2;
}

const divide = function(num1, num2) {
    return num1 / num2;
}


//score.innerText = `${num1}`;