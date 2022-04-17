// A left rotation operation on an array of size n shifts each of the array's elements 1 unit to the left. 
// Given an integer, d, rotate the array that many steps left and return the result.

function rotateLeft(d, arr) {
    // Write your code here
    for(let i=0; i < d; i++){
        let temp = arr.shift();
        arr.push(temp);
    }
    return arr;
}

let d = 4;
A = [1,2,3,4,5];
console.log('Sample Test 0:\n', A);
console.log(rotateLeft(d, A));

