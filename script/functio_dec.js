// function declaration
function isEven(num) {
    return num % 2 === 0;
}


function sum(a, b) {
    return a + b;
}


const isTruthy = function (value) {
    return !!value;
};


const absValue = (number) => {
    if (number < 0) {
        return -number;
    }
    return number;
}