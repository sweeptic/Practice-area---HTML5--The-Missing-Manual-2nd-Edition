function arrayToList(array) {
    let list = null;
    for (let i = array.length - 1; i >= 0; i--) {
        list = { value: array[i], rest: list };
    }
    return list;
}

function listToArray(list) {
    let res = [];
    for (let node = list; node; node = node.rest) {
        res.push(node.value);
    }
    return res;
}

function prepend(list, item) {
    return {value: item, rest: list};
}

function nth(list, n) {
    if(!list) {
        return undefined;}
    else if(n == 0) {
        return list.value;}
    else { 
        return nth(list.rest, n-1) 
    };

}

let array = [1, 2, 3];

let list = arrayToList(array);
//console.log("arrayToList: " + list.value + ", value2: " + list.rest.value + ", value3: " + list.rest.rest.value);

let newArray = listToArray(list);
//console.log(newArray);

var prepended =  prepend(list, {value:"0", rest:null});
//console.log(prepended.value);

let nthVal = nth(list, 2);
console.log(nthVal);

/*
let modifiedList = prepend(list, { value: 0, rest: null });
console.log(modifiedList);
*/