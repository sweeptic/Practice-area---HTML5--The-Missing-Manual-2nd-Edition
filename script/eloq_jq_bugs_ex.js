
class MultiplicatorUnitFailure extends Error { }


primitiveMultiply = function (num1, num2) {
    let val = Math.floor(num2 / num1);
    let passed = Math.floor(Math.random() * 100) > 90;

    if (passed) return val;
    else throw new MultiplicatorUnitFailure("klank");
};


reliablemultiply = function (num1, num2) {
    for (; ;) {
        try {
            return primitiveMultiply(num1, num2);

        } catch (error) {
            if (error instanceof MultiplicatorUnitFailure) console.log(error + " occured. try again");

            if (!(error instanceof MultiplicatorUnitFailure))
                throw error;

        }
    }


}
/*
    try {
        if (!passed) { throw new Error(MultiplicatorUnitFailure("klank")); }

    } catch (error) {
        if (!(error instanceof MultiplicatorUnitFailure)) throw error;
        //console.log(error);
        //return {success : false, data : NaN}

    }
    */


console.log(reliablemultiply(10, 20));



