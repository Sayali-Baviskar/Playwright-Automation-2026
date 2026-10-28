console.log("Hello")
for (let i = 0; i < 10; i++) {
    console.log(i)
}
// reverse loop
for (let j = 5; j > 0; j--) {
    console.log(j)
}

let names: string[] = ["Sayali", "Om", "Akash"]
for (let j = 0; j < names.length; j++) {
    console.log(names[j])
}

let omi: number[] = [1, 2, 3, 4, 5]

for (let i = 0; i < omi.length; i++) {
    console.log(omi[i])
}

console.log("While loop")
let i = 0
while (i < 10) {
    console.log(i)
    i++
}

console.log("do while loop")

let sh = 3;

do {
    switch (sh) {
        case 1: console.log("one");
            break;
        case 2: console.log("two");
            break;
        default: console.log("invalid");
            break;
    }
    sh++
} while (sh <= 2)

console.log("break")

for (i = 1; i < 4; i++) {
    console.log(i);
    break;
}

console.log("continue")

for (i = 1; i < 4; i++) {

    if (i == 2) {
        continue;
    }
    console.log(i);

}

