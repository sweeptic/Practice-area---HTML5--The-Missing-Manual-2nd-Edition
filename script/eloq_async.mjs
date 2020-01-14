



const connections = [
  "Church Tower-Sportsgrounds", "Church Tower-Big Maple", "Big Maple-Sportsgrounds",
  "Big Maple-Woods", "Big Maple-Fabienne's Garden", "Fabienne's Garden-Woods",
  "Fabienne's Garden-Cow Pasture", "Cow Pasture-Big Oak", "Big Oak-Butcher Shop",
  "Butcher Shop-Tall Poplar", "Tall Poplar-Sportsgrounds", "Tall Poplar-Chateau",
  "Chateau-Great Pine", "Great Pine-Jacques' Farm", "Jacques' Farm-Hawthorn",
  "Great Pine-Hawthorn", "Hawthorn-Gilles' Garden", "Great Pine-Gilles' Garden",
  "Gilles' Garden-Big Oak", "Gilles' Garden-Butcher Shop", "Chateau-Butcher Shop"
]

function storageFor(name) {
  let storage = Object.create(null)
  storage["food caches"] = ["cache in the oak", "cache in the meadow", "cache under the hedge"]
  storage["cache in the oak"] = "A hollow above the third big branch from the bottom. Several pieces of bread and a pile of acorns."
  storage["cache in the meadow"] = "Buried below the patch of nettles (south side). A dead snake."
  storage["cache under the hedge"] = "Middle of the hedge at Gilles' garden. Marked with a forked twig. Two bottles of beer."
  storage["enemies"] = ["Farmer Jacques' dog", "The butcher", "That one-legged jackdaw", "The boy with the airgun"]

  if (name == "Church Tower" || name == "Hawthorn" || name == "Chateau")
    storage["events on 2017-12-21"] = "Deep snow. Butcher's garbage can fell over. We chased off the ravens from Saint-Vulbas."
  let hash = 0
  for (let i = 0; i < name.length; i++) hash += name.charCodeAt(i)
  for (let y = 1985; y <= 2018; y++) {
    storage[`chicks in ${y}`] = hash % 6
    hash = Math.abs((hash << 2) ^ (hash + y))
  }
  if (name == "Big Oak") storage.scalpel = "Gilles' Garden"
  else if (name == "Gilles' Garden") storage.scalpel = "Woods"
  else if (name == "Woods") storage.scalpel = "Chateau"
  else if (name == "Chateau" || name == "Butcher Shop") storage.scalpel = "Butcher Shop"
  else storage.scalpel = "Big Oak"
  for (let prop of Object.keys(storage)) storage[prop] = JSON.stringify(storage[prop])
  return storage
}

class Network {
  constructor(connections, storageFor) {
    let reachable = Object.create(null)
    for (let [from, to] of connections.map(conn => conn.split("-"))) {
      ; (reachable[from] || (reachable[from] = [])).push(to)
        ; (reachable[to] || (reachable[to] = [])).push(from)
    }
    this.nodes = Object.create(null)
    for (let name of Object.keys(reachable))
      this.nodes[name] = new Node(name, reachable[name], this, storageFor(name))
    this.types = Object.create(null)
  }

  defineRequestType(name, handler) {
    this.types[name] = handler
  }

  everywhere(f) {
    for (let node of Object.values(this.nodes)) f(node)
  }
}

const $storage = Symbol("storage"), $network = Symbol("network")

function ser(value) {
  return value == null ? null : JSON.parse(JSON.stringify(value))
}

class Node {
  constructor(name, neighbors, network, storage) {
    this.name = name
    this.neighbors = neighbors
    this[$network] = network
    this.state = Object.create(null)
    this[$storage] = storage
  }

  send(to, type, message, callback) {
    let toNode = this[$network].nodes[to]
    if (!toNode || !this.neighbors.includes(to)) {

      return callback(new Error(`${to} is not reachable from ${this.name}`))
    }
    let handler = this[$network].types[type]
    //  (nest, content, source, done) => {
    //      console.log(`${nest.name} received note: ${content}`);
    //      done();
    //   }
    if (!handler)
      return callback(new Error("Unknown request type " + type))
    if (Math.random() > 0.03) setTimeout(() => {
      try {
        //a handler megkapja a 4 parametert
        //a handler torzse lefut: console.log(`${nes....
        //a handler elinditja a done-t ami egy fuggveny parameter (error, response) => {...
        //ez a függvény meghivja a callbacket: () => console.log("Note delivered."));
        handler(toNode, ser(message), this.name, (error, response) => {
          setTimeout(() => callback(error, ser(response)), 10)
        })
      } catch (e) {
        callback(e)
      }
    }, 10 + Math.floor(Math.random() * 10))
  }

  readStorage(name, callback_) {
    let value = this[$storage][name]; // typeof value : string
    setTimeout(() => callback_(value && JSON.parse(value)), 20)
  }

  writeStorage(name, value, callback) {
    setTimeout(() => {
      this[$storage][name] = JSON.stringify(value)
      callback()
    }, 20)
  }
}

let network = new Network(connections, storageFor)
export const bigOak = network.nodes["Big Oak"]
export const everywhere = network.everywhere.bind(network)
export const defineRequestType = network.defineRequestType.bind(network)

if (typeof __sandbox != "undefined") {
  __sandbox.handleDeps = false
  __sandbox.notify.onLoad = () => {
    // Kludge to make sure some functions are delayed until the
    // nodes have been running for 500ms, to give them a chance to
    // propagate network information.
    let waitFor = Date.now() + 500
    function wrapWaiting(f) {
      return function (...args) {
        let wait = waitFor - Date.now()
        if (wait <= 0) return f(...args)
        return new Promise(ok => setTimeout(ok, wait)).then(() => f(...args))
      }
    }
    for (let n of ["routeRequest", "findInStorage", "chicks"])
      window[n] = wrapWaiting(window[n])
  }
}

if (typeof window != "undefined") {
  window.require = name => {
    if (name != "./crow-tech") throw new Error("Crow nests can only require \"./crow-tech\"")
    return exports
  }
} else if (typeof module != "undefined" && module.exports) {
  module.exports = exports
}


/*Callbacks*********** */
bigOak.readStorage(
  "food caches",
  caches => {
    let firstCache = caches[0];
    //  bigOak.readStorage(firstCache, info => console.log(info));
  }
);

// NOTE handler                                   DONE: callback function that it must call when it is done with the request.
defineRequestType("note", (nest, content, source, done) => {
  // console.log(`${nest.name} received note: ${content}`);
  done(); //callback
}
);
//                                                            expects a function to call when a response comes in 
//                                                            as its fourth and last argument.
//bigOak.send("Cow Pasture", "note", "Let's caw loudly at 7PM", () => console.log("Note delivered."));




/*
 readStorage(name, callback_) {
    let value = this[$storage][name]; // typeof value : string
    setTimeout(() => callback_(value && JSON.parse(value)), 20)
  }
  */
function storage(nest, name) {
  return new Promise(resolve_ => {   //the constructor expects a function as argument,    
    nest.readStorage(name, result => resolve_(result));//a (value && JSON.parse(value)) kifejezest adom at egyolyan nevtelen fuggvenynek
    //amibe. ez result bemeno parameteru fuggvenykent fog lefutni.
  });
}

storage(bigOak, "enemies")
//resolve handler
//.then(value => console.log("Got", value));

/*Failure*********** */


function request(nest, target, type, content) {
  return new Promise((resolve, reject) => {
    let done = false;
    function attempt(n) {
      nest.send(target, type, content, (failed, value) => {
        done = true;
        if (failed) reject(failed);

        else { resolve(value);/*console.log("value:" + value);*/ }
      });
      setTimeout(() => {
        if (done) return;
        else if (n < 3) attempt(n + 1);
        else reject(new Timeout("Timed out"));
      }, 250);
    }
    attempt(1);
  });
}


function requestType(name, handler) {
  defineRequestType(name, (nest, content, source,
    callback) => {
    try {
      Promise.resolve(handler(nest, content, source))
        .then(response => callback(null, response),
          failure => callback(failure));
    } catch (exception) {
      callback(exception);
    }
  });
}


requestType("ping", () => "pong");

function availableNeighbors(nest) {

  let requests = nest.neighbors.map(neighbor => {
    return request(nest, neighbor, "ping")
      .then(() => true, () => false);
  });

  //    requests.map((x) => x.then((r)=> console.log(r)));

  //let r = (Promise.all(requests));

  //r.then((r) => console.log(r));

  //console.log( nest.neighbors.filter((_) => true));

                                    // true / false
  var re =  Promise.all(requests).then(result => {
    //console.log(nest.neighbors.filter((_, i) => result[i]));
    return nest.neighbors.filter((_, i) => result[i]);
  });

  //console.log(re);

  return re ;
}

let tt = availableNeighbors(bigOak);

tt.then((r) => console.log(r));


