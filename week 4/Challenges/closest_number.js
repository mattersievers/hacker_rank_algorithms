// Sorting is useful as the first step in many different tasks. 
// The most common task is to make finding things easier, but there are other uses as well. 
// In this case, it will make it easier to determine which pair or pairs of elements 
// have the smallest absolute difference between them.

// Given a list of unsorted integers, arr, find the pair of elements that have 
// the smallest absolute difference between them. 
// If there are multiple pairs, find them all.

function closestNumbers(arr) {
    // Write your code here
    arr.sort((a,b) => a-b);
    let minDifference = arr[1] - arr[0];
    let minArray = [];
    
    for(let i = 0; i < arr.length - 1; i++){
        let j = i+1;        
        if(arr[j] - arr[i] === minDifference){
            minArray.push(arr[i],arr[j]);
        } else if(arr[j] - arr[i] < minDifference){
            minDifference = arr[j] - arr[i];
            minArray = [arr[i],arr[j]];
        }
    }
    return minArray;
}

const A= [-20, -3916237, -357920, -3620601, 7374819, -7330761, 30, 6246457, -6461594, 266854];
const B = [-5, 15, 25, 71, 63];

console.log("Test Case 0: ", A);
console.log("output: ", closestNumbers(A),"\n");

console.log("Test Case 5: ", B);
console.log("output: ", closestNumbers(B));