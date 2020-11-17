import * as _ from 'lodash';

console.log('Hello World')

// Transpiles using polyfills since async/await isn't supported in TS.
async function greet() {
  return 'Hello World!'
}

// Inferred Types And Casting
let lucky = 23; // Infers type to 'number'
// lucky = '23' // error "Type 'string' is not assignable to 'number'"

let luckyAny: any = 23 // Cast to any type, allowing any type
luckyAny = '23' // no error

let luckyNumber: number
// let luckyNumber: number = 23 // Type inferred, is considered redundant
// luckyNumber = '23' // error
luckyNumber = 23

// Custom Types
// type Style = string; // Create a custom type
type Style = 'bold' | 'italic' | 23
let font: Style;

font = 'bold' // allowed
font = 'italic' // allowed
font = 23 // allowed
// font = 'something' // error: "Type 'something' is not assignable to type"

// Define Interface
interface Person {
  first: string;
  last: string;
}

interface PersonFlexible {
  first: string;
  last: string;
  [key: string]: any; // Allows any additional properties to be added
}

const person1: Person = {
  first: 'Jordan',
  // last: 23 // Error: type not assignable
  last: 'Blakey'
  // id: 1 // Error: object literal may only assign known properties
}

const person2: PersonFlexible = {
  first: 'Jordan',
  last: 'Blakey',
  id: 1 // Allowed
}

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

function typedPowStringReturn(x: number, y: number): string {
  return Math.pow(x, y).toString()
}

function typedPow(x: number, y: number): number {
  return Math.pow(x, y)
}

function logTypedPow(x: number, y: number): void {
  console.log(Math.pow(x, y))
}

console.log(typedPowStringReturn(2, 6))
console.log(typedPow(2, 5))

// Arrays
const arr: number[] = []
arr.push(1)
// arr.push('23') // Error
// arr.push(false) // Error

const personArray: Person[] = []
personArray.push(person1)
personArray.push(person2)
personArray.push({ first: 'John', last: 'Doe' })
// personArray.push({ species: 'Dog', name: 'Spot' }) // Error, doesn't match interface for Person

type Tuple = [number, string, boolean]
const myTuple1: Tuple = [23, 'Any string', true]
// const myTuple2: Tuple = ['Any string', 23, true] // Error

// Classes: <T> - Allow type to be defined at instantiation
class Observable<T> {
  constructor(public value: T) { }
}

let x: Observable<number> // Pass in expected type at instantiation
let y: Observable<Person>
let z = new Observable(23) // Implicitly type the class argument