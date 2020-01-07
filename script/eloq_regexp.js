
/*
\d Any digit character
\w An alphanumeric character (“word character”)
\s Any whitespace character (space, tab, newline, and similar)
\D A character that is not a digit
\W A nonalphanumeric character
\S A nonwhitespace character
. Any character except for newline
*/

/*
function parseINI(string) {
    // Start with an object to hold the top-level fields
    let result = {};
    let section = result;
    string.split(/\r?\n/).forEach(line => {
        let match;
        if (match = line.match(/^(\w+)=(.*)$/)) {
            section[match[1]] = match[2];
        } else if (match = line.match(/^\[(.*)\]$/)) {
            section = result[match[1]] = {};
        } else if (!/^\s*(;.*)?$/.test(line)) {
            throw new Error("Line '" + line + "' is not valid.");
        }
    });
    return result;
}
*/

/*
let global = /abc/g;
console.log(global.lastIndex);
console.log(global.exec("xyz abc"));
console.log(global.lastIndex);
*/


// → ["abc"]
let sticky = /abc/y;
console.log(sticky.lastIndex);
sticky.lastIndex = 5;
console.log(sticky.exec("xyz abc abc"));
// → null


/*
let pattern = /y/g;
pattern.lastIndex = 3;
let match = pattern.exec("xyzzy");
console.log(match.index);
// → 4
console.log(pattern.lastIndex);
// → 5
*/

/*
let s = "the cia and fbi";
console.log(s.replace(/\b(fbi|cia)\b/g,
str => str.toUpperCase()));
// → the CIA and FBI
*/

/*
console.log(
    "Liskov, Barbara\nMcCarthy, John\nWadler, Philip"
        .replace(/(\w+), (\w+)/g, "$2 $1"));
    // → Barbara Liskov
    // John McCarthy
    // Philip Wadler
*/

/*
console.log("Borobudur".replace(/[ou]/, "a"));
// → Barobudur
console.log("Borobudur".replace(/[ou]/g, "a"));
// → Barabadar
*/
//console.log("papa".replace("p", "m"));
// → mapa

/*
let animalCount = /\b\d+ (pig|cow|chicken)s?\b/;
console.log(animalCount.test("the 15 pigs"));
// → true
console.log(animalCount.test("15 pigchickens"));
// → false
*/

/*
console.log(/cat/.test("concatenate"));
// → true
console.log(/\bcat\b/.test("concatenate"));
// → false
*/

/*
function getDate(string) {
    let [_, month, day, year] =
    /(\d{1,2})-(\d{1,2})-(\d{4})/.exec(string);
    return new Date(year, month - 1, day);
    }
    console.log(getDate("1-30-2003"));
    // → Thu Jan 30 2003 00:00:00 GMT+0100 (CET)


    // → Thu Jan 30 2003 00:00:00 GMT+0100 (CET)
*/
//console.log(new Date(2009, 11, 9, 12, 59, 59, 999));
//console.log(new Date(2009,11,23));

//console.log(new Date());

/*
console.log(/bad(ly)?/.exec("bad bad"));
// → ["bad", undefined]
console.log(/(\d)+/.exec("123456"));
// → ["123", "3"]
*/

/*
let quotedText = /'([^']*)'/;
console.log(quotedText.exec("she said 'hello'"));
// → ["'hello'", "hello"]
*/

/*
console.log("one two 100".match(/\d+/));
// → ["100"]
*/

/*
let match = /\d+/.exec("one two 100");
console.log(match);
// → ["100"]
console.log(match.index);
// → 8
*/

/*
let cartoonCrying = /boo+(hoo+)+/i;
console.log(cartoonCrying.test("Boohoooohoohooo"));
// → true
*/

/*
let dateTime = /\d{1,2}-\d{1,2}-\d{4} \d{1,2}:\d{2}/;
console.log(dateTime.test("1-30-2003 8:45"));
// → true
*/

/*
let neighbor = /neighbou?r/;
console.log(neighbor.test("neighbour"));
// → true
console.log(neighbor.test("neighbor"));
// → true
*/

/*
console.log(/'\d+'/.test("'123'"));
// → true
console.log(/'\d+'/.test("''"));
// → false
console.log(/'\d*'/.test("'123'"));
// → true
console.log(/'\d*'/.test("''"));
// → true
*/

/*
let notBinary = /[^01]/;
console.log(notBinary.test("1100100010100110"));
// → false
console.log(notBinary.test("1100100010200110"));
// → true
*/

/*
let dateTime = /\d\d-\d\d-\d\d\d\d \d\d:\d\d/;
console.log(dateTime.test("01-30-2003 15:20"));
// → true
console.log(dateTime.test("30-jan-2003 15:20"));
// → false
*/
/*
console.log(/[0123456789]/.test("in 1989"));
console.log(/[0-9]/.test("in 1989"));
*/

/*
console.log(re1);
console.log(re2);
console.log(eighteenPlus);
*/

/*
console.log(/abc/.test("abcde"));
console.log(/abc/.test("abxcde"));
*/


/*
let re1 = new RegExp("abc");
let re2 = /abc/;
let eighteenPlus = /eighteen\+/;*/