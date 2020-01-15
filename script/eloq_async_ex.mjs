






/*
let start = Date.now();

setTimeout(() => { console.log("Timeout ran at", Date.now() - start); }, 20);

while (Date.now() < start + 5000) { }

console.log("Wasted time until", Date.now() - start);

*/

// → Wasted time until 50
// → Timeout ran at 55

// → Wasted time until 50
// → Timeout ran at 55


/*
function some_3secs_function(value, callback) {
  console.log(3);
  callback();
}

function some_5secs_function(value, callback) {
  console.log(5);
  callback();
}

function some_8secs_function(value, callback) {
  console.log(8);
  callback();
}


some_3secs_function(1, function () {
  some_5secs_function(1, function () {
    some_8secs_function(1, function () {
      //All three functions have completed, in order.
    });
  });
});


async function f() {

  let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("done!"), 1000)
  });

  let result = await promise; // wait until the promise resolves (*)

  alert(result); // "done!"
}

f();

*/
//setInterval(() => console.log('tick'), 200);


let pr = Promise.resolve("pong").then(() => true);
//let pr2 =   pr.then(() => true);

console.log(pr);

pr.then((v) => console.log(v))
pr.then(() => console.log(pr))


/*
Promise.resolve('Success').then(function (value) {
  console.log(value); // "Success"
}, function (value) {
  // not called
});
*/



/*
let storage = Object.create(null)

storage["food caches"] = '["cache in the oak", "cache in the meadow", "cache under the hedge"]'
storage["cache in the oak"] = "A hollow above the third big branch from the bottom. Several pieces of bread and a pile of acorns."

console.log(typeof val);
*/
/*
let pr = new Promise((resolve_, reject) => resolve_("ok"));


pr.then(value => console.log("Handler 1"))
  .catch(reason => {
    console.log("Caught failure " + reason);
    console.log(pr);
    //return "nothing";
    throw new Error("hoppaaa");
  })
  .then(value => {
    console.log("Handler 2", value);console.log(pr);
    throw new Error("hoppsz");

  })
  .catch( reason => {
    console.log("handler 3 failure: " + reason);
    console.log(pr);
    return "nothing";
  })
  .then(()=>console.log(pr) ,value => {
    console.log("Handler 4", value);
    //console.log(pr);
  })

  ;


  console.log(pr);
// → Caught failure Error: Fail
// → Handler 2 nothing
*/

/*
 function readStorage(name, callback_) {
    let value = '"abc"'; // typeof value : string
    setTimeout(() => callback_(value && JSON.parse(value)), 20);//ez a kifejezes a nevtelen fuggveny bemeno parameter lesz
  }


 function storage(nest, name) {
    return new Promise(resolve_ => {   //the constructor expects a function as argument,
                    readStorage(name,       result => resolve_(result));//a promise bemenő paraméterét meghivjuk a readstorage visszateresi ertekevel
      //            readStorage(firstCache, info     => console.log(info));
    });
  }

  storage("bigOak", "enemies")
  .then(value => console.log("Got", value));
  */