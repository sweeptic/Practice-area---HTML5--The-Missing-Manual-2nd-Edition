let rabbit = {};


//********************rabbit objektum propertijét megadtuk metódusként.
rabbit.speak = function(line){
    console.log("hello");
}

//rabbit.speak();

let whiterabbit = {type: "white", speak};
let hungryrabbit = {type: "hungry", speak};

//***********************kulon definialtunk egy functiont. amit egy objektummal hivtunk meg
function speak(line){
    console.log("hello " + this.type)
}

//whiterabbit.speak();

//speak.call(hungryrabbit, "this is the line")

//*******************a hivo parametereit nem kell atadni mert minden function nak megvan a sajat this bindingja
//*******************amivel eleri a hivo objektum propertijeit.

function normalize(){
    console.log(this.coords.map( n=> n / this.length));
}

//normalize.call({coords: [1,2,3,4,5], length: 5});

let empty ={};

//console.log(empty.toString);
//console.log(empty.toString());

//console.log(Object.getPrototypeOf({}) == Object.prototype);
//console.log(Object.getPrototypeOf(Object.prototype));

//prototipust tudunk keszitei uj objektumra



//classes

//make new object 1
let protorabbit = {
    speak(line) {
        console.log(this.type + line);
    }
}

function makeRabbit(type) {
    let rabbit = Object.create(protorabbit);
    rabbit.type = type;
    return rabbit;
}

let killerRabbit = Object.create(protorabbit);
killerRabbit.type = "killer";
//killerRabbit.speak("Skree");


//make new object 2
function Rabbit(type) {
    this.type = type;
}

Rabbit.prototype.speak = function(line) {
    console.log(this.type + line);
};

Rabbit.prototype.toString = function() {
    console.log("this is proto toString method: " + this.type);
};

let weirdRabbit = new Rabbit("weird");


//weirdRabbit.toString();
weirdRabbit.toString = () => console.log("weird string");
//weirdRabbit.toString();
//Rabbit.prototype.toString();


//weirdRabbit.toString();
//Rabbit.prototype.toString();


//class notation
//So JavaScript classes are constructor functions with a prototype property.

class RabbitClass {
    constructor(type) {
        this.type = type;
    }
    speak(line) {
        console.log(this.type + line);
    }
}

let blackRabbit = new RabbitClass("black");

blackRabbit.mouth = () => console.log("mrrr");

//blackRabbit.mouth();


let nullObj = Object.create(null);
//console.log("toString" in nullObj);



let mapObj = new Map();

mapObj.set("abc", 1);
mapObj.set("abc2", 1);

//console.log(mapObj.get("abc"));
//console.log("abc" in mapObj);

//console.log(mapObj.has("abc"));

//  set/get/has are part of the interface of the map object.

//console.log(mapObj.get("abc"));


let sym = Symbol("name");
let sym2 = Symbol("name");
//console.log(sym == Symbol("name"));

RabbitClass.prototype[sym] = 55;
RabbitClass.prototype[sym2] = 55;

//console.log(blackRabbit[sym]);
//console.log(blackRabbit[sym2]);

blackRabbit.g = 1;
blackRabbit.g = 12;


//console.log(blackRabbit.g);

let okIterator = "123456"[Symbol.iterator]();
//console.log(okIterator.next());

let varSize = {

    size : () => {return 77;},
    get msize ()  {return 88;}
};

console.log(varSize.size());
console.log(varSize.size);
console.log(varSize.msize);



