//business logic
function add(number1, number2) {
    return number1 + number2;
}
function sub(number3, number4) {
    return number3 - number4;

}
function multi(number5, number6) {
    return number5 * number6;
}
function div(number7, number8) {
    return number7 / number8;
}

//user interface logic
const number1 = parseInt(prompt("Enter a number:"));
const number2 = parseInt(prompt("Enter another number:"));
const number3 = parseInt(prompt("Enter a number"));
const number4 = parseInt(prompt("Another Number"));
const number5 = parseInt(prompt("Enter a number:"));
const number6 = parseInt(prompt("Enter another number:"));
const number7 = parseInt(prompt("Enter a number:"));
const number8 = parseInt(prompt("Enter another number:"));

window.alert(add(number1, number2) + ', ' + sub(number3, number4) + ', ' + multi(number5, number6) + ', ' + div(number7, number8) + '.');

