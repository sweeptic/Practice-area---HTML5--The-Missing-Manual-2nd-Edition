
import { bigOak } from "./crow-tech.mjs";
import { defineRequestType } from "./crow-tech";

bigOak.readStorage(
  "food caches",
  caches => {
    let firstCache = caches[0];
    bigOak.readStorage(firstCache, info => {
      console.log(info);
    });
  });


bigOak.send("Cow Pasture", "note", "Let's caw loudly at 7PM",
  () => console.log("Note delivered."));



defineRequestType("note", (nest, content, source, done) => {
  console.log(`${nest.name} received note: ${content}`);
  done();
});


function storage(nest, name) {
  return new Promise(resolve => {
    nest.readStorage(name, result => resolve(result));
  });
}

storage(bigOak, "enemies")
  .then(value => console.log("Got", value)/*,onrejected*/);
// .catch();

/*------------*/

class Timeout extends Error { }

function request(nest, target, type, content) {
  return new Promise((resolve, reject) => {
    let done = false;
    function attempt(n) {
      nest.send(target, type, content, (failed, value) => {
        done = true;
        if (failed) reject(failed);
        else resolve(value);
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

/*---------------*/

import { everywhere } from "./crow-tech";

everywhere(nest => {
  nest.state.gossip = [];
});

function sendGossip(nest, message, exceptFor = null) {
  nest.state.gossip.push(message);
  for (let neighbor of nest.neighbors) {
    if (neighbor == exceptFor) continue;
    request(nest, neighbor, "gossip", message);
  }
}

requestType("gossip", (nest, message, source) => {
  if (nest.state.gossip.includes(message)) return;
  console.log(`${nest.name} received gossip '${
    message}' from ${source}`);
  sendGossip(nest, message, source);
});