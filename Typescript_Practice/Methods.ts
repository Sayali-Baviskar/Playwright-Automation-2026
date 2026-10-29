// abc()
function add(a: number, b: number): number {
    return a + b;
}

console.log(add(10, 20))


let global1 = "GLOBAL"

function abc() {
    let local = "LOCAL"
    console.log(local)
    console.log(global1)
}
abc()
// console.log(global)

