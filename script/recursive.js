function findSolution(target) {

    function find(current, history){

        if (current == target){
            console.log('got it');
            return history;
        } else if (current > target) {
            return null;
        } else {
            return      find(current + 5, `(${history} + 5)`) || 
                        find(current * 3, `(${history} * 3)`);
        }
    }
    return find(1, "1");
}

console.log(findSolution(24));


/*
When you write something inside ${} in a template literal, its result will be
computed, converted to a string, and included at that position
*/
