


/*
let start = Date.now();

setTimeout(() => {
    console.log("Timeout ran at", Date.now() - start);
}, 20);

while (Date.now() < start + 50) { }
console.log("Wasted time until", Date.now() - start);
*/

// → Wasted time until 50
// → Timeout ran at 55


Promise.resolve("Done").then(console.log);
console.log("Me first!");


