


let arrayOfArr = [[1, 2, 3], [1, 2, 4], [5, 6, 7], [1]];
// ->   1,2,3,4,5,6,7


console.log(arrayOfArr);

let newArr =[];
/*
for (item of arrayOfArr) {
    newArr = newArr.concat(item);
}
*/


//arrayOfArr.reduce(item => newArr = newArr.concat(item));

//console.log(newArr);

//  console.log([1,2,3].concat([4,5,6]));

console.log(    arrayOfArr.reduce(  (flat, current) => flat.concat(current), [] )    );