
/*
minimum
const minfunction = (arg1, arg2) => {return Math.min(arg1, arg2)};
console.log(minfunction(2,56));
*/


/*recurrsion*/
/*
function isEven(number) {
    function find(current) {
        if (current == 0) {
            return true;
        } else if (current == 1) {
            return false;
        } else {
            current = current - 2;
            console.log(current);
            return find(current);
        }
    }
    find(number);
}
console.log(isEven(50));
*/

/*bean counting*/

function findChar(stringParam, letter = "B"){
    len = String(stringParam).length;
    var i = 0 , number = 0;
    
    while(i < len){
        if(String(stringParam).charAt(i) == letter){
            number++;
        }
        i++;
    }
    return number;
}

console.log(findChar("AlBatroszBBBB"));




