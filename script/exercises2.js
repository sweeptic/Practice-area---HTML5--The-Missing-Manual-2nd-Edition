//different forms of function

let func1 = function () { return false; };
function func2() { return false; }
let func3 = () => 2 * 3;



let arr = [1, 2, 3, 4];
/*
console.log(arr);
console.log(arr[2 - 1]);
console.log(arr.length);
console.log(arr["length"]);
*/
let str = "doh"
/*
console.log(typeof str.toUpperCase);
console.log(typeof str.toUpperCase());
*/
console.log(Object.keys({x: 0, y: 0, z: 2}));

const day = [ { person: "bela", events: ["dolgozik", "köt", "babázik"]},
            { person: "eszter", events: "konyvet olvas"} ];

//console.log(Object.keys(day[0]));

day[0].person = "Kata";

for (item of day) {
    
    console.log(item.events.includes("köt"));
}

let kim = "kim";
kim.age="88";
console.log(kim.age);

let arr4 =["egy", "ketto"];

console.log(arr4.indexOf("tt"));

console.log(arr4[0][1]);