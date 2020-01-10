
//const bigOak = require("./eloq_async");
import {bigOak} from "";

bigOak.readStorage("food caches", caches => {
    let firstCache = caches[0];
    bigOak.readStorage(firstCache, info => {
        console.log(info);
    });
});

bigOak.send("Cow pasture", "note", "Let's caw loudly at 7pm", 
() => console.log("Note delivered."));