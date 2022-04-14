// Given an array of bird sightings where every element represents a bird type id, 
// determine the id of the most frequently sighted type. 
// If more than 1 type has been spotted that maximum amount, 
// return the smallest of their ids.

function migratoryBirds(arr) {
    // Write your code here
    let freqArr = new Array(5);
    freqArr.fill(0);
    let max = 0;
    
    for(let i=0; i < arr.length; i++){
        freqArr[arr[i]-1]++
        max = Math.max(freqArr[arr[i]-1], max)
    }
    
    const mostUsed = freqArr.indexOf(max)+1;
    return mostUsed;
}

A= [1, 4, 4, 4, 5, 3];
B= [1, 2, 3, 4, 5, 4, 3, 2, 1, 3, 4];

console.log("Test Case 0: ", A);
console.log(migratoryBirds(A),"\n");

console.log("Test Case 8: ", B);
console.log(migratoryBirds(B),"\n");