/*

//promised value -> 15
let fifteen = Promise.resolve(15);

// then: ez a callback function
fifteen.then(value => console.log('got  ${value}'));


new Promise((_, reject) => reject(new Error("Fail")))
    .then(value => console.log("Handler 1"))
    .catch(reason => {
        console.log("Caught failure " + reason);
        return "nothing";
    })
    .then(value => console.log("Handler 2", value));
// → Caught failure Error: Fail
// → Handler 2 nothing



Group.prototype[Symbol.iterator] = function* () {
    for (let i = 0; i < this.members.length; i++) {
        yield this.members[i];
    }
};
*/

/*
let start = Date.now();

setTimeout(() => {
    console.log("Timeout ran at", Date.now() - start);
}, 1);

while (Date.now() < start + 50) { }

console.log("Wasted time until", Date.now() - start);
// → Wasted time until 50
// → Timeout ran at 55
*/

Promise.resolve("Done").then(console.log);
console.log("Me first!");
console.log("Me second!");
console.log("Me second!");
console.log("Me second!");
console.log("Me second!");
console.log("Me second!");
console.log("Me second!");
console.log("Me second!");
Promise.resolve("Done2").then(console.log);
console.log("Me third!");
console.log("Me third!");
console.log("Me third!");