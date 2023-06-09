//We are grabbing all of the number buttons for event listeners
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

//We are grabbing the operands for event listeners
const addO = document.getElementById('add');
const subO = document.getElementById('sub');
const multO = document.getElementById('multiply');
const divideO = document.getElementById('divide');

const clear = document.getElementById('clear');
const changeAddSub = document.getElementById('changeAddSub');
const percent = document.getElementById('percent');


//const a = document.getElementsByClassName('number');
let score = document.getElementById('score');
let scoreTwo = document.getElementById('scoreTwo');
let num1 = 0;
let num2 = 0;
let operator = "";
//let bool = false;
//let values = 0;
//let count = 0;
//let sum = 0;
let operand = '+';
let numberBuilder = "";
let numberBuilder1 = "0";
let numberBuilder2 = "0";
let bool1 = true;
function calculate(num1, op, num2){
    console.log(num1 + " " + op + " " + num2);
    num1 = parseInt(num1);
    num2 = parseInt(num2);
    //bool = false;
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
/*
function changeOperand(op){
    operand = op;
}
*/
function numberPushed(){
    num1 = numberBuilder1;
    num2 = numberBuilder2;
    score.innerText = calculate(num1, operand, num2);
    numberBuilder1 = score.innerText;
    numberBuilder2 = "0";
    //num1 = score.innerText;
    //numberBuilder = "";
    console.log("numberBuilder: " + numberBuilder1);
}

zero.addEventListener('click', () => {
    //Adding to the first string
    if(bool1 === true){
        numberBuilder1 += '0';
        score.innerText += '0';
        console.log("0 added to first string");
    }
    //Adding to the second string
    else{
        numberBuilder2 += '0';
        console.log("0 added to second string");
    }
    
});

one.addEventListener('click', () => {
    //Adding to the first string
    if(bool1 === true){
        numberBuilder1 += '1';
        score.innerText += '1';
        console.log("1 added to first string");
    }
    //Adding to the second string
    else{
        numberBuilder2 += '1';
        console.log("1 added to second string");
    }
});

two.addEventListener('click', () => {
    //Adding to the first string
    if(bool1 === true){
        numberBuilder1 += '2';
        score.innerText += '2';
        console.log("2 added to first string");
    }
    //Adding to the second string
    else{
        numberBuilder2 += '2';
        console.log("2 added to second string");
    }
});

three.addEventListener('click', () => {
    //Adding to the first string
    if(bool1 === true){
        numberBuilder1 += '3';
        score.innerText += '3';
        console.log("3 added to first string");
    }
    //Adding to the second string
    else{
        numberBuilder2 += '3';
        console.log("3 added to second string");
    }
});

four.addEventListener('click', () => {
    //Adding to the first string
    if(bool1 === true){
        numberBuilder1 += '4';
        score.innerText += '4';
        console.log("4 added to first string");
    }
    //Adding to the second string
    else{
        numberBuilder2 += '4';
        console.log("4 added to second string");
    }
});

five.addEventListener('click', () => {
    //Adding to the first string
    if(bool1 === true){
        numberBuilder1 += '5';
        score.innerText += '5';
        console.log("5 added to first string");
    }
    //Adding to the second string
    else{
        numberBuilder2 += '5';
        console.log("5 added to second string");
    }
});

six.addEventListener('click', () => {
    //Adding to the first string
    if(bool1 === true){
        numberBuilder1 += '6';
        score.innerText += '6';
        console.log("6 added to first string");
    }
    //Adding to the second string
    else{
        numberBuilder2 += '6';
        console.log("6 added to second string");
    }

});

seven.addEventListener('click', () => {
    //Adding to the first string
    if(bool1 === true){
        numberBuilder1 += '7';
        score.innerText += '7';
        console.log("7 added to first string");
    }
    //Adding to the second string
    else{
        console.log("7 added to second string");
        numberBuilder2 += '7';
    }
});

eight.addEventListener('click', () => {
    //Adding to the first string
    if(bool1 === true){
        console.log("8 added to first string");
        numberBuilder1 += '8';
        score.innerText += '8';
    }
    //Adding to the second string
    else{
        console.log("8 added to second string");
        numberBuilder2 += '8';
    }
});

nine.addEventListener('click', () => {
    //Adding to the first string
    if(bool1 === true){
        console.log("9 added to first string");
        numberBuilder1 += '9';
        score.innerText += '9';
    }
    //Adding to the second string
    else{
        console.log("9 added to second string");
        numberBuilder2 += '9';
    }
})


addO.addEventListener('click', () => {
    score.innerText += ' + ';
    if(bool1 === false){
        numberPushed();
        operand = '+';
    }else{
        bool1 = false;
        operand = '+';
    }
    console.log("Add was pushed");
});

subO.addEventListener('click', () => {
    score.innerText += ' - ';
    if(bool1 === false){
        numberPushed();
        operand = '-';
    }else{
        bool1 = false;
        operand = '-';
    }
    bool1 = false;
    console.log("Sub was pushed");
});

multO.addEventListener('click', () => {
    score.innerText += ' * ';
    if(bool1 === false){
        numberPushed();
        operand = '*';
    }else{
        bool1 = false;
        operand = '*';
    }
    bool1 = false;
    console.log("Mult was pushed");
});

divideO.addEventListener('click', () => {
    score.innerText += ' / ';
    if(bool1 === false){
        numberPushed();
        operand = '/';
    }else{
        bool1 = false;
        operand = '/';
    }
    bool1 = false;
    console.log("Mult was pushed");
});

clear.addEventListener('click', () => {
    score.innerText = '';
    numberBuilder1 = "0";
    numberBuilder2 = "0";
    bool1 = true;
});

const add = function(num1, num2) {
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