const roads = [
    "Alice's House-Bob's House", "Alice's House-Cabin",
    "Alice's House-Post Office", "Bob's House-Town Hall",
    "Daria's House-Ernie's House", "Daria's House-Town Hall",
    "Ernie's House-Grete's House", "Grete's House-Farm",
    "Grete's House-Shop", "Marketplace-Farm",
    "Marketplace-Post Office", "Marketplace-Shop",
    "Marketplace-Town Hall", "Shop-Town Hall"
];

function buildGraph(edges) {
    let graph = Object.create(null);
    function addEdge(from, to) {
        if (graph[from] == null) {
            graph[from] = [to];
        } else {
            graph[from].push(to);
            //console.log(graph[from]);
        }
    }

    for (let [from, to] of edges.map(r => r.split("-"))) {
        addEdge(from, to);
        addEdge(to, from);
    }
    return graph;
}

const roadGraph = buildGraph(roads);


for (let i = 0; i < Object.keys(roadGraph).length; i++) {
    let key = Object.keys(roadGraph)[i];
    console.log("Key: " + key + ".----->  Values: " + roadGraph[key]);
}



var VillageState = class VillageState {
    constructor(place, parcels) {
        this.place = place;
        this.parcels = parcels; //csomag
    }

    move(destination) {
        console.log("dest: " + destination);
        if (!roadGraph[this.place].includes(destination)) {
            return this;
        } else {
            let parcels = this.parcels.map(p => {   
                if (p.place != this.place) return p; //p p p p 
                return { place: destination, address: p.address }; //(p -> itt kell letenni. ezert place -> kovetkezo cim)
            }
            // -> 
            ).filter(p => p.place != p.address);        //kiszurjuk amit kezbesitettunk
            //console.log(parcels);
            return new VillageState(destination, parcels);
        }
    }
}

VillageState.random = function (parcelCount = 5) {
    let parcels = [];
    for (let i = 0; i < parcelCount; i++) {
        let address = randomPick(Object.keys(roadGraph));
        let place;
        do {
            place = randomPick(Object.keys(roadGraph));
        } while (place == address);

        console.log("parcels place : " + place + ". parcels address: " + address);
        parcels.push({ place, address });
    }

    return new VillageState("Post Office", parcels);
};







/*routeRobot*/
var mailRoute = [
    "Alice's House", "Cabin", "Alice's House", "Bob's House",
    "Town Hall", "Daria's House", "Ernie's House",
    "Grete's House", "Shop", "Grete's House", "Farm",
    "Marketplace", "Post Office"
];

function routeRobot(state, memory) {
    if (memory.length == 0) {
        memory = mailRoute;
    }
    return { direction: memory[0], memory: memory.slice(1) };
}



/*goalOrientedRobot*/
function findRoute(graph, from, to) {
    let work = [{ at: from, route: [] }];
    for (let i = 0; i < work.length; i++) {
        let { at, route } = work[i];
        for (let place of graph[at]) {
            if (place == to) return route.concat(place);
            if (!work.some(w => w.at == place)) {
                work.push({ at: place, route: route.concat(place) });
            }
        }
    }
} 

function goalOrientedRobot({ place, parcels }, route) {
    if (route.length == 0) {
        let parcel = parcels[0];
        if (parcel.place != place) {
            route = findRoute(roadGraph, place, parcel.place);
        } else {
            route = findRoute(roadGraph, place, parcel.address);
        }
    }
    return { direction: route[0], memory: route.slice(1) };
}



function randomPick(array) {
    let choice = Math.floor(Math.random() * array.length);
    return array[choice];
}

function randomRobot(state) {
    //console.log(Object.getPrototypeOf(state));
    return { direction: randomPick(roadGraph[state.place]) };
}



function runRobot(state, robot, memory) {
    for (let turn = 0; ; turn++) {
        if (state.parcels.length == 0) {
            console.log(`Done in ${turn} turns`);
            break;
        }
        let action = robot(state, memory);
        state = state.move(action.direction);
        memory = action.memory;
        console.log(`Moved to ${action.direction}`);
    }
}


let state = VillageState.random();
//runRobot(state, randomRobot, []);
//runRobot(state, routeRobot, []);
runRobot(state, goalOrientedRobot, []);