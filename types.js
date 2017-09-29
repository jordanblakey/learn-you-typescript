////////////////////////////////////////////////////////////////////////////////
// BASIC TYPES
////////////////////////////////////////////////////////////////////////////////
var myName = "Jordan";
var myAge = 41;
var canVote = true;
var anything = "dog";
var inferred = 2;
document.getElementById('ts').innerHTML = 'Hi, my name is ' + myName + '.';
document.write('<br><h3>Basic Types</h3>');
document.write('myName is a ' + typeof (myName) + '.<br>');
document.write('myAge is a ' + typeof (myAge) + '.<br>');
document.write('canVote is a ' + typeof (canVote) + '.<br>');
document.write('anything is a ' + typeof (anything) + '.<br>');
document.write('inferred is a ' + typeof (inferred) + '.<br>');
var strToNum = parseInt('5');
var numToStr = 5;
document.write('numToStr is a ' + typeof (numToStr.toString()) + '.<br>');
var PI = 3.14159;
////////////////////////////////////////////////////////////////////////////////
// INTERFACES
////////////////////////////////////////////////////////////////////////////////
document.write('<br><h3>Interfaces & Arrays</h3>');
var superman = {
    realName: 'Clark Kent',
    superName: 'Superman'
};
document.write(superman.realName + ' is ' + superman.superName + '.<br>');
var employees = ['Bob', 'Sally', 'Sam'];
// employees.push(5);
document.write(employees.toString() + '<br>');
var superheroes = [];
superheroes.push({
    realName: 'Bruce Wayne',
    superName: 'Batman'
});
document.write(superheroes[0].realName + ' is ' + superheroes[0].superName + '.<br>');
////////////////////////////////////////////////////////////////////////////////
// MATH
////////////////////////////////////////////////////////////////////////////////
document.write('<br><h3>Operators</h3>');
document.write('5 + 4 = ' + (5 + 4) + '.<br>');
document.write('5 - 4 = ' + (5 - 4) + '.<br>');
document.write('5 * 4 = ' + (5 * 4) + '.<br>');
document.write('5 / 4 = ' + (5 / 4) + '.<br>');
document.write('5 % 4 = ' + (5 % 4) + '.<br>');
document.write('5 + String 2 = ' + (5 + '2') + '.<br>');
document.write('<br><h3>Increment/Decrement</h3>');
var randNum = 1;
document.write('randNum = ' + randNum + '.<br>');
document.write('++randNum = ' + ++randNum + '.<br>');
document.write('randNum++ = ' + randNum++ + '.<br>');
document.write('randNum = ' + randNum + '.<br>');
document.write('--randNum = ' + --randNum + '.<br>');
document.write('randNum-- = ' + randNum-- + '.<br>');
document.write('randNum = ' + randNum + '.<br>');
////////////////////////////////////////////////////////////////////////////////
// Let, Var, Const
////////////////////////////////////////////////////////////////////////////////
document.write('<br><h3>Let vs. Var vs. Const</h3>');
document.write('TL;DR, `let` scopes a variable to a code block. var scopes it to the containing function. const scopes like var, but cannot be unassigned.<br><br> ');
var sampLet = 123;
if (true) {
    var sampLet_1 = 456;
}
document.write('sampLet: ' + sampLet + '.<br>');
var sampVar = 123;
if (true) {
    var sampVar = 456;
}
document.write('sampVar: ' + sampVar + '.<br>');
var sampConst = 123;
if (true) {
    var sampConst_1 = 456;
}
document.write('sampConst: ' + sampConst + '.<br>');
////////////////////////////////////////////////////////////////////////////////
// For Loops
////////////////////////////////////////////////////////////////////////////////
document.write('<br><h3>Loops</h3>');
var randArray = [5, 6, 7, 8];
// Writes the index
for (var val in randArray) {
    document.write(val + '<br>');
}
var strArray = randArray.map(Number);
// Writes the value
for (var _i = 0; _i < strArray.length; _i++) {
    var val2 = strArray[_i];
    document.write(val2 + '<br>');
}
////////////////////////////////////////////////////////////////////////////////
// Typing Args and Returns
////////////////////////////////////////////////////////////////////////////////
document.write('<br><h3>Typing Args and Returns</h3>');
var getSum = function (num1, num2) {
    return num1 + num2;
};
// assign the return of a function to an expected type
var theSum1 = getSum(5, 2);
document.write('5 + 2 = ' + theSum1 + '.<br>');
var getDiff = function (num3, num4, num5) {
    if (num4 === void 0) { num4 = 2; }
    if (typeof num4 !== 'undefined') {
        return num3 - num4 - num5;
    }
    return num3 - num4;
};
document.write('5 - 2 = ' + getDiff(5) + '.<br>');
document.write('5 - 2 - 7 = ' + getDiff(5, 2, 7) + '.<br>');
// Indefinite num of args
var sumAll = function () {
    var nums = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        nums[_i - 0] = arguments[_i];
    }
    // Arrow function within reduce
    var sum = nums.reduce(function (a, b) { return a + b; }, 0);
    document.write('Sum: ' + sum + '.<br>');
};
sumAll(1, 3, 4, 5, 6, 7);
var addOne = function (x) { return x + 1; };
document.write('1 + 1 = ' + addOne(1) + '.<br>');
