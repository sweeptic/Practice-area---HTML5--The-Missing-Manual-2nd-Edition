
function range(start, end, step = start < end ? 1 : -1) {
    let arr = [];

    if (step > 0) {
        for (let i = start;  i < end; i += step) {
            arr.push(i);
        }
    } else {
        for (let i = start; i > end; i += step) {
            arr.push(i);
        }
    }
    return arr;
}

function sum(array) {
    let total = 0;
    for(item of array){
        total += item;
    }
    return total;
}

console.log(sum(range(1,10)));
console.log(sum(range(1,10,2)));
console.log(sum(range(5,2, -1)));
