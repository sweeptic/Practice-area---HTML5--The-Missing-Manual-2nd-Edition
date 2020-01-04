


let string = "";

for (var i = 0; i < 6; i++) {
    string += "#";
    console.log(string);
}


for (var i = 1; i <= 100; i++) {

    if (i % 3 == 0 || i % 5 == 0) {

        if (i % 3 == 0) {
            console.log("Fizz" + " ");
        }

        if (i % 5 == 0) {
            console.log("Buzz" + " ");
        }

        if (i % 3 == 0 && i % 5 == 0) {
            console.log("FizzBuzz" + " ");
        }
    }

    else console.log(i);
}


var width = 8;
var height = 8;
var row = "";
var output= "" ;
for (var i = 0; i < height; i++) {
    /*console.log("#");*/
    for (var j = 0; j < height; j++) {

        if (i % 2 != 0) {

            if (j % 2 == 0) {
                row = row + "#";
            } else {
                row = row + " ";
            }
        }
        else {

            if (j % 2 == 0) {
                row = row + " ";
            } else {
                row = row + "#";
            }
        }

    }

    /*console.log(row);*/
    output = output + row + "\n";

    row = "";

}
console.log(output);