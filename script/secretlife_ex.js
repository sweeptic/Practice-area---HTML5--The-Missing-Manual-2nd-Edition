//*********A vector type */

class Vec {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    plus = vector => { return (this.y + vector.y) + (this.x + vector.x); };

    minus = vector => { return (this.y + vector.y) - (this.x + vector.x); };

    get length() {
        return this.y - this.x;
    }
}

let vector = new Vec(5, 10);
let newVector = new Vec(9, 20);

/*
console.log(vector.plus(newVector));
console.log(vector.minus(newVector));
console.log(vector.length);
*/

//*********Groups**/


class Group {
    constructor() {
        this.data = [];
    }

    ad = function (param) {
        if (!this.data.includes(param)) {
            this.data.push(param);
        }
    };

    remove = function (param) {
        if (this.data.includes(param)) {
            this.data.splice(this.data.indexOf(param), 1);
        }

    };

    has = function (param) {
        if (this.data.includes(param)) {
            return true;
        } else {
            return false;
        }

    };


    static from = function (param) {
        let newArr = new Group();

        for (let item of param) {
            newArr.ad(item);
        }
        return newArr;


    }

}

class GroupIterator {
    constructor(group) {
        this.index = 0;
        this.group = group;
    }

    next() {
        if (this.index == this.group.data.length) return { done: true };

        let value = {
            index: this.index,
            value: this.group.data[this.index]
        };

        this.index++;

        return { value, done: false }

    }

}

Group.prototype[Symbol.iterator] = function () {
    return new GroupIterator(this);
}



let mySet = new Group();
let mySet2 = new Group();
mySet.ad(10);
mySet.ad(23);
mySet.ad(23);
mySet.ad(8);
mySet.ad(54);
mySet.remove(54);
console.log(mySet.has(8));

let nw = Group.from([1, 2, 3]);

for (item of nw.data) {
    console.log(item);
}


for (item of mySet.data) {
    console.log(item);
}

for (let { value } of mySet) {
    console.log(value);

}

