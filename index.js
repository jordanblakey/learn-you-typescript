console.log('Hello World');
// Transpiles using polyfills since async/await isn't supported in TS.
async function greet() {
    return 'Hello World!';
}
// Inferred Types And Casting
let lucky = 23; // Infers type to 'number'
// lucky = '23' // error "Type 'string' is not assignable to 'number'"
let luckyAny = 23; // Cast to any type, allowing any type
luckyAny = '23'; // no error
let luckyNumber;
// let luckyNumber: number = 23 // Type inferred, is considered redundant
// luckyNumber = '23' // error
luckyNumber = 23;
let font;
font = 'bold'; // allowed
font = 'italic'; // allowed
font = 23; // allowed
const person1 = {
    first: 'Jordan',
    // last: 23 // Error: type not assignable
    last: 'Blakey'
    // id: 1 // Error: object literal may only assign known properties
};
const person2 = {
    first: 'Jordan',
    last: 'Blakey',
    id: 1 // Allowed
};
//  Functions
// Normal function declarations are allowed
function pow(x, y) {
    return Math.pow(x, y);
}
// pow('2', '5'); // Allowed, but will fail at runtime
// This will create a compiler error (not linting error)
// function typedPowIncorrectReturnType(x: number, y: number): string {
// return Math.pow(x, y) // Type 'number' is not assignable to type 'string'
// Here, an incorrect return value is expected, creating the error
//}
function typedPowStringReturn(x, y) {
    return Math.pow(x, y).toString();
}
function typedPow(x, y) {
    return Math.pow(x, y);
}
function logTypedPow(x, y) {
    console.log(Math.pow(x, y));
}
console.log(typedPowStringReturn(2, 6));
console.log(typedPow(2, 5));
// Arrays
const arr = [];
arr.push(1);
// arr.push('23') // Error
// arr.push(false) // Error
const personArray = [];
personArray.push(person1);
personArray.push(person2);
personArray.push({ first: 'John', last: 'Doe' });
const myTuple1 = [23, 'Any string', true];
// const myTuple2: Tuple = ['Any string', 23, true] // Error
// Classes: <T> - Allow type to be defined at instantiation
class Observable {
    constructor(value) {
        this.value = value;
    }
}
let x; // Pass in expected type at instantiation
let y;
let z = new Observable(23); // Implicitly type the class argument
export {};
