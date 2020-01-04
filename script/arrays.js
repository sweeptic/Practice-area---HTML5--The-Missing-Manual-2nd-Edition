

arr = ["1", 2, 3, 4, "color"];

arr2 = [{ name: "value" }];
arr3 = { name: "value" };
/*
console.log(arr2);
console.log(arr3);
*/
/*
console.log(arr[1]);
console.log(arr["1"]);
console.log(arr[0]);

console.log(arr["length"]);
console.log(arr.length);
console.log( typeof(arr) );
*/
//property
let journalS1 = { name: "value" };
let journalS2 = { name: ["value", "value"] }
let journalS3 = { name: ["value", "value"], name: ["value", "value"] }

let journalS4 = [{ name: ["value", "value"], name: ["value", "value"] }, { name: ["value", "value"] }];

journalS1.name = "alma";
/*
console.log(journalS1);
console.log(journalS2);
console.log(journalS3);
console.log(journalS4);
*/

let journal5 = [
    {
        events: ["work", "touched tree", "pizza",
            "running", "television"],
        squirrel: false
    },
    {
        events: ["work", "ice cream", "cauliflower",
            "lasagna", "touched tree", "brushed teeth"],
        squirrel: false
    },
    {
        events: ["weekend", "cycling", "break", "peanuts",
            "beer"],
        squirrel: true
    }
];


let json1 = JSON.stringify(journal5);
let json2 = JSON.parse(json1);

//console.log(journal5[0]);
//console.log(json2[0]);


//const score = {visitors: 0, home: 0};
// This
//score.visitors = 7;
//console.log(score.visitors);

//score = {visitors: 1, home: 1};

const score = { visitors: 0, home: 0 };
const score2 = { visitors: 0, home: 0 };

//console.log(score == score2);

let journal = [];

let jor = ["a", "bb", "c"];

function addEntry(events, squirrel) {
    journal.push({ events, squirrel });
}

addEntry("alma", ["béla", "géza"]);
addEntry("alma2", ["béla2", "géza2"]);

//console.log(journal[0].squirrel);

for (let i = 0; i < journal.length; i++) {
    let entry = journal[i];
    if (entry.squirrel.includes("bélaa")) {
        console.log("yes");
    }
}

//console.log(jor);
//console.log(jor.indexOf("bb"));

function multiplier(factor) {
    return function (number) {
        return number * factor;
    }
    /*return number => number * factor;*/
}

let twice = multiplier(2);
console.log(twice(7));



