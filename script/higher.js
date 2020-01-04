var SCRIPTS = [
    {
        name: "Adlam",
        ranges: [[125184, 125259], [125264, 125274], [125278, 125280]],
        direction: "rtl",
        year: 1987,
        living: true,
        link: "https://en.wikipedia.org/wiki/Fula_alphabets#Adlam_alphabet"
    },
    {
        name: "Caucasian Albanian",
        ranges: [[66864, 66916], [66927, 66928]],
        direction: "ltr",
        year: 420,
        living: false,
        link: "https://en.wikipedia.org/wiki/Caucasian_Albanian_alphabet"
    },
    {
        name: "Ahom",
        ranges: [[71424, 71450], [71453, 71468], [71472, 71488], [120, 122]],
        direction: "ltr",
        year: 1250,
        living: true,
        link: "https://en.wikipedia.org/wiki/Ahom_alphabet"
    }];




function repeat(n, action) {
    for (let i = 0; i < n; i++) {
        action(i);
    }
}

repeat(3, console.log);

console.log("----");



function greaterThan(n) {
    return m => m > n;
}

let greaterThan10 = greaterThan(10);
console.log(greaterThan10(11));

console.log("----");



function noisy(f) {
    return (...args) => {
        console.log("calling with: " + args);
        let result = f(...args);
        console.log("called with", args, ", returned", result);
        return result;
    };
}

noisy(Math.min)(3, 2, 1);

console.log("----");

function unless(test, then) {
    if (!test) then();
}

unless(false, () => { console.log(3, "es even"); });

console.log("----");

["A", "B"].forEach(i => console.log(i));

console.log("----");



function myFilter(array, test) {
    let passed = [];
    for (let element of array) {
        if (test(element)) {
            //console.log(element);
            passed.push(element);
        }
    }
    //console.log(passed[0]);
    //console.log(passed[1]);
    return passed;

}

console.log(myFilter(SCRIPTS, script => script.living));

console.log(SCRIPTS.filter(s => s.direction == "ltr"));


// Generated from the Unicode 10 database and https://en.wikipedia.org/wiki/Script_(Unicode)

console.log("----");

function myMap(array, transform) {
    let mapped = [];
    for (let element of array) {
        mapped.push(transform(element));
    }
    return mapped;
}

let rtlscripts = SCRIPTS.filter(s => s.direction == "ltr");
console.log(myMap(rtlscripts, s => s.name));

console.log(rtlscripts.map(s => s.name));

console.log("----");

function myReduce(array, combine, start) { //combine = functon:  (a, b) => a + b
    let current = start;
    for (let element of array) {
        current = combine(current, element); //a = a + b    az 'a' a current, a 'b' az element.
    }
    return current;
}

console.log(myReduce([1, 2, 3, 4], (a, b) => a + b, 0));

console.log([1, 2, 3, 4].reduce((a, b) => a + b));

console.log("----");

function characterCount(script) {

    let whatreturn = script.ranges.reduce(
        (count, [from, to]) => {
            return count + (to - from);
        }, 0);
    console.log(whatreturn);

    return whatreturn;
}

let whatresult = SCRIPTS.reduce( //script tömbön végig iterál
    (a, b) => {             //a tömb elemeire ezt a függvényt alkalmazza ami kap ket parametert.
        return characterCount(a) < characterCount(b) ? b : a;   //es a függvény ezzel a ket parameterrel ezt csinalja...
    });

console.log(whatresult);

console.log("----");

/*
console.log("living: " + SCRIPTS.filter(s => s.living));
console.log("living map year: " + SCRIPTS.filter(s => s.living).map(s => s.year));
*/

/*
You can see it as a pipeline:
we start with all scripts, filter out the living (or dead) ones, take the years from
those, average them, and round the result.
*/

function average(array) {
    return array.reduce((a, b) => a + b) / array.length;
}
console.log(Math.round(average(
    SCRIPTS.filter(s => s.living).map(s => s.year))));
// → 1188
console.log(Math.round(average(
    SCRIPTS.filter(s => !s.living).map(s => s.year))));
// → 188

console.log("----");


function characterScript(code) {
    for (let script of SCRIPTS) {
        if (script.ranges.some(([from, to]) => {
            return code >= from && code < to;
        })) {
            return script;
        }
    }
    return null;
}

console.log(characterScript(121));

console.log("----");

function countBy(items, groupName) {
    let counts = [];
    for (let item of items) {
        let name = groupName(item);
        let known = counts.findIndex(c => c.name == name);
        if (known == -1) {
            counts.push({ name, count: 1 });
        } else {
            counts[known].count++;
        }
    }
    return counts;
}

console.log(countBy([1, 2, 3, 4, 5], n => n > 2)[0]);
console.log(countBy([1, 2, 3, 4, 5], n => n > 2)[1]);


/*
        name: "Ahom",
        ranges: [[71424, 71450], [71453, 71468], [71472, 71488]],
        direction: "ltr",
        year: 1250,
        living: true,
        link: "https://en.wikipedia.org/wiki/Ahom_alphabet"
*/