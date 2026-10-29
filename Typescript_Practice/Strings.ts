let a = "Sayali"
let b: string = "Om"

console.log(a, b)

console.log(a[0], b[0])
console.log(a.length, b.length)
console.log(a.charAt(0));
console.log(b.toUpperCase());
console.log(a.toLowerCase());
console.log(b.includes("Om"));

console.log(b.startsWith("Om"));  // true
console.log(b.endsWith("Om"));
console.log(b.indexOf("Om"));
console.log(a.slice(0, 2));

console.log(b.trim());

let sentence: string = "Java is good. Java is popular.";
console.log(sentence.replace("Java", "TypeScript"));

console.log(sentence.replaceAll("Java", "TypeScript"));

let tools: string = "Playwright,Selenium,Cypress";

// .split(delimiter) - splits string into an array
let toolList: string[] = tools.split(",");
console.log(toolList); // ["Playwright", "Selenium", "Cypress"]

// Getting a specific part (e.g., getting order ID from text):
let orderText = "Order ID: 98765";
let orderId = orderText.split(": ")[1];
let o2 = orderText.split(": ")[0];
console.log(o2, orderId); // "98765"

// .repeat(count)
console.log("Ha".repeat(3)); // "HaHaHa"

// .padStart() / .padEnd() - adds padding up to a target length
let num: string = "5";
console.log(num.padStart(4, "0")); // "0005"
console.log(num.padEnd(4, "0"));   // "5000"
console.log("    Sayali Om    ".trim())
let soul = a + b
console.log(soul)

console.log(`${a}'s best friend is ${b}`)