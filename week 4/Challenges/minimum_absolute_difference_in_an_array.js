// The absolute difference is the positive difference between two values a and b, 
// is written |a-b| or |b-a| and they are equal. If a = 3 and b = 2, |3-2|=|2-3|=1. 
// Given an array of integers, find the minimum absolute difference between any two elements in the array.

function minimumAbsoluteDifference(arr) {
    // Write your code here
    arr.sort((a,b)=> a-b);
    let minDiff = Math.abs(arr[1]-arr[0]);
    for(let i=1; i<arr.length-1; i++){
        let diff = Math.abs(arr[i+1]-arr[i]);
        minDiff = Math.min(minDiff,diff);
    }
    return minDiff;
}

const A=[3,-7,0];
console.log("Sample Test Case 0: ", A);
console.log("Min Abs Diff: ", minimumAbsoluteDifference(A),"\n");

const B=[-59, -36, -13, 1, -53, -92, -2, -96, -54, 75];
console.log("Sample Test Case 1: ", B);
console.log("Min Abs Diff: ", minimumAbsoluteDifference(B),"\n");

const C=[1, -3, 71, 68, 17];
console.log("Sample Test Case 2: ", C);
console.log("Min Abs Diff: ", minimumAbsoluteDifference(C));
