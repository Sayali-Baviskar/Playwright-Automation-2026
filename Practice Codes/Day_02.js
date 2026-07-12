let age = 26;
let Isstudent = true;
let pi = 3.14;
// let name = "Om";
let nullval = null;

// Types of literals
// Literals = Value of varialble
// Integer, decimal, hexadecimal, binary, octal, Float,
//  Scientific No  - 2.5e6
//  String = "",''
//  boolean
// null : absence of value
// undefined : not yet assigned
//  BigInt : 1234567809876543
//  Object -{ key : Valiue}
//  Array : [1,2,3,4,5]

let h= 0xFF;

// template literal
let name = "Om"
let fullname = `Hi, ${name} Sayali`
console.log(fullname)

let math = `sum = ${2+2}`
console.log(math)

//  Path  --> \\
//  URL   --> //

let path = "c:\\users"
console.log(path)

let url = "https://om.com"
console.log(url)

let undeclared
console.log(undeclared)

let tp=null
console.log(tp)

//  strict data types
console.log(null==undefined)
console.log(null===undefined)

console.log(null==0)
console.log(null=="")
console.log(undefined==0)
console.log(undefined=="")

//  == and ===
console.log("== and ===")

console.log(5==5)
console.log(5===5)
console.log(5==="5")
console.log(5=="5")

console.log(5==5.0)
console.log(5===5.0)

//  Interview Que

console.log(0=="")  // true
console.log("0"==false)  // true
console.log(0=="0")  // true
console.log(0==false)  // true
console.log(null==undefined)  // true
console.log("\t\n"==0)  // true

// Rule breaker (All below are false)

console.log(null==0)
console.log(null=="")
console.log(null==false)
console.log(undefined==0)
console.log(undefined==false)
console.log(NaN==NaN)





