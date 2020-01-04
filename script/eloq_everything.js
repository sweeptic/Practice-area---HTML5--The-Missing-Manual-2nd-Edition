


function myEvery_loop(array, test) {
    for (let element of array) {
        if (!test(element)) return false;
    }
    return true;
}


function myEvery_some(array, test) {

    return !array.some(element => !test(element));

}


console.log(myEvery_loop([1, 2, 3, 90], n => n < 10));

console.log(myEvery_some([1, 2, 3, 90], n => n < 10));