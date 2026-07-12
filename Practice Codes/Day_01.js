console.log("Hello World");
// comment
/*
multiline comments
*/

// identifiers, literal, operators
var name ="Sayali";
name = "Om"
console.log(name)

// Identifier = name (name of person, place, table, thing)Literal = Sayali, Om, 10, 20 = Variable value, true, false, null

// Rules for Identifier
// start with letter, underscore or dollar
// cannot start with number
//  cant be reserve word
// cant contain spaces
// case sensitive
// can contain letters, numbers, dollor and underscore sign only. No other special char aare allowed

//  Let and Const keywords

// var,  let, Const 

// var - function scoped
//  Function : Reusable code that can be called multiple times
// Function defintions and Function calling
var name = "Sayali"  // Global declaration

function call_Om()
{
    var name = "Om" // local declaration
    console.log(name)
}

call_Om()

// Var allows redeclarations
//  var name = Sayali
//  var name = Om -> No errors, redeclaration aalowed, overrrides existsing memory


//  Let - Block scoped

let b= 10
// let b= 10 // redeclarations are not allowed -> error : identifier b is already declared


let a= 10
a= 20 // valid , no problem

var c= 10
// let c= 10 // redeclarations are not allowed -> error : identifier c is already declared

const pi = 3.14 // not allowed
//  const : block scoped - reassigned is not allowed

// Hoisting with var

console.log(m)  // m= undefined and memory is created for M
var m=10        // vallue is aasigned to M
console.log(m)

// Hoisting with Let
//  No undefined in case of LET
//  TDZ : tempoarary dead Zone

console.log(username) // TDZ
console.log("Sayali is awesome") // TDZ
console.log("Sayali is awesome") // TDZ
console.log("Sayali is awesome") // TDZ
let username = "Om"   // Error