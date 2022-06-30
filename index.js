"use strict";
exports.__esModule = true;
var readline_sync_1 = require("readline-sync");
function isNumber(str) {
    var num = parseInt(str);
    var isNum = (!(isNaN(num))); // isNaN -> is_not_a_number function -> this return true if input is not a num. 
    return isNum;
}
function isOperator(op) {
    var ans = false;
    if (op === '*' || op === '+' || op === '-' || op === '/' || op === '%' || op === '^' || op === '&' || op === '|')
        ans = true;
    return ans;
}
function calculate(num1, op, num2) {
    if (op === '+')
        return num1 + num2;
    if (op === '-')
        return num1 - num2;
    if (op === '*')
        return num1 * num2;
    if (op === '/')
        return num1 / num2;
    if (op === '&')
        return ((num1) & (num2));
    if (op === '^')
        return ((num1) ^ (num2));
    if (op === '%')
        return num1 % num2;
    return ((num1) | (num2));
}
function main() {
    var userInputStr1 = (0, readline_sync_1.question)('Enter First Number :\n');
    var operator = (0, readline_sync_1.question)('Enter Operation :\n');
    var userInputStr2 = (0, readline_sync_1.question)('Enter Second Number :\n');
    var isValid = (isNumber(userInputStr1) && isOperator(operator) && isNumber(userInputStr2));
    if (!isValid) {
        console.log('Invalid Input!\n');
        main();
    }
    else {
        var num1 = parseInt(userInputStr1);
        var num2 = parseInt(userInputStr2);
        var result = calculate(num1, operator, num2);
        console.log("The value of ".concat(num1, " ").concat(operator, " ").concat(num2, " is = ").concat(result));
    }
}
main();
