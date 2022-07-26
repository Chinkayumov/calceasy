// var buttonPlus = document.getElementById('buttonPlus');
// var buttonMinus = document.getElementById('buttonMinus');
// var buttonMultiply = document.getElementById('buttonMultiply');
// var buttonDevide = document.getElementById('buttonDevide');

var operationButtons = document.getElementsByClassName ('operation-button');

// var operationButtons = [buttonPlus, buttonMinus, buttonMultiply, buttonDevide] 

var input1 = document.getElementById('number1');
var input2 = document.getElementById('number2');

// function number1() {
//     return Number(input1.value);
// }
// function number2() {
//     return Number(input2.value);
// }

function makeOperation (operationCode) {
   var number1 = Number(input1.value)
   var number2 = Number(input2.value)


    if (operationCode === '+') {   
        var result = number1 + number2 ;
    } else if (operationCode === '-') {
        var result = number1 - number2 ;

    } else if (operationCode === '*') {
        var result = number1 * number2 ;

    } else if (operationCode === '/') {
        var result = number1 / number2 ;

    } else {
        window.alert('operation is unknown')
    }
 
    window.alert(result);
}

// function onButtonPlusClick() {

//     makeOperation ('+')
// }
// function onButtonMinusClick() {


//     makeOperation ('-')
// }
// function onButtonMultiplyClick() {

//     makeOperation ('*')
// }
// function onButtonDevideClick() {

//     makeOperation ('/')

// }

function onOperationButtonClick (eventObject) {
    var clickedElement = eventObject.currentTarget;
    var operation = clickedElement.innerHTML;
    makeOperation (operation);
}

// function addCommonEventListener (i) {
//     operationButtons[i].addEventListener('click', onOperationButtonClick);
// }


// addCommonEventListener(0);
// addCommonEventListener(1);
// addCommonEventListener(2);
// addCommonEventListener(3);


for (var index = 0; index < operationButtons.length; index++) {
    var button = operationButtons [index];
    button.addEventListener ('click', onOperationButtonClick )
    
}