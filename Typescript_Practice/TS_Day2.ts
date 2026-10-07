console.log("TS Day 2")

// Variables in TypeScript

var a = 10
var b = 20


console.log(`Var a = ${a}`)


let varc = 100
console.log(`Let variable : ${varc}`)
// console.log(`Let variable : ${varc}`)

let str = "Sayali"
const OM = 200
console.log(OM)

// OM = 100 - Cannot assign to const variable
console.log(OM)

// Types of Variables
// Local Varisables
// Global Variables
// Instance Variables
// Static Variables

console.log(a + b)

// var is a function scope variable
// let is a block scope variable
// const is a block scope variable

// Typescripts Annotations
// data types in TypeScript
var x: number = 10
var y: string = "Hello"
var z: boolean = true
var arr: number[] = [1, 2, 3, 4, 5]
var obj: object = { name: "John", age: 30, city: "New York" }
// var any: any = 10
// var undefined: undefined = undefined
// var null: null = null

let dtstr: string = "Om"
console.log(`String variable : ${dtstr}`)



// Functions in TypeScript
function add(a: number, b: number): number {
    return a + b
}

console.log(add(10, 20))

// Arrow functions
const addArrow = (a: number, b: number): number => a + b
console.log(addArrow(10, 20))

// Primitive Types
let empId: number = 101;
let empName: string = "Sayali";
let isPermanent: boolean = true;

// Array & Tuple
let skills: string[] = ["TypeScript", "Playwright"];
let role: [number, string] = [1, "Admin"];

// Union Type (can be number OR string)
let status: number | string = "Active";
status = 200; // Also valid
