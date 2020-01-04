
let rabbit = {};

rabbit.speak = function (line) {
    console.log(line);
}

//rabbit.speak("hello");

function speak(line) {
    console.log(line);
}

let whiteRabbit = { type: "rabbit", speak };
let hungryRabbit = { type: "hungry", speak };

//whiteRabbit.speak("hello again");

//speak.call(whiteRabbit, "ones more hello");

function normalize() {
    //  console.log(this.coords.map(n => n / this.length));
}

normalize.call({ coords: [1, 2, 3, 4], length: 5 });

//prototype

rabbit = {};

//console.log(rabbit.toString);   //function toString() { … }
//console.log(rabbit.toString()); //[object Object]

//rabbit.toString;

let rabbit2 = "rabbi";

//console.log(rabbit2.toString);   //function toString() { … }
//console.log(rabbit2.toString()); //[object Object]

//console.log(rabbit.prototype);


//var toString = Object.prototype.toString;

//console.log( toString.call(rabbit2) );  // [object String]

let protoRabbit = {
    speak: function () { console.log("hahaha"); }
};

let killerRabbit = Object.create(protoRabbit);
//killerRabbit.speak();

//console.log(protoRabbit.speak);  
//console.log(protoRabbit.speak);  
/*
function makeRabbit(type) {
    let rabbit = Object.create(protoRabbit);
    rabbit.type = type;
    return rabbit;
}*/

function Rabbit(type) {
    this.type = type;
}

Rabbit.prototype.speak = function (line) {
    console.log("hello");
}

let blackRabbit = new Rabbit("blacky");

//weirdRabbit.speak("abc");




Rabbit.prototype.toString = function () {
    return `a ${this.type} rabbit`;
};
//console.log(String(blackRabbit));


let sym = Symbol("name");
console.log(sym == Symbol("name"));
// → false
Rabbit.prototype[sym] = 55;
console.log(blackRabbit[sym]);
// → 55

console.log(blackRabbit.name);


let okIterator = "12345"[Symbol.iterator]();
console.log(okIterator.next());
// → {value: "O", done: false}
console.log(okIterator.next());
// → {value: "K", done: false}
console.log(okIterator.next());
// → {value: undefined, done: true}


