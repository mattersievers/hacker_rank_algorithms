// You will be given a list of integers, arr, and a single integer k. 
// You must create an array of length k from elements of arr such that its unfairness is minimized. 
// Call that array arr'. Unfairness of an array is calculated as:
//  max(arr')-min(arr')
//  where:
//  - max denotes the largest integer in arr'.
//  - min denotes the smallest integer in arr'.

function maxMin(k, arr) {
    // Write your code here
    arr.sort((a,b) => a-b);
    let minUnfair = arr[arr.length-1]-arr[0];
    for(let i=0; i<= arr.length - k; i++){
        let diff = arr[i+k-1] - arr[i];
        minUnfair = Math.min(minUnfair,diff);
    }
    return minUnfair;
}

const A = [10, 100, 300, 200, 1000, 20, 30];
let k = 3;
console.log("Test Case 0: An array of length ", k, " from the array ", A);
console.log("will have a minimum unfairness of ", maxMin(k,A),"\n");

const B = [1, 2, 3, 4, 10, 20, 30, 40, 100, 200];
k = 4;
console.log("Test Case 1: An array of length ", k, " from the array ", B);
console.log("will have a minimum unfairness of ", maxMin(k,B),"\n");

const C = [1, 2, 1, 2, 1];
k=2;
console.log("Test Case 15: An array of length ", k, " from the array ", C);
console.log("will have a minimum unfairness of ", maxMin(k,C),"\n");