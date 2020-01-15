


function Promise_all(promises) {
    return new Promise((resolve, reject) => {
        let results = [];
        let pending = promises.length;
        for (let i = 0; i < promises.length; i++) {
            promises[i].then(result => {
                results[i] = result;
                pending--;
                if (pending == 0) resolve(results);
            }).catch(reject);
        }
        if (promises.length == 0) resolve(results);
    });
}

// Test code.
Promise_all([]).then(array => {
    console.log("This should be []:", array);
});


Promise_all([soon(1), soon(2), soon(3)]).then(array => {
    console.log("This should be [1, 2, 3]:", array);
});


Promise_all([soon(1), Promise.reject("X"), soon(3)]).then(array => {
    console.log("We should not get here");
}).catch(error => {
    if (error != "X") {
        console.log("Unexpected failure:", error);
    }
});


function soon(val) {
    return new Promise(resolve =>   {  resolve(val) /*setTimeout(() => resolve(val), Math.random() * 500);*/      }   );

}


/*
let r = [
    new Promise((resolve, reject) => resolve("ok")),
    new Promise((resolve, reject) => resolve("ok")),
    new Promise((resolve, reject) => resolve("ok")),
    new Promise((resolve, reject) => resolve("ok")),
    new Promise((resolve, reject) => reject("bad"))
]



function* genResolveAll(promises) {
    for (let i = 0; i < promises.length; i++) {
        yield promises[i];
    }
}

let state1 = Promise.all(genResolveAll(r)).then(() => console.log("pr good"), () => console.log("pr bad"));

console.log(state1);
*/





//r.then(() => console.log(r),() => console.log(r));

