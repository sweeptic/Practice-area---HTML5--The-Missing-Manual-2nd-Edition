
/*
let storage = Object.create(null)

storage["food caches"] = '["cache in the oak", "cache in the meadow", "cache under the hedge"]'
storage["cache in the oak"] = "A hollow above the third big branch from the bottom. Several pieces of bread and a pile of acorns."

console.log(typeof val);
*/

/*
let promise = new Promise(function (resolve, reject) {
    //setTimeout(() => resolve("done"), 500);
    setTimeout(() => reject(new Error("Whoops!")), 500);
});

console.log(promise);
//setTimeout(() => console.log(promise), 1000);
//promise.then((val) => console.log(val),(val) => console.log(val) );
promise.catch(err => console.log(err));
//promise.then(() => console.log(promise));*/




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