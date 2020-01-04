
let rabbit = {};

rabbit.speak = function () {
    console.log("hello");
}


//rabbit.speak();

function speak1(arg) {
    console.log(arg);
}

//whiterabbit = {type: "hungry", speak1};

//whiterabbit.speak1("hello again");

//speak1.call(whiterabbit, "boaaa");
/*
function normalize() {
    console.log(this.coords.map(n => n / this.length));
}

//normalize.call({coords: [0,2,3], length: 5});
/*
let empty = {};
console.log(empty);
console.log(empty.toString);
console.log(empty.toString());

console.log(Object.getPrototypeOf(empty));
*/


let ages = {
    Boris: 39,
    Liang: 22,
    Júlia: 62
};
//console.log(`Júlia is ${ages["Júlia"]}`);
// → Júlia is 62
//console.log("Is Jack's age known?", "Jack" in ages);
// → Is Jack's age known? false


const toStringSymbol = Symbol();
Array.prototype[toStringSymbol] = function () {
    return `${this.length} cm of blue yarn`;
};
console.log([1, 2].toString());
// → 1,2
console.log([1, 2][toStringSymbol]());