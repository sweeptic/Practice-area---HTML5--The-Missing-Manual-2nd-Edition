/*Data sets*/
let listOfNumbers = [2, 3, 5, 6, 7, 8, 9];

console.log(listOfNumbers[10]);
console.log(listOfNumbers.length);
console.log(listOfNumbers["length"]);
console.log(listOfNumbers[2 - 1]);


/*null.length;*/

let doh = "Doh";
console.log(typeof doh.toUpperCase);
console.log(doh.toUpperCase());


let sequence = [1, 2, 3];
sequence.push(4);
sequence.push(5);
console.log(sequence);
// → [1, 2, 3, 4, 5]
console.log(sequence.pop());
// → 5
console.log(sequence);
// → [1, 2, 3, 4]


let day1 = {
    squirrel: false,
    events: ["work", "touched tree", "pizza", "running"],
    color: ["black"],
    work: "went to work"
};

console.log(day1.squirrel);
console.log(day1.events.length);

console.log(day1.color);
console.log(day1.events);
console.log(day1.work);

let descriptions = {
    work: "Went to work",
    "touched tree": "Touched a tree"
};

day1.work = "end of work";

console.log(day1.work);

day1.endofday = "sleep";

console.log(day1.endofday);

console.log(Object.keys(day1));

let day2 = { a: 1, b: 2 };
Object.assign(day2, day1);

console.log(Object.keys(day2));


let days = [
    {
        squirrel: false,
        events: ["work", "touched tree", "pizza", "running"],
        color: ["black"],
        work: "went to work"
    },
    {
        squirrel: false,
        events: ["work", "touched tree", "pizza", "running"],
        color: ["black"],
        work: "went to work"
    },
    {
        squirrel: false,
        events: ["work", "touched tree", "pizza", "running"],
        color: ["black"],
        work: "went to work"
    }
];
console.log("-------");
console.log(Object.keys(days[0]));

let journal = [];
console.log(journal);

function addEntry(events, squirrel) {
    journal.push({ events, squirrel });
}

addEntry(["work", "touched tree", "pizza", "running", "television"], false);
addEntry(["work2", "touched tree2", "pizz2", "running2", "television2"], false);
addEntry(["work3", "touched tree3", "pizza3", "running3", "television3"], false);
addEntry(["work4", "touched tree4", "pizza4", "running4", "television4"], false);



let object1 = { value: 10 };
let object2 = object1;
let object3 = { value: 10 };

console.log(object1 == object2);
// → true
console.log(object1 == object3);
// → false
object1.value = 15;
console.log(object2.value);
// → 15
console.log(object3.value);
// → 10

const score = { visitors: 0, home: 0 };
// This is okay
// score.visitors = 1;
// This isn't allowed
//score = {visitors: 1, home: 1};

let kim = "Kim";
kim.age = 88;
console.log(kim.age);

console.log("coconuts".slice(4, 7));
// → nut
console.log("coconut".indexOf("u"));
// → 5

console.log("one two three".indexOf("ee"));

console.log(" okay \n ".trim());

console.log(String(6).padStart(8, "0"));

let sentence = "Secretarybirds specialize in stomping";
let words = sentence.split(" ");
console.log(words);
// → ["Secretarybirds", "specialize", "in", "stomping"]
console.log(words.join("."));
// → Secretarybirds. specialize. in. stomping

console.log("LA".repeat(3));
// → LALALA

let string = "abc";
console.log(string.length);
// → 3
console.log(string[1]);
// → b

function max(...numbers) {
    let result = -Infinity;
    for (let number of numbers) {
        if (number > result) result = number;
    }
    return result;
}
console.log(max(4, 1, 9, -2));
// → 9

let numbers = [5, 1, 7];
console.log(max(...numbers));
// → 7

let words2 = ["never", "fully"];
console.log(["will", ...words2, "understand"]);
// → ["will", "never", "fully", "understand"]


console.log(Math.random());
console.log(Math.floor(Math.random() * 10));


let {name3} = {name3: "Faraji", age: 23};
console.log(name3);
// → Faraji

let simplestring = {squirrel: false, events: ["weekend"]};
let stringjson = JSON.stringify({squirrel: false, events: ["weekend"]});

console.log(simplestring);
console.log(stringjson);

console.log(JSON.parse(stringjson).events);


