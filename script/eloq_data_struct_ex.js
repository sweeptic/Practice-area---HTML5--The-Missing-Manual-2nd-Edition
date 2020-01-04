
function range(start, end, step = start <= end ? 1 : -1) {

    var arr = [];
    for (let i = start; step >= 0 ? i <= end : i >= end; i += step) { /*i <= end vagy i>= end*/; /*step++ vagy step--*/
        arr.push(i);
    }
    return arr;
}


function sum(numbers) {
    result = 0;
    for (let num of numbers) {
        result += num;
    }
    return result;
}

//console.log(sum(range(1, 10)));


function reverseArray(array) {
    result = [];
    for (let item of array) {
        result.unshift(item);
    }
    return result;
}

function reverseArrayInPlace(array) {
    let len = array.length;
    for (let i = 0; i < Math.floor(len / 2); i++) {
        //console.log(i, len-i-1, array[i], array[len-i-1], array);
        let swap = array[i];
        array[i] = array[len - i - 1];
        array[len - i - 1] = swap;
    }
    return array;
}


//console.log(reverseArray(["András", "Béla", "Cili"]));
//console.log(reverseArrayInPlace(["András", "Béla", "Cili"]));

/*
let list = {
    value: 1,
    rest: {
        value: 2,
        rest: {
            value: 3,
            rest: null
        }
    }
};
*/




//      #A list


function myListToArray(itemList) {
    let actual = itemList;
    let arr = [];
    while (actual != null) {
        //console.log(actual.value);
        arr.push(actual.value);
        actual = actual.rest;
    }
    //console.log(arr);
    return arr;
}


function arrayToList(arr) {
    let len = arr.length;
    let start = 1;
    let ItemTemp, ItemList;
    ItemTemp = {
        value: arr[len - 1],
        rest: null
    }
    for (let i = len; i > start; i--) {
        ItemList = {
            value: arr[i - 2],
            rest: ItemTemp
        }
        ItemTemp = ItemList;
    }
    return ItemList;
}

function prepend(list, plusItem) {
    plusItem.rest = list;
    return plusItem;
}


function nth(list, num) {
    let actual = list;
    let retItem;
    let index = 0;
    function rec(actual) {
        if (actual.rest == null || index == num) {
            if (index == num) {
                retItem = actual;
            }
            return true;
        } else {
            actual = actual.rest;
            index++;
            rec(actual);
        }
    }
    rec(actual);
    return retItem;

}




var list = arrayToList([5, 7, 9, 11, 45]);
/*
console.log(list.value);
console.log(list.rest.value);
console.log(list.rest.rest.value);
console.log(list.rest.rest.rest.value);
console.log(list.rest.rest.rest.rest.value);

console.log(myListToArray(list));
*/
let plusItem = {
    value: 99,
    rest: null
};

var prep = prepend(list, plusItem);

//console.log(myListToArray(prep));

//console.log(nth(prep, 2));


//# Deep comparison


function deepEqual(a, b) {
    if (a === b) {
        // items are identical
        return true;
    } else if (typeof a === 'object' && a !== null && typeof b === 'object' && b !== null) {
        // items are objects - do a deep property value compare
        // join keys from both objects together in one array
        let keys = Object.keys(a).concat(Object.keys(b));
        // filter out duplicate keys
        keys = keys.filter(
            function (value, index, self) {
                return self.indexOf(value) === index;
            }
        );
        for (p of keys) {
            if (typeof a[p] === 'object' && typeof b[p] === 'object') {
                if (deepEqual(a[p], b[p]) === false) {
                    return false;
                }
            } else if (a[p] !== b[p]) {
                return false;
            }
        }
        return true;
    } else {
        return false;
    }
}




let object1 = { prop1: "egy", prop2: "harom" };
let object2 = { prop1: "egy", prop2: "ketto" };
let object3 = object1;
object3.prop2 = "negy"
let object4 = { prop3: "egy", prop2: "ketto" };


deepEqual(object3, object1);
//deepEqual(object1, object2 );
//deepEqual(object1, object4 );

