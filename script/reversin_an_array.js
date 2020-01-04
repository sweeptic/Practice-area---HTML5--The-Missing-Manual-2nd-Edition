function reverseArray(array) {
    let newArray = [];
    for(item of array){
        newArray.unshift(item);
    }
    return newArray;
}

function reverseArrayInPlace(array) {

    console.log(Math.floor(array.length/2));

    for(let i=0; Math.floor(array.length/2 > i); i++){
        let swap = array[i];     
        array[i] = array[array.length-i-1];
        array[array.length-i-1] = swap;
    }    
    console.log(array);
}

console.log(reverseArray([1,2,3,4,5]));
reverseArrayInPlace([1,2,3,4,5]);