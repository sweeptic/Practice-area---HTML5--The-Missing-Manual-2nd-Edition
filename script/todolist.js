let todoList = [];

function remember(task) {
    todoList.push(task);
}

function getTask() {
    todoList.shift();
}

function rememberUrgently(task) {
    todoList.unshift;
}
/*
console.log([1,2,3,2,1].indexOf(2));
console.log([1,2,3,2,1].slice(1,4));

console.log("   okay  \n".trim());

console.log(String("LA"));
*/

let greeter = "hey hi";
var times = 4;

if (times > 3) {
    let greeter = "say Hello instead";
}

//console.log(greeter) //"say Hello instead"


let  {name}  = { name: "Faraji", age: 23 };
console.log(name);
// → Faraji